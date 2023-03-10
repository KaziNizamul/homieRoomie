class HomeUtils {
  static onHeaderChangeHandler = async ({
    supabase,
  }) => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.log(error)
    }
  }
}

export default HomeUtils;