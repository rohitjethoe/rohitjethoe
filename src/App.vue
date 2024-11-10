<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <main class="qa-main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
.qa-main {
	overflow-x: hidden;
}
</style>