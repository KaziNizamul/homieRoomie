import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import HomeUtils from "./utils/home.utils";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data, error] = await HomeUtils.fetchSupabaseData({ supabase });
        if (error) {
          setFetchError(error.message);
          return;
        } else {
          setSmoothies(data);
          setFetchError(null);
        }
      } catch (error) {
        setSmoothies(null);
        setFetchError(error);
      }
    };
    fetchData();
  }, []);
  

  console.log(supabase);
  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {smoothies.map(smoothie => (
              <div key={smoothie.id} className="smoothie">
                <h3>{smoothie.title}</h3>
              </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home