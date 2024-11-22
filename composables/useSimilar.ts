import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#app";


export const useSimilar = () => {
  const movies = ref([]);
  const fetchSimilar = async (currentId:string, page=1) => {
    const config = useRuntimeConfig();
    const BASE_URL = config.public.URL;
    const API_KEY = config.public.API;


    try {
      const data = await $fetch(`${BASE_URL}/movie/${currentId}/similar`, {
        params: {
          api_key: API_KEY,
         
       
        },
      });
      if (data && data.results) {
        movies.value = data.results
        console.log(movies.value);
      } else {
        console.log("There are no data");
      }
    } catch (err) {
      console.log("Error fetching movies");
    }
  };
  return { fetchSimilar, movies };
};
