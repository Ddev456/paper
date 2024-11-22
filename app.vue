<template>
  <div class="main-container">
    <Banner />
    <Navigation />
    <Hero />
    <div class="section-divider">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,120 C320,120 320,0 640,0 C960,0 960,120 1200,120 L1200,120 L0,120 Z" fill="var(--color-categories)"/>
      </svg>
    </div>
    <Categories />
    <div class="section-divider bg-[var(--color-new-products)]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C320,0 320,120 640,120 C960,120 960,0 1200,0 L1200,0 L0,0 Z" fill="var(--color-categories)"/>
      </svg>
    </div>
    <NewProducts />
    <div class="section-divider bg-[var(--color-featured)]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C320,0 320,120 640,120 C960,120 960,0 1200,0 L1200,0 L0,0 Z" fill="var(--color-new-products)"/>
      </svg>
    </div>
    <FeaturedProducts />
    <div class="section-divider bg-[var(--color-featured)]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z" 
              fill="var(--color-footer)"/>
      </svg>
    </div>
    <Footer />
  </div>
</template>


<script setup>
import '../index.css'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Categories from './components/Categories.vue'
import NewProducts from './components/NewProducts.vue'
import FeaturedProducts from './components/FeaturedProducts.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
</script>
