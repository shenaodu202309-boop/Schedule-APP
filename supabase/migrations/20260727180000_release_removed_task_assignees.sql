-- Removing a member must not leave tasks permanently locked to an account that
-- can no longer access the workspace.
create or replace function public.collab_remove_workspace_member(
  target_workspace_id uuid,
  target_user_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_timeline public.collab_workspace_timeline;
  released_projects jsonb;
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  if not exists (
    select 1 from public.collab_workspaces
    where id = target_workspace_id and owner_id = auth.uid()
  ) then
    raise exception '只有管理员可以移除成员';
  end if;

  select * into current_timeline
  from public.collab_workspace_timeline
  where workspace_id = target_workspace_id
  for update;

  if found then
    select coalesce(jsonb_agg(
      jsonb_set(
        project.value,
        '{tasks}',
        coalesce((
          select jsonb_agg(
            case
              when task.value ->> 'assigneeId' = target_user_id::text
                then task.value - 'assigneeId' - 'assigneeName'
              else task.value
            end
            order by task.ordinality
          )
          from jsonb_array_elements(coalesce(project.value -> 'tasks', '[]'::jsonb)) with ordinality as task(value, ordinality)
        ), '[]'::jsonb),
        true
      )
      order by project.ordinality
    ), '[]'::jsonb)
    into released_projects
    from jsonb_array_elements(coalesce(current_timeline.data_json -> 'projects', '[]'::jsonb)) with ordinality as project(value, ordinality);

    update public.collab_workspace_timeline
    set data_json = jsonb_set(current_timeline.data_json, '{projects}', released_projects, true),
        updated_by = auth.uid()
    where workspace_id = target_workspace_id;
  end if;

  delete from public.collab_workspace_members
  where workspace_id = target_workspace_id
    and user_id = target_user_id
    and role = 'member';
end;
$$;

revoke execute on function public.collab_remove_workspace_member(uuid, uuid) from public;
grant execute on function public.collab_remove_workspace_member(uuid, uuid) to authenticated;
