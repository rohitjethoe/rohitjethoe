<script setup>
import Slider from '@/components/Slider.vue'
</script>

<template>
    <main class="p-2.5 md:p-5">
        <div class="flex justify-between">
            <div></div>

            <div class="w-2/3 tracking-tighter block pb-14 lg:hidden">
                <h2 class="font-medium">Creative Development</h2>
                <p class="text-neutral-500">Computer Science student at TU Delft. As a Frontend Developer experienced in JavaScript and Content Management Systems. However, as a student interested in things that will always hold true.</p>
            </div>
        </div>
        <Slider 
            :images="['/assets/ymi.png', '/assets/monostatic.png', '/assets/vadimriver.png', '/assets/greenfuture.png']"
            :titles="['Young Musicians', 'Monostatic Studio', 'Vadim River', 'Green Future']"
        />
    </main>
</template>