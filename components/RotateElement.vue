<template>
  <div class="md:my-auto translate-y-12 md:translate-y-0 mx-auto md:mx-0 md:mr-8 relative w-[280px] h-[280px] aspect-square flex items-center justify-center">
    <!-- Image centrale -->
    <img 
      src="/product4.jpg" 
      alt="Product" 
      class="w-[60%] h-[60%] rounded-full object-cover z-10"
    >
    
    <!-- Cercle rotatif avec texte -->
    <div class="absolute w-full h-full animate-spin-slow bg-white rounded-full">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <defs>
          <path
            id="circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text class="text-[8px] sm:text-[10px] md:text-sm">
          <textPath href="#circle" class="fill-gray-600">
            * Confections artisanales * Fait main * Qualité premium * Pièces uniques 
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>