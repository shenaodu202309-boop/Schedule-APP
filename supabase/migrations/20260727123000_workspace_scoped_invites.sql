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
  insert into public.collab_workspace_timeline (workspace_id, updated_by)
  values (new.id, new.owner_id)
  on conflict do nothing;
  return new;
end;
$$;

create or replace function public.collab_share_existing_workspaces(first_user uuid, second_user uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Friendship does not grant access to any workspace by itself.
  return;
end;
$$;

create or replace function public.collab_invite_workspace_members(
  target_workspace_id uuid,
  target_user_ids uuid[]
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then raise exception '请先登录账号'; end if;
  if not exists (select 1 from public.collab_workspaces where id = target_workspace_id and owner_id = auth.uid()) then
    raise exception '只有该协作时间轴的创建者可以邀请成员';
  end if;
  insert into public.collab_workspace_members (workspace_id, user_id, role)
  select target_workspace_id, candidate.user_id, 'member'
  from unnest(coalesce(target_user_ids, '{}'::uuid[])) as candidate(user_id)
  where candidate.user_id <> auth.uid()
    and exists (
      select 1 from public.collab_friendships friendship
      where friendship.status = 'accepted'
        and auth.uid() in (friendship.user_a, friendship.user_b)
        and candidate.user_id in (friendship.user_a, friendship.user_b)
    )
  on conflict do nothing;
end;
$$;

revoke execute on function public.collab_invite_workspace_members(uuid, uuid[]) from public;
grant execute on function public.collab_invite_workspace_members(uuid, uuid[]) to authenticated;
