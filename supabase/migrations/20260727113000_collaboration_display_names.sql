alter table public.collab_profiles
  add column if not exists display_name text;

alter table public.collab_profiles
  drop constraint if exists collab_profiles_display_name_length;

alter table public.collab_profiles
  add constraint collab_profiles_display_name_length
  check (display_name is null or char_length(display_name) between 1 and 40);

create or replace function public.collab_set_display_name(new_display_name text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_name text := nullif(btrim(coalesce(new_display_name, '')), '');
begin
  if auth.uid() is null then
    raise exception '请先登录账号';
  end if;
  if normalized_name is not null and char_length(normalized_name) > 40 then
    raise exception '协作名称不能超过 40 个字符';
  end if;
  perform public.collab_ensure_profile();
  update public.collab_profiles
  set display_name = normalized_name
  where id = auth.uid();
  return normalized_name;
end;
$$;

create or replace function public.collab_get_my_profile()
returns table (
  email text,
  display_name text
)
language sql
stable
security definer
set search_path = public
as $$
  select profile.email, profile.display_name
  from public.collab_profiles profile
  where profile.id = auth.uid();
$$;

drop function if exists public.collab_list_friends();

create function public.collab_list_friends()
returns table (
  friendship_id uuid,
  friend_id uuid,
  friend_email text,
  friend_display_name text,
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
    profile.display_name,
    friendship.status,
    case when friendship.requested_by = auth.uid() then 'sent' else 'received' end,
    friendship.created_at
  from public.collab_friendships friendship
  join public.collab_profiles profile
    on profile.id = case when friendship.user_a = auth.uid() then friendship.user_b else friendship.user_a end
  where auth.uid() in (friendship.user_a, friendship.user_b)
  order by friendship.created_at desc;
$$;

revoke execute on function public.collab_set_display_name(text) from public;
revoke execute on function public.collab_get_my_profile() from public;
revoke execute on function public.collab_list_friends() from public;
grant execute on function public.collab_set_display_name(text) to authenticated;
grant execute on function public.collab_get_my_profile() to authenticated;
grant execute on function public.collab_list_friends() to authenticated;
