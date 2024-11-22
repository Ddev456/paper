<template>
    <div class="px-[2rem]">
  <header class="flex justify-between items-center p-4 pb-[3rem] border-b border-black">
    <img src="/paper.svg" alt="logo" class="" />
    <div class="flex items-center text-text">
    <div class="flex flex-col border-r border-black">
        <ul class="grid grid-cols-3 border-b border-black">
            <li v-for="link in links.slice(0, 3)" :key="link.name" class="text-lg text-[12px] pl-0 p-[18px]">
                <NuxtLink :to="link.path" class="text-left">{{ link.name }}</NuxtLink>
            </li>
        </ul>
        <ul class="grid grid-cols-3">
            <li v-for="link in links.slice(3)" :key="link.name" class="text-lg text-[12px] pl-0 p-[18px]">
                <NuxtLink :to="link.path" class="text-left">{{ link.name }}</NuxtLink>
            </li>
        </ul>
    </div>
    <div class="flex flex-col">
        <div class="grid grid-cols-1 border-b border-black">
            <div class="p-[18px]">
            <svg class="size-6 stroke-[.5px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 20l-4.05-4.05m0 0a7 7 0 1 0-9.9-9.9a7 7 0 0 0 9.9 9.9"/></svg>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <div class="p-[18px]">
                <svg class="size-6 stroke-[.5px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M18 15H7L5.5 6H21z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.5 3m0 0L7 15h11l3-9z"/><circle cx="8" cy="20" r="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="17" cy="20" r="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
            </div>
        </div>
    </div>
    </div>
  </header>
</div>
</template>

<script setup>
const links = [
    {
        name: 'Accueil',
        path: '/'
    },
    {
        name: 'La boutique',
        path: '/shop'
    },
    {
        name: 'Nous contacter',
        path: '/contact'
    },
    {
        name: 'Notre histoire',
        path: '/about'
    },
    {
        name: 'Blog',
        path: '/blog'
    },
    {
        name: 'FAQ',
        path: '/faq'
    }
]
</script>
