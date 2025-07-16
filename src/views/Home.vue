<script setup>
import Slider from '@/components/Slider.vue'
</script>

<template>
    <main class="p-2.5 pr-0 md:p-5 md:pr-0">
        <div class="flex justify-between">
            <div></div>

            <div class="w-2/3 tracking-tighter block pt-12 pb-14 leading-6 lg:hidden">
                <h2 class="font-medium">Creative Development</h2>
                <p class="text-neutral-500">Computer Science student at TU Delft. As a Frontend Developer experienced in JavaScript and Content Management Systems. However, as a student interested in things that will always hold true.</p>
            </div>
        </div>
        <Slider 
            :images="['/assets/ymi.png', '/assets/monostatic.png', '/assets/vadimriver.png', '/assets/greenfuture.png', '/assets/buildbyrelay.png', '/assets/virtufit.png']"
            :titles="['Young Musicians', 'Monostatic Studio', 'Vadim River', 'Green Future', 'Build by Relay', 'VirtuFit']"
        />
    </main>
</template>