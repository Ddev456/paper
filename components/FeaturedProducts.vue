<template>
  <div class="featured-products-section min-h-[75vh] flex flex-col justify-around px-8 relative mt-[-2px]">
    <h3 class="text-black text-[2rem] font-bold">Nos produits phares</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 mt-10">
     <div class="mt-2 col-span-1 w-full flex flex-col justify-center items-center gap-6" v-for="product in products" :key="product.id">
         <div class="flex justify-center items-center size-[18rem] bg-gray-200 border border-black rounded-xl">
             <img :src="product.image" alt="product1" class="hover:scale-110 transition-all duration-300 ease-in-out size-[16rem] object-cover rounded-xl">
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
 },
 {
        id: 4,
        name: "Accessoires",
        price: 10,
        image: "/product4.jpg"
    },
    {
        id: 5,
        name: "Tissus ornés",
        price: 10,
        image: "/product6.jpg"
    },
    {
        id: 6,
        name: "Sac personnalisé",
        price: 10,
        image: "/product7.jpg"
    },
    {
        id: 7,
        name: "Montre tendance",
        price: 10,
        image: "/product8.jpg"
    }
]
</script>