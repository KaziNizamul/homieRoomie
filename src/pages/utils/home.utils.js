class HomeUtils {
  static fetchSupabaseData = async ({
    supabase,
  }) => {
    const { data, error } = await supabase
    .from("smoothies")
    .select("*")

    return [data, error]
  }
}

export default HomeUtils;