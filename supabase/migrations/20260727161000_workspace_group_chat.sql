create table if not exists public.collab_workspace_messages (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.collab_workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  sender_name text not null,
  content text not null check (char_length(trim(content)) between 1 and 800),
  created_at timestamptz not null default now()
);

create index if not exists collab_workspace_messages_workspace_created_at_idx
  on public.collab_workspace_messages (workspace_id, created_at);

alter table public.collab_workspace_messages enable row level security;

drop policy if exists "collab_workspace_messages_read_members" on public.collab_workspace_messages;
create policy "collab_workspace_messages_read_members"
on public.collab_workspace_messages for select
using (public.is_collab_workspace_member(workspace_id));

create or replace function public.collab_send_workspace_message(
  target_workspace_id uuid,
  message_text text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_message text := trim(coalesce(message_text, ''));
  sender_label text;
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  if not public.is_collab_workspace_member(target_workspace_id) then
    raise exception '你不是这条协作时间轴的成员';
  end if;
  if char_length(normalized_message) not between 1 and 800 then
    raise exception '消息长度需为 1 至 800 个字符';
  end if;

  select coalesce(nullif(trim(profile.display_name), ''), nullif(auth.jwt() ->> 'email', ''), '协作成员')
  into sender_label
  from public.collab_profiles as profile
  where profile.id = auth.uid();

  insert into public.collab_workspace_messages (workspace_id, user_id, sender_name, content)
  values (target_workspace_id, auth.uid(), coalesce(sender_label, '协作成员'), normalized_message);
end;
$$;

revoke all on table public.collab_workspace_messages from public;
grant select on table public.collab_workspace_messages to authenticated;
revoke execute on function public.collab_send_workspace_message(uuid, text) from public;
grant execute on function public.collab_send_workspace_message(uuid, text) to authenticated;

create or replace function public.collab_remove_workspace_member(
  target_workspace_id uuid,
  target_user_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
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
  delete from public.collab_workspace_members
  where workspace_id = target_workspace_id
    and user_id = target_user_id
    and role = 'member';
end;
$$;

create or replace function public.collab_transfer_workspace_ownership(
  target_workspace_id uuid,
  next_owner_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_owner_id uuid;
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;

  select owner_id into current_owner_id
  from public.collab_workspaces
  where id = target_workspace_id
  for update;

  if current_owner_id is null then
    raise exception '未找到这条协作时间轴';
  end if;
  if current_owner_id <> auth.uid() then
    raise exception '只有管理员可以移交管理权限';
  end if;
  if next_owner_id = current_owner_id then
    raise exception '该成员已经是管理员';
  end if;
  if not exists (
    select 1 from public.collab_workspace_members
    where workspace_id = target_workspace_id
      and user_id = next_owner_id
      and role = 'member'
  ) then
    raise exception '只能将管理员头衔移交给当前成员';
  end if;

  update public.collab_workspaces
  set owner_id = next_owner_id
  where id = target_workspace_id;
  update public.collab_workspace_members
  set role = 'member'
  where workspace_id = target_workspace_id and user_id = current_owner_id;
  update public.collab_workspace_members
  set role = 'owner'
  where workspace_id = target_workspace_id and user_id = next_owner_id;
end;
$$;

revoke execute on function public.collab_remove_workspace_member(uuid, uuid) from public;
revoke execute on function public.collab_transfer_workspace_ownership(uuid, uuid) from public;
grant execute on function public.collab_remove_workspace_member(uuid, uuid) to authenticated;
grant execute on function public.collab_transfer_workspace_ownership(uuid, uuid) to authenticated;

create table if not exists public.collab_workspace_invite_requests (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.collab_workspaces(id) on delete cascade,
  requested_by uuid not null references auth.users(id) on delete cascade,
  target_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending_member' check (status in ('pending_admin', 'pending_member', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  unique (workspace_id, target_user_id, status)
);

alter table public.collab_workspace_invite_requests
  drop constraint if exists collab_workspace_invite_requests_status_check;
update public.collab_workspace_invite_requests
set status = 'pending_member'
where status = 'pending';
alter table public.collab_workspace_invite_requests
  alter column status set default 'pending_member';
alter table public.collab_workspace_invite_requests
  add constraint collab_workspace_invite_requests_status_check
  check (status in ('pending_admin', 'pending_member', 'approved', 'rejected'));

create or replace function public.collab_request_workspace_member(
  target_workspace_id uuid,
  target_user_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  if not public.is_collab_workspace_member(target_workspace_id) then
    raise exception '你不是这条协作时间轴的成员';
  end if;
  if target_user_id = auth.uid() then
    raise exception '不能邀请自己';
  end if;
  if not exists (
    select 1 from public.collab_friendships
    where status = 'accepted'
      and auth.uid() in (user_a, user_b)
      and target_user_id in (user_a, user_b)
  ) then
    raise exception '只能邀请已添加的好友';
  end if;
  if exists (
    select 1 from public.collab_workspace_members
    where workspace_id = target_workspace_id and user_id = target_user_id
  ) then
    return;
  end if;
  insert into public.collab_workspace_invite_requests (workspace_id, requested_by, target_user_id, status)
  values (
    target_workspace_id,
    auth.uid(),
    target_user_id,
    case when exists (
      select 1 from public.collab_workspaces
      where id = target_workspace_id and owner_id = auth.uid()
    ) then 'pending_member' else 'pending_admin' end
  )
  on conflict do nothing;
end;
$$;

create or replace function public.collab_list_my_workspace_invites()
returns table (
  request_id uuid,
  workspace_id uuid,
  workspace_title text,
  invited_by_name text,
  invited_by_email text,
  created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    request.id,
    workspace.id,
    workspace.title,
    coalesce(nullif(trim(profile.display_name), ''), profile.email, '协作成员'),
    profile.email,
    request.created_at
  from public.collab_workspace_invite_requests as request
  join public.collab_workspaces as workspace on workspace.id = request.workspace_id
  join public.collab_profiles as profile on profile.id = request.requested_by
  where request.target_user_id = auth.uid()
    and request.status = 'pending_member'
  order by request.created_at desc;
$$;

create or replace function public.collab_respond_workspace_invite(
  target_request_id uuid,
  accept_invitation boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  request_row public.collab_workspace_invite_requests;
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  select * into request_row
  from public.collab_workspace_invite_requests
  where id = target_request_id
    and target_user_id = auth.uid()
    and status = 'pending_member'
  for update;
  if not found then
    raise exception '协作邀请不存在或已处理';
  end if;

  update public.collab_workspace_invite_requests
  set status = case when accept_invitation then 'approved' else 'rejected' end,
      resolved_at = now()
  where id = request_row.id;
  if accept_invitation then
    insert into public.collab_workspace_members (workspace_id, user_id, role)
    values (request_row.workspace_id, auth.uid(), 'member')
    on conflict do nothing;
  end if;
end;
$$;

create or replace function public.collab_list_workspace_invite_approvals(
  target_workspace_id uuid
)
returns table (
  request_id uuid,
  target_name text,
  target_email text,
  requested_by_name text,
  created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    request.id,
    coalesce(nullif(trim(target_profile.display_name), ''), target_profile.email, '好友'),
    target_profile.email,
    coalesce(nullif(trim(requester_profile.display_name), ''), requester_profile.email, '成员'),
    request.created_at
  from public.collab_workspace_invite_requests as request
  join public.collab_workspaces as workspace on workspace.id = request.workspace_id
  join public.collab_profiles as target_profile on target_profile.id = request.target_user_id
  join public.collab_profiles as requester_profile on requester_profile.id = request.requested_by
  where request.workspace_id = target_workspace_id
    and workspace.owner_id = auth.uid()
    and request.status = 'pending_admin'
  order by request.created_at asc;
$$;

create or replace function public.collab_resolve_workspace_invite(
  target_request_id uuid,
  approve boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  update public.collab_workspace_invite_requests as request
  set status = case when approve then 'pending_member' else 'rejected' end,
      resolved_at = case when approve then null else now() end
  where request.id = target_request_id
    and request.status = 'pending_admin'
    and exists (
      select 1 from public.collab_workspaces as workspace
      where workspace.id = request.workspace_id and workspace.owner_id = auth.uid()
    );
  if not found then
    raise exception '邀请申请不存在或你没有审核权限';
  end if;
end;
$$;

revoke execute on function public.collab_invite_workspace_members(uuid, uuid[]) from authenticated;
revoke execute on function public.collab_resolve_workspace_invite(uuid, boolean) from public;
grant execute on function public.collab_request_workspace_member(uuid, uuid) to authenticated;
grant execute on function public.collab_list_my_workspace_invites() to authenticated;
grant execute on function public.collab_respond_workspace_invite(uuid, boolean) to authenticated;
grant execute on function public.collab_list_workspace_invite_approvals(uuid) to authenticated;
grant execute on function public.collab_resolve_workspace_invite(uuid, boolean) to authenticated;

alter table public.collab_workspace_messages replica identity full;

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'collab_workspace_messages'
  ) then
    alter publication supabase_realtime add table public.collab_workspace_messages;
  end if;
exception
  when undefined_object then null;
end;
$$;
