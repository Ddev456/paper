<template>
    <div class="hero-section min-h-[85vh] flex flex-col md:flex-row gap-4 px-[2rem] mt-8 relative"
         :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
         <div class="flex flex-col h-full gap-[3rem]">
            <h3 class="lg:max-w-[900px] text-[4rem] leading-[4rem] text-[var(--color-text)] transition-all duration-1000 delay-200"
                :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4']">
                Boutique de confections artisanales
            </h3>
            <span class="transition-all duration-1000 text-gray-500 text-[1.2rem] max-w-[350px]"
                :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4']">
                Découvrez nos créations uniques et savoureuses, faites avec passion et savoir-faire.
                Nous sommes spécialisés dans la confection de bijoux en or et en argent.
                Nous vous proposons des pièces uniques et de qualité premium.
            </span>
            <button class="mx-auto md:mx-0 transition-all duration-1000 w-36 bg-indigo-500 border border-text text-white px-4 py-2 rounded-md hover:scale-105"
                :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            Explorer la boutique
        </button>
    </div>
        <RotateElement />
    </div>
</template>

<script setup>
const isVisible = ref(false)

onMounted(() => {
    isVisible.value = true
})
</script>