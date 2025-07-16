<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  titles: { type: Array, required: true }
})

const currentIndex = ref(0)
const windowWidth = ref(window.innerWidth)

function handleResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

// Responsive items per view
const itemsPerView = computed(() => (windowWidth.value < 768 ? 1.5 : 4))
const scrollStep = computed(() => 100 / itemsPerView.value)
const maxIndex = computed(() => Math.ceil(props.images.length - itemsPerView.value))

function next() {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

// Drag / Swipe logic
let startX = 0
let deltaX = 0
let isDragging = ref(false)
const sliderRef = ref(null)

function onDragStart(e) {
  isDragging.value = true
  startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
}

function onDragMove(e) {
  if (!isDragging.value) return
  const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
  deltaX = x - startX
}

function onDragEnd() {
  if (!isDragging.value) return
  isDragging.value = false

  if (deltaX > 50) {
    prev()
  } else if (deltaX < -50) {
    next()
  }

  deltaX = 0
}
</script>

<template>
  <div
    class="relative pt-2.5 md:pt-5 w-full overflow-hidden select-none"
    ref="sliderRef"
    @mousedown="onDragStart"
    @mousemove="onDragMove"
    @mouseup="onDragEnd"
    @mouseleave="onDragEnd"
    @touchstart="onDragStart"
    @touchmove="onDragMove"
    @touchend="onDragEnd"
  >
    <div
      class="flex gap-2.5 md:gap-5 transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * scrollStep}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-[66.6667%] md:w-1/4 flex-shrink-0"
      >
        <div class="font-inter pb-2.5 tracking-tighter">
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
