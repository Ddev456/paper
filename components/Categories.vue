<template>
     <div class="categories-section min-h-[75vh] flex flex-col justify-around px-8 relative mt-[-2px]">
        <h3 class="text-black text-[2rem] font-bold">Nos produits par catégories</h3>
        <div class="flex flex-col gap-4">
        <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-1 w-full flex flex-col justify-center items-center gap-6" v-for="product in products.slice(0, 3)" :key="product.id">
            <div class="flex justify-center items-center size-[12rem] bg-gray-200 border border-black rounded-xl">
                <img :src="product.image" alt="product1" class="hover:scale-110 transition-all duration-300 ease-in-out size-[10rem] object-cover rounded-xl">
            </div>
            <span class="text-black text-[1.5rem]">{{ product.name }}</span>
        </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-1 w-full flex flex-col justify-center items-center gap-6" v-for="product in products.slice(4, 7)" :key="product.id">
            <div class="flex justify-center items-center size-[12rem] bg-gray-200 border border-black rounded-xl">
                <img :src="product.image" alt="product1" class="hover:scale-110 transition-all duration-300 ease-in-out size-[10rem] object-cover rounded-xl">
            </div>
            <span class="text-black text-[1.5rem]">{{ product.name }}</span>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
const isVisible = ref(false)

onMounted(() => {
    isVisible.value = true
})
const products = [
    {
        id: 1,
        name: "Services",
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
        name: "Cadeaux",
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
        name: "Tissus",
        price: 10,
        image: "/product6.jpg"
    },
    {
        id: 6,
        name: "Sacs",
        price: 10,
        image: "/product7.jpg"
    },
    {
        id: 7,
        name: "Montres",
        price: 10,
        image: "/product8.jpg"
    }
]
</script>