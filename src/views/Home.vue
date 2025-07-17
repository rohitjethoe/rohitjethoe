<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Slider from '@/components/Slider.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const isJournal = computed(() => route.path.startsWith('/journal'))
</script>
<template>
    <main class="p-2.5 pr-0 md:p-5 md:pr-0">
        <div class="flex justify-between lg:hidden pr-2.5 md:pr-5">
            <div></div>

            <div class="w-2/3 tracking-tighter block pt-12 py-14 leading-6 lg:hidden">
                <h2 class="font-medium">Creative Development</h2>
                <p class="text-neutral-500">Computer Science student at TU Delft. As a Frontend Developer experienced in JavaScript and Content Management Systems. However, as a student interested in things that will always hold true.</p>
            </div>
        </div>
        <Slider 
            :images="['/assets/ymi.webp', '/assets/monostatic.webp', '/assets/vadimriver.webp', '/assets/buildbyrelay.webp', '/assets/virtufit.webp', '/assets/greenfuture.webp',]"
            :titles="['Young Musicians', 'Monostatic Studio', 'Vadim River', 'Build by Relay', 'VirtuFit', 'Green Future',]"
        />
        <div class="lg:hidden flex py-14">
            <div class="w-12"></div>
            <ul>
                <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isHome ? 'text-black font-medium' : 'text-neutral-500'">
                    <a href="/">Index</a>
                </li>
                <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isJournal ? 'text-black font-medium' : 'text-neutral-500'">
                    <a href="/journal">Technical Journal</a>
                </li>
            </ul>
        </div>
    </main>
</template>