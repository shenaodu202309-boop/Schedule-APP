-- Assigned tasks stay visible to every workspace member, but only their assignee
-- may alter or remove them. Timeline updates go through this RPC so the rule is
-- enforced even when a request bypasses the browser UI.
create or replace function public.collab_update_workspace_timeline(
  target_workspace_id uuid,
  next_timeline jsonb
)
returns public.collab_workspace_timeline
language plpgsql
security definer
set search_path = public
as $$
declare
  current_timeline public.collab_workspace_timeline;
  old_task jsonb;
  replacement_task jsonb;
  assigned_user_id uuid;
begin
  if auth.uid() is null or not public.is_collab_workspace_member(target_workspace_id) then
    raise exception 'You are not a member of this workspace.' using errcode = '42501';
  end if;

  select * into current_timeline
  from public.collab_workspace_timeline
  where workspace_id = target_workspace_id
  for update;

  if not found then
    raise exception 'Workspace timeline was not found.' using errcode = 'P0002';
  end if;

  if jsonb_typeof(next_timeline) <> 'object' or jsonb_typeof(coalesce(next_timeline -> 'projects', '[]'::jsonb)) <> 'array' then
    raise exception 'Invalid timeline data.' using errcode = '22023';
  end if;

  -- An assignee must remain a member of this workspace.
  for assigned_user_id in
    select nullif(task ->> 'assigneeId', '')::uuid
    from jsonb_array_elements(next_timeline -> 'projects') as project,
         jsonb_array_elements(coalesce(project -> 'tasks', '[]'::jsonb)) as task
    where coalesce(task ->> 'assigneeId', '') <> ''
  loop
    if not exists (
      select 1
      from public.collab_workspace_members
      where workspace_id = target_workspace_id
        and user_id = assigned_user_id
    ) then
      raise exception 'The selected assignee is not a workspace member.' using errcode = '23503';
    end if;
  end loop;

  -- Preserve every task assigned to someone else byte-for-byte. The assignee may
  -- edit their task; unassigned tasks remain jointly editable.
  for old_task in
    select task
    from jsonb_array_elements(coalesce(current_timeline.data_json -> 'projects', '[]'::jsonb)) as project,
         jsonb_array_elements(coalesce(project -> 'tasks', '[]'::jsonb)) as task
    where coalesce(task ->> 'assigneeId', '') <> ''
      and (task ->> 'assigneeId') <> auth.uid()::text
  loop
    select task into replacement_task
    from jsonb_array_elements(next_timeline -> 'projects') as project,
         jsonb_array_elements(coalesce(project -> 'tasks', '[]'::jsonb)) as task
    where task ->> 'id' = old_task ->> 'id'
    limit 1;

    if replacement_task is null or replacement_task is distinct from old_task then
      raise exception 'Only the assigned member can edit this task.' using errcode = '42501';
    end if;
  end loop;

  update public.collab_workspace_timeline
  set data_json = next_timeline,
      updated_by = auth.uid()
  where workspace_id = target_workspace_id
  returning * into current_timeline;

  return current_timeline;
end;
$$;

revoke update on public.collab_workspace_timeline from authenticated;
grant execute on function public.collab_update_workspace_timeline(uuid, jsonb) to authenticated;
