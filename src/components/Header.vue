<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const isJournal = computed(() => route.path.startsWith('/journal'))
</script>

<template>
  <header class="flex justify-between items-center lg:items-start p-2.5 md:p-5">
    <div class="font-inter font-medium tracking-tighter text-2xl">
      <a href="/">
        Rohit Jethoe
      </a>
    </div>
    <div class="hidden lg:block">
      <ul>
        <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isHome ? 'text-black font-medium' : 'text-neutral-500'">
          <a href="/">Index</a>
        </li>
        <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isJournal ? 'text-black font-medium' : 'text-neutral-500'">
          <a href="/journal">Technical Journal</a>
        </li>
      </ul>
    </div>
    <div class="w-1/3 tracking-tighter hidden lg:block">
      <h2 class="font-medium">Creative Development</h2>
      <p class="text-neutral-500">Computer Science student at TU Delft. As a Frontend Developer experienced in JavaScript and Content Management Systems. However, as a student interested in things that will always hold true.</p>
    </div>
    <div>
      <a class="text-neutral-500 tracking-tighter transition-all hover:text-black" href="mailto:rohitjethoe@proton.me">rohitjethoe@proton.me</a>
    </div>
  </header>
</template>