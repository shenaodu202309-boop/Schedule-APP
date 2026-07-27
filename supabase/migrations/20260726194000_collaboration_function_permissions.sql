-- Keep internal SECURITY DEFINER helpers callable only by their owning functions/triggers.
revoke execute on function public.collab_set_updated_at() from public;
revoke execute on function public.collab_create_profile_for_user() from public;
revoke execute on function public.collab_add_workspace_members() from public;
revoke execute on function public.collab_share_existing_workspaces(uuid, uuid) from public;

-- RPCs and RLS helpers may be invoked by signed-in application users only.
revoke execute on function public.collab_ensure_profile() from public;
revoke execute on function public.is_collab_workspace_member(uuid) from public;
revoke execute on function public.collab_send_friend_request(text) from public;
revoke execute on function public.collab_respond_friend_request(uuid, boolean) from public;
revoke execute on function public.collab_list_friends() from public;

grant execute on function public.collab_ensure_profile() to authenticated;
grant execute on function public.is_collab_workspace_member(uuid) to authenticated;
grant execute on function public.collab_send_friend_request(text) to authenticated;
grant execute on function public.collab_respond_friend_request(uuid, boolean) to authenticated;
grant execute on function public.collab_list_friends() to authenticated;
