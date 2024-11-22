// https://nuxt.com/docs/api/configuration/nuxt-config


import {resolve} from 'path';
 
export default defineNuxtConfig({
  alias:{
    '@':resolve(__dirname,'/')
  },

  css:["~/assets/main.scss"],
  modules:["@pinia/nuxt"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  runtimeConfig: {
    public: {
      API: process.env.API_KEY,
      URL: process.env.BASE_URL,
      
    },
  },
  compatibilityDate: '2024-11-19',
  
})