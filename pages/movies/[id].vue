<script lang="ts" setup>
import { useRuntimeConfig } from "#app";
import { ref } from "vue";
import { useRoute } from "vue-router";
const config = useRuntimeConfig();
const route = useRoute();
const BASE_URL = config.public.URL;
const API_KEY = config.public.API;
const movie = ref(<Record<string, any> | null>null);
import { useNavigation } from "~/composables/handleClick";
const { handleClick } = useNavigation();

import { useSimilar } from "~/composables/useSimilar";

const { fetchSimilar, movies } = useSimilar();

const getMovie = async () => {
  const { id } = route.params;
  try {
    const data = await $fetch(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    if (data) {
      movie.value = data;
      

      if (movie)
      {

        
        fetchSimilar(id);
      
      console.log('Similar movies fetched')
      }

      console.log("Fetched Movie:", movie.value);
      console.log(genreIds);
    } else {
      console.log("Movie Couldn't be found");
    }
  } catch (err) {
    console.log("Error finding moviews by Id", err);
  }
};

onMounted(() => {
  getMovie();
});
</script>

<template>
  <div
    class="max-w-[94vw] mx-auto text-white bg-black/90 backdrop-blur-sm backdrop-brightness-125 shadow-lg pt-8"
  >
    <div class="mb-10" v-if="movie">
      <div class="w-60 mx-auto flex flex-col gap-4 items-center justify-center">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt=""
          class="w-full h-70 rounded-[10px]"
        />
        <p class="text-[18px] font-semibold] text-center">{{ movie.title }}</p>
      </div>
      <div class="px-4 text-center flex flex-col gap-4">
        <p class="font-sembold text-[14px] text-gray-400">
          {{ movie.overview }}
        </p>
        <p class="text-[12px] font-semibold text-gray-400">
          {{ movie.release_date }}
        </p>
        <p
          class="text-[12px] font-semibold text-gray-400 flex gap-4 items-center justify-center hover:text-yellow-400"
        >
          <IconsRating /><span> {{ movie.vote_average }}</span>
        </p>
      </div>
    </div>
    <div class="my-10">
      <p class="text-[30px] text-center font-semibold text-gray-300">
        Similar Movies
      </p>
      <div class="grid md:grid-cols-5 grid-cols-3 gap-4 w-full">
        <div
          class="rounded-[10px] bg-black/50 backdrop-blur-sm backdrop-brightness-125 shadow-lg  md:w-48 w-28 sm:w-40"
          v-for="movie in movies"
          :key="movie.id"
          v-if="movie"
        >
          <div @click="handleClick(movie.id)" class="cursor-pointer hover:-translate-y-3 transform duration-300">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt=""
              class="w-full h-60 rounded-[10px]"
            />
            <div class="flex justify-between items-center mx-4">
              <p
                class="text-[12px] md:text-[14px] text-center py-2 text-white font-semibold"
              >
                {{ movie.title }}
              </p>
              <p
                class="text-[12px] md:text-[14px] text-center py-2 text-white font-semibold"
              >
                {{ movie.release_date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white text-[30px] text-center" v-if="!movie">
      Movie Not Found
    </div>
  </div>
</template>

<style></style>
