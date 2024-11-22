<script lang="ts" setup>
import { useNavigation } from '~/composables/handleClick'; // Import the composable
const { handleClick } = useNavigation();
import { useFetch } from '~/composables/useFetch';

const {fetchMovies,movies} = useFetch();

onMounted(() => {
  fetchMovies();
});


</script>


<template>
    <div class="bg-black/90  backdrop-blur-sm backdrop-brightness-125 shadow-lg rounded-lg p-6 mx-4">
      <h2 class="text-white font-bold text-center mb-10 text-[32px]">Popular Movies</h2>
      <div class="grid md:grid-cols-5 grid-cols-3 gap-4 w-full">
        <div
          class=" rounded-[10px] bg-black/50 backdrop-blur-sm backdrop-brightness-125 shadow-lg md:w-48 w-28 sm:w-40"
          v-for="movie in movies"
          :key="movie.id"
          v-if="movies.length > 0"
        >
          <div @click="handleClick(movie.id)" class="cursor-pointer hover:-translate-y-3 transform duration-300">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt=""
              class="w-full h-60 rounded-[10px]"
            />
            <div class="flex justify-between items-center mx-4">
              <p class="text-[12px] md:text-[14px] text-center py-2 text-white font-semibold">
                {{ movie.title }}
              </p>
              <p class="text-[12px] md:text-[14px] text-center py-2 text-white font-semibold">
                {{ movie.release_date }}  
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center text-gray-500 text-[30px]" v-if="movies.length === 0 ">
<p>There are No Movies to Show here.</p>
      </div>
    </div>
  </template>
  