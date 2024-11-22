/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: { backgroundImage: {
      'custom-bg': "url('~/assets/images/pxfuel.jpg')",
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(100px,1fr))',
        'autos':'repeat(auto-fill,minmax(190px,1fr))',
        'autosm':'repeat(auto-fill,minmax(180px,1fr))',

      }
    },},
    screens: {
      sm: '640px',
      md: '768px', 
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}