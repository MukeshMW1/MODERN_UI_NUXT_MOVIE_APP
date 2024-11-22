import { ref, onMounted } from "vue";

export const useFetch = () => {
  const movies = ref([]);
  const fetchMovies = async () => {
    const config = useRuntimeConfig();
    const BASE_URL = config.public.URL;
    const API_KEY = config.public.API;
    try {
      const data = await $fetch(`${BASE_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
        },
      });
      if (data && data.results) {
        movies.value = data.results;
        console.log(movies.value);
      } else {
        console.log("There are no data");
      }
    } catch (err) {
      console.log("Error fetching movies", err.message);
    }
  };
  return { fetchMovies, movies };
};
