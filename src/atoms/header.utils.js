class HeaderUtils {
  static logoutHandler({ supabase, onChangeHandler }){ 
    supabase.auth.signOut();
  }
}

export default HeaderUtils;