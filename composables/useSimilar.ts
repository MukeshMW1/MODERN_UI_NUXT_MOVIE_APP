import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#app";


export const useSimilar = () => {
  const movies = ref([]);
  const fetchSimilar = async (genres:number[]) => {
    const config = useRuntimeConfig();
    const BASE_URL = config.public.URL;
    const API_KEY = config.public.API;
const genreString = genres.join(',');

    try {
      const data = await $fetch(`${BASE_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          with_genres:genreString
        },
      });
      if (data && data.results) {
        movies.value = data.results;
        console.log(movies.value);
      } else {
        console.log("There are no data");
      }
    } catch (err) {
      console.log("Error fetching movies", err);
    }
  };
  return { fetchSimilar, movies };
};
