create or replace function public.collab_create_workspace(
  workspace_title text,
  initial_timeline jsonb
)
returns table (
  id uuid,
  title text,
  owner_id uuid,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  workspace_record public.collab_workspaces;
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;

  if char_length(trim(coalesce(workspace_title, ''))) not between 1 and 80 then
    raise exception '项目名称需为 1 至 80 个字符';
  end if;

  insert into public.collab_workspaces (owner_id, title)
  values (auth.uid(), trim(workspace_title))
  returning * into workspace_record;

  update public.collab_workspace_timeline
  set data_json = coalesce(initial_timeline, '{"projects": []}'::jsonb),
      updated_by = auth.uid()
  where workspace_id = workspace_record.id;

  return query
  select
    workspace_record.id,
    workspace_record.title,
    workspace_record.owner_id,
    workspace_record.created_at,
    workspace_record.updated_at;
end;
$$;

revoke execute on function public.collab_create_workspace(text, jsonb) from public;
grant execute on function public.collab_create_workspace(text, jsonb) to authenticated;
