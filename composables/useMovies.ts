export const useMovies = async () => {
    const config = useRuntimeConfig();
    const BASE_URL = config.public.URL;
    const API_KEY = config.public.API;
  
    try {
      const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data?.results) {
        return data.results; // Return movie results
      } else {
        throw new Error("No movie data found");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error; // Re-throw for handling in the component
    }
  };
  