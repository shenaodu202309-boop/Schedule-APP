create table if not exists public.collab_workspace_invite_requests (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.collab_workspaces(id) on delete cascade,
  requested_by uuid not null references auth.users(id) on delete cascade,
  target_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  unique (workspace_id, target_user_id, status)
);

create or replace function public.collab_request_workspace_member(target_workspace_id uuid, target_user_id uuid)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_collab_workspace_member(target_workspace_id) then raise exception '你不是这条协作时间轴的成员'; end if;
  if exists (select 1 from public.collab_workspace_members where workspace_id = target_workspace_id and user_id = target_user_id) then return; end if;
  insert into public.collab_workspace_invite_requests (workspace_id, requested_by, target_user_id)
  values (target_workspace_id, auth.uid(), target_user_id) on conflict do nothing;
end; $$;

create or replace function public.collab_resolve_workspace_invite(target_request_id uuid, approve boolean)
returns void language plpgsql security definer set search_path = public as $$
declare request_row public.collab_workspace_invite_requests;
begin
  select * into request_row from public.collab_workspace_invite_requests where id = target_request_id and status = 'pending';
  if not found then return; end if;
  if not exists (select 1 from public.collab_workspaces where id = request_row.workspace_id and owner_id = auth.uid()) then raise exception '只有管理员可以处理邀请申请'; end if;
  update public.collab_workspace_invite_requests set status = case when approve then 'approved' else 'rejected' end, resolved_at = now() where id = target_request_id;
  if approve then insert into public.collab_workspace_members (workspace_id, user_id, role) values (request_row.workspace_id, request_row.target_user_id, 'member') on conflict do nothing; end if;
end; $$;

create or replace function public.collab_remove_workspace_member(target_workspace_id uuid, target_user_id uuid)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.collab_workspaces where id = target_workspace_id and owner_id = auth.uid()) then raise exception '只有管理员可以移除成员'; end if;
  delete from public.collab_workspace_members where workspace_id = target_workspace_id and user_id = target_user_id and role = 'member';
end; $$;

revoke execute on function public.collab_request_workspace_member(uuid, uuid) from public;
revoke execute on function public.collab_resolve_workspace_invite(uuid, boolean) from public;
revoke execute on function public.collab_remove_workspace_member(uuid, uuid) from public;
grant execute on function public.collab_request_workspace_member(uuid, uuid) to authenticated;
grant execute on function public.collab_resolve_workspace_invite(uuid, boolean) to authenticated;
grant execute on function public.collab_remove_workspace_member(uuid, uuid) to authenticated;
