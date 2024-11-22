<template>
  <div class="new-products-section min-h-[75vh] flex flex-col justify-around px-8 relative mt-[-2px]">
    <h3 class="text-black text-[2rem] font-bold">Nos dernières nouveautés</h3>
    <div class="flex flex-col md:flex-row">
     <div class="w-full flex flex-col justify-center items-center gap-6" v-for="product in products" :key="product.id">
         <div class="flex justify-center items-center size-[12rem] bg-gray-200 border border-black rounded-xl">
             <img :src="product.image" alt="product1" class="hover:scale-110 transition-all duration-300 ease-in-out size-[10rem] object-cover rounded-xl">
         </div>
         <span class="text-black text-[1.5rem]">{{ product.name }}</span>
         <span class="text-black font-light text-md">{{ product.price }}€</span>
     </div>
  </div>
</div>
</template>

<script setup>
const products = [
 {
     id: 1,
     name: "Service brodé",
     price: 100,
     image: "/product1.jpg"
 },
 {
     id: 2,
     name: "Tasses céramiques",
     price: 45,
     image: "/product2.jpg"
 },
 {
     id: 3,
     name: "Paquet personnalisé",
     price: 25,
     image: "/product3.jpg"
 }
]
</script>