<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useRuntimeConfig } from "#app";
import { useNavigation } from "~/composables/handleClick";





export default {
  setup() {
    const {handleClick} = useNavigation();
    const route = useRoute();
    const query = ref(route.query.q || ""); // Get search query from URL
    const movies = ref([]);
    const loading = ref(false);
    const error = ref("");
    const config = useRuntimeConfig();

    const fetchMovies = async (searchTerm) => {
      if (!searchTerm) {
        console.log("No search term provided.");
        return;
      }

      const BASE_URL = config.public.URL;
      const API_KEY = config.public.API;

      // Ensure the search term is encoded to handle special characters
      const encodedSearchTerm = encodeURIComponent(searchTerm);

      try {
        const data = await $fetch(
          `${BASE_URL}/search/movie`,
          {
            params: {
              api_key: API_KEY,
              query: encodedSearchTerm,
            },
          }
        );

        

        if (data.results && data.results.length > 0) {
          movies.value = data.results;
        } else {
          error.value = "No results found.";
        }
      } catch (err) {
        // Log a generic error message and avoid exposing sensitive info
        console.error("An error occurred while fetching movies:", err.message || err);
        error.value = "Failed to fetch movies. Please try again later.";
      } finally {
        loading.value = false;
      }
    };

    // Fetch movies when the component is mounted or the query changes
    onMounted(() => {
      fetchMovies(query.value);
    });

    watch(
      () => route.query.q,
      (newQuery) => {
        query.value = newQuery;
        fetchMovies(newQuery);
      }
    );

    return {
      query,
      movies,
      loading,
      error,
      handleClick
    };
  },
};
</script>

<template>
  <div class="max-w-[90vw] mx-auto py-10">
    <h1 class="text-2xl  mb-10 text-white font-medium text-[30px]">Search Results for "{{ query }}"</h1>

    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <div v-if="movies.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="bg-gray-800 text-gray-200 p-4 rounded-lg hover:scale-105 transform transition-all cursor-pointer "  @click="handleClick(movie.id)"
      >
        <img
          :src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder.jpg'"
          :alt="movie.title"
          class="rounded-lg mb-4 w-full h-[300px] object-cover"
        />
        <h2 class="text-lg font-semibold">{{ movie.title }}</h2>
        <p class="text-sm">{{ movie.release_date }}</p>
      </div>
    </div>

    <div v-else-if="!loading" class="text-center text-gray-500">No movies found.</div>
  </div>
</template>
