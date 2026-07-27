create extension if not exists pgcrypto;

create table if not exists public.collab_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.collab_friendships (
  id uuid primary key default gen_random_uuid(),
  user_a uuid not null references auth.users(id) on delete cascade,
  user_b uuid not null references auth.users(id) on delete cascade,
  requested_by uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected')),
  created_at timestamptz not null default now(),
  responded_at timestamptz,
  unique (user_a, user_b),
  check (user_a < user_b),
  check (requested_by = user_a or requested_by = user_b)
);

create table if not exists public.collab_workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 80),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.collab_workspace_members (
  workspace_id uuid not null references public.collab_workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'member')),
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create table if not exists public.collab_workspace_timeline (
  workspace_id uuid primary key references public.collab_workspaces(id) on delete cascade,
  data_json jsonb not null default '{"projects": []}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create or replace function public.collab_set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists collab_profiles_set_updated_at on public.collab_profiles;
create trigger collab_profiles_set_updated_at
before update on public.collab_profiles
for each row execute function public.collab_set_updated_at();

drop trigger if exists collab_workspaces_set_updated_at on public.collab_workspaces;
create trigger collab_workspaces_set_updated_at
before update on public.collab_workspaces
for each row execute function public.collab_set_updated_at();

drop trigger if exists collab_timeline_set_updated_at on public.collab_workspace_timeline;
create trigger collab_timeline_set_updated_at
before update on public.collab_workspace_timeline
for each row execute function public.collab_set_updated_at();

create or replace function public.collab_create_profile_for_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email is not null then
    insert into public.collab_profiles (id, email)
    values (new.id, lower(new.email))
    on conflict (id) do update set email = excluded.email;
  end if;
  return new;
end;
$$;

drop trigger if exists collab_create_profile_after_signup on auth.users;
create trigger collab_create_profile_after_signup
after insert on auth.users
for each row execute function public.collab_create_profile_for_user();

insert into public.collab_profiles (id, email)
select id, lower(email)
from auth.users
where email is not null
on conflict (id) do update set email = excluded.email;

create or replace function public.collab_ensure_profile()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_email text;
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  current_email := lower(coalesce(auth.jwt() ->> 'email', ''));
  if current_email = '' then
    raise exception '当前账号没有可用邮箱';
  end if;
  insert into public.collab_profiles (id, email)
  values (auth.uid(), current_email)
  on conflict (id) do update set email = excluded.email;
end;
$$;

create or replace function public.is_collab_workspace_member(target_workspace_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.collab_workspace_members
    where workspace_id = target_workspace_id
      and user_id = auth.uid()
  );
$$;

create or replace function public.collab_add_workspace_members()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.collab_workspace_members (workspace_id, user_id, role)
  values (new.id, new.owner_id, 'owner')
  on conflict do nothing;

  insert into public.collab_workspace_members (workspace_id, user_id, role)
  select
    new.id,
    case when friendship.user_a = new.owner_id then friendship.user_b else friendship.user_a end,
    'member'
  from public.collab_friendships friendship
  where friendship.status = 'accepted'
    and new.owner_id in (friendship.user_a, friendship.user_b)
  on conflict do nothing;

  insert into public.collab_workspace_timeline (workspace_id, updated_by)
  values (new.id, new.owner_id)
  on conflict do nothing;
  return new;
end;
$$;

drop trigger if exists collab_add_workspace_members_after_insert on public.collab_workspaces;
create trigger collab_add_workspace_members_after_insert
after insert on public.collab_workspaces
for each row execute function public.collab_add_workspace_members();

create or replace function public.collab_share_existing_workspaces(first_user uuid, second_user uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.collab_workspace_members (workspace_id, user_id, role)
  select id, second_user, 'member'
  from public.collab_workspaces
  where owner_id = first_user
  on conflict do nothing;

  insert into public.collab_workspace_members (workspace_id, user_id, role)
  select id, first_user, 'member'
  from public.collab_workspaces
  where owner_id = second_user
  on conflict do nothing;
end;
$$;

create or replace function public.collab_send_friend_request(target_email text)
returns table (friendship_id uuid, friendship_status text, request_direction text)
language plpgsql
security definer
set search_path = public
as $$
declare
  target_id uuid;
  first_id uuid;
  second_id uuid;
  friendship public.collab_friendships;
begin
  perform public.collab_ensure_profile();
  select id into target_id
  from public.collab_profiles
  where email = lower(trim(target_email));

  if target_id is null then
    raise exception '未找到这个账号，请确认对方已登录过私人排期且邮箱正确';
  end if;
  if target_id = auth.uid() then
    raise exception '不能添加自己为好友';
  end if;

  first_id := least(auth.uid(), target_id);
  second_id := greatest(auth.uid(), target_id);
  select * into friendship
  from public.collab_friendships
  where user_a = first_id and user_b = second_id;

  if not found then
    insert into public.collab_friendships (user_a, user_b, requested_by, status)
    values (first_id, second_id, auth.uid(), 'pending')
    returning * into friendship;
    return query select friendship.id, friendship.status, 'sent'::text;
    return;
  end if;

  if friendship.status = 'accepted' then
    return query select friendship.id, friendship.status, 'friends'::text;
    return;
  end if;

  if friendship.status = 'pending' and friendship.requested_by <> auth.uid() then
    return query select friendship.id, friendship.status, 'received'::text;
    return;
  end if;

  update public.collab_friendships
  set requested_by = auth.uid(), status = 'pending', responded_at = null
  where id = friendship.id
  returning * into friendship;
  return query select friendship.id, friendship.status, 'sent'::text;
end;
$$;

create or replace function public.collab_respond_friend_request(target_friendship_id uuid, accept_request boolean)
returns table (friendship_id uuid, friendship_status text)
language plpgsql
security definer
set search_path = public
as $$
declare
  friendship public.collab_friendships;
  other_user uuid;
begin
  select * into friendship
  from public.collab_friendships
  where id = target_friendship_id;

  if not found then
    raise exception '好友请求不存在';
  end if;
  if auth.uid() is null or auth.uid() = friendship.requested_by then
    raise exception '不能处理这条好友请求';
  end if;
  if auth.uid() not in (friendship.user_a, friendship.user_b) then
    raise exception '没有处理这条好友请求的权限';
  end if;

  update public.collab_friendships
  set status = case when accept_request then 'accepted' else 'rejected' end,
      responded_at = now()
  where id = friendship.id
  returning * into friendship;

  if accept_request then
    other_user := case when friendship.user_a = auth.uid() then friendship.user_b else friendship.user_a end;
    perform public.collab_share_existing_workspaces(auth.uid(), other_user);
  end if;

  return query select friendship.id, friendship.status;
end;
$$;

create or replace function public.collab_list_friends()
returns table (
  friendship_id uuid,
  friend_id uuid,
  friend_email text,
  friendship_status text,
  request_direction text,
  requested_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
    friendship.id,
    case when friendship.user_a = auth.uid() then friendship.user_b else friendship.user_a end,
    profile.email,
    friendship.status,
    case when friendship.requested_by = auth.uid() then 'sent' else 'received' end,
    friendship.created_at
  from public.collab_friendships friendship
  join public.collab_profiles profile
    on profile.id = case when friendship.user_a = auth.uid() then friendship.user_b else friendship.user_a end
  where auth.uid() in (friendship.user_a, friendship.user_b)
  order by friendship.created_at desc;
$$;

alter table public.collab_profiles enable row level security;
alter table public.collab_friendships enable row level security;
alter table public.collab_workspaces enable row level security;
alter table public.collab_workspace_members enable row level security;
alter table public.collab_workspace_timeline enable row level security;

drop policy if exists "collab_profiles_read_self" on public.collab_profiles;
create policy "collab_profiles_read_self"
on public.collab_profiles for select
using (id = auth.uid());

drop policy if exists "collab_friendships_read_own" on public.collab_friendships;
create policy "collab_friendships_read_own"
on public.collab_friendships for select
using (auth.uid() in (user_a, user_b));

drop policy if exists "collab_workspaces_read_members" on public.collab_workspaces;
create policy "collab_workspaces_read_members"
on public.collab_workspaces for select
using (public.is_collab_workspace_member(id));

drop policy if exists "collab_workspaces_create_owner" on public.collab_workspaces;
create policy "collab_workspaces_create_owner"
on public.collab_workspaces for insert
with check (owner_id = auth.uid());

drop policy if exists "collab_workspaces_update_owner" on public.collab_workspaces;
create policy "collab_workspaces_update_owner"
on public.collab_workspaces for update
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

drop policy if exists "collab_workspaces_delete_owner" on public.collab_workspaces;
create policy "collab_workspaces_delete_owner"
on public.collab_workspaces for delete
using (owner_id = auth.uid());

drop policy if exists "collab_members_read_members" on public.collab_workspace_members;
create policy "collab_members_read_members"
on public.collab_workspace_members for select
using (public.is_collab_workspace_member(workspace_id));

drop policy if exists "collab_timeline_read_members" on public.collab_workspace_timeline;
create policy "collab_timeline_read_members"
on public.collab_workspace_timeline for select
using (public.is_collab_workspace_member(workspace_id));

drop policy if exists "collab_timeline_update_members" on public.collab_workspace_timeline;
create policy "collab_timeline_update_members"
on public.collab_workspace_timeline for update
using (public.is_collab_workspace_member(workspace_id))
with check (public.is_collab_workspace_member(workspace_id));

grant select, insert, update, delete on public.collab_workspaces to authenticated;
grant select on public.collab_workspace_members to authenticated;
grant select, update on public.collab_workspace_timeline to authenticated;
grant execute on function public.collab_ensure_profile() to authenticated;
grant execute on function public.collab_send_friend_request(text) to authenticated;
grant execute on function public.collab_respond_friend_request(uuid, boolean) to authenticated;
grant execute on function public.collab_list_friends() to authenticated;

alter table public.collab_workspace_timeline replica identity full;

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'collab_workspace_timeline'
  ) then
    alter publication supabase_realtime add table public.collab_workspace_timeline;
  end if;
exception
  when undefined_object then null;
end;
$$;
