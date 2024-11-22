<template>
  <nav class="sticky top-0 navigation border-b border-black z-20">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/paper.svg" class="size-10 md:size-16" alt="Logo" />
      </a>
      <button @click="isMenuOpen = !isMenuOpen" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>

      <div class="hidden md:block w-full md:w-auto" id="navbar-desktop">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li v-for="link in links" :key="link.name" class="text-lg text-[12px] pl-0 p-[18px]">
            <NuxtLink :to="link.path" class="text-left">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="isMenuOpen" class="bg-white absolute top-full left-0 right-0 w-full md:hidden z-50" id="navbar-mobile">
          <ul class="font-medium flex flex-col p-4 mt-4 rounded-lg">
            <li v-for="link in links" :key="link.name" class="text-lg text-[12px] pl-0 p-[18px]">
              <NuxtLink :to="link.path" class="text-left">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

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
