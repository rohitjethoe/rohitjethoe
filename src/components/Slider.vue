<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  titles: { type: Array, required: true }
})

const currentIndex = ref(0)
const windowWidth = ref(window.innerWidth)

// Detect screen width changes
function handleResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

// Items per view: 2 on mobile, 4 on desktop
const itemsPerView = computed(() => (windowWidth.value < 768 ? 2 : 4))
const scrollStep = computed(() => 100 / itemsPerView.value)
const maxIndex = computed(() => props.images.length - itemsPerView.value)

function next() {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="flex gap-2.5 md:gap-5 transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * scrollStep}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-1/2 md:w-1/4 flex-shrink-0"
      >
        <div class="font-inter pb-2.5 tracking-tighter text-sm">
          {{ titles[index] }}
        </div>
        <img :src="image" class="w-full h-auto object-cover" />
      </div>
    </div>

    <!-- Arrows -->
    <button
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/0 text-white/0 w-1/2 h-full"
    >
      ←
    </button>
    <button
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/0 text-white/0 w-1/2 h-full"
    >
      →
    </button>
  </div>
</template>
