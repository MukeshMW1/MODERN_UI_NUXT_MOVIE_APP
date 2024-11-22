export default defineNuxtPlugin(nuxtapp=>{
return{
    provide:{
        sayHello:(msg:string)=>console.log(`Hello ${msg}`)
    }
}


})