<script setup>
import Slider from '@/components/Slider.vue'
</script>

<template>
    <main class="p-2.5 pr-0 md:p-5 md:pr-0">
        <div class="flex justify-between lg:hidden">
            <div></div>

            <div class="w-2/3 tracking-tighter block pt-12 py-14 leading-6 lg:hidden">
                <h2 class="font-medium">Creative Development</h2>
                <p class="text-neutral-500">Computer Science student at TU Delft. As a Frontend Developer experienced in JavaScript and Content Management Systems. However, as a student interested in things that will always hold true.</p>
            </div>
        </div>
        <Slider 
            :images="['/assets/ymi.webp', '/assets/monostatic.webp', '/assets/vadimriver.webp', '/assets/buildbyrelay.webp', '/assets/huistuindesign.webp', '/assets/virtufit.webp', '/assets/greenfuture.webp',]"
            :titles="['Young Musicians', 'Monostatic Studio', 'Vadim River', 'Build by Relay', 'huistuindesign.com', 'VirtuFit', 'Green Future',]"
        />
        <div class="lg:hidden flex py-14">
            <div class="w-12"></div>
            <ul>
                <li class="font-inter font-medium tracking-tighter py-1">
                    <a href="/">Index</a>
                </li>
                <li class="font-inter text-neutral-500 tracking-tighter py-1 transition-all hover:text-black">
                    <a href="">Weekly Journal</a>
                </li>
            </ul>
        </div>
    </main>
</template>