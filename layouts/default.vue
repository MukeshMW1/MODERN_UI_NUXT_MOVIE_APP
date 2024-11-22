<template>
<div class="max-w-[100%] mx-auto">
    <div class="bg-custom-bg bg-cover bg-fixed  bg-center min-h-screen ">
  >
  <nav class=" max-w-[90vw] mx-auto flex md:justify-between items-center  gap-8   text-gray-200   backdrop-blur-[2px] bg-blue-400/20 rounded-lg p-6 hover:scale-105 transform transition-all duration-300 hover:rotate-2  hover:translate-y-1 hover:skew-y-4 hover:translate-x-4 filter contrast-125 mb-20">


    
      <NuxtLink to="/"><IconsMovies class="hover:text-gray-400 cursor-pointer"/></NuxtLink>

 
          
        <div class="flex justify-center ">
            
            <ul class="font-bold text-[10px] md:text-[18px] flex justify-center items-center gap-4 md:gap-10 cursor-pointer">
                <li class="font-medium text-[10px] md:text-[14px] hover:text-gray-400"><NuxtLink to="/">HOME</NuxtLink></li>
                <li class="font-medium text-[10px] md:text-[14px] hover:text-gray-400"><NuxtLink to="filter">FILTER</NuxtLink></li>
                <li class="font-medium text-[10px] md:text-[14px] hover:text-gray-400"><NuxtLink to="/top">TRENDING</NuxtLink></li>
        </ul>
       
    
</div>
    
 
<div class="relative   mx-auto my-auto">
    <!-- Input Field -->
    <input
    type="text"
      v-model="search"
      placeholder="Search"
      class="  md:w-full pl-10 pr-4 py-2 border rounded-[10px] border-blue-300 focus:outline-none max-w-[90px] md:max-w-[200px]  my-auto text-[12px] bg-transparent p-2" 
    />
    <!-- Icon -->
    <div class="absolute inset-y-0 left-3 flex items-center text-gray-500">
      <IconsSearch class="w-[12px]" />
    </div>
  </div>

</nav>
   <slot/>

   <footer class=" max-w-[80vw] mx-auto flex gap-4 justify-between  mt-20 backdrop-blur-[4px]  bg-black/60  text-gray-400 rounded-lg p-6 hover:scale-105 transform transition-all duration-300 filter contrast-125 hover:text-[10px]">


        <IconsMovies class="hover:text-purple-300 cursor-pointer"/>
  <div class="">
    <p class="  text-[14px] md:text-[16px] hover:text-purple-300">Email:  mukeshbhattampb@gmail.com</p>
    <p class="text-[14px] md:text-[16px] hover:text-purple-300">Phone: + 000 00 00 0000</p>
    <p class="text-[14px] md:text-[16px] hover:text-purple-300">Address: Mars</p>
    <p class="text-[14px] md:text-[16px] hover:text-purple-300"> Owned By: <a href="https://react-portfolio-zeta-jade.vercel.app/" target="_blank" class="underline text-black font-medium">MW</a> </p>
  </div>
  <div class="">
    <p class="text-[14px] md:text-[16px] hover:text-purple-300">Contact</p>
    <p class="text-[14px] md:text-[16px] hover:text-purple-300">Carrer</p>
    <p class="text-[14px] md:text-[16px] hover:text-purple-300">Mars 22 NY</p>
    <p class="text-[14px] md:text-[16px] hover:text-purple-300">Wember</p>

  </div>
    
</footer>
</div>

</div>
</template>

<script>
export default
{
  setup(){
     const search  =ref('')
     return{
      search
     }

  }

}

</script>

