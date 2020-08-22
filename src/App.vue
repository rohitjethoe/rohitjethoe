<template>
  <div id="app">
    <Header />
    <div class="container">
      <Introduction />
      <Projects />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Projects from '@/components/Projects';

export default {
  name: 'App',
  components: {
    Header,
    Introduction,
    Projects
  }
}
</script>

<style>
/* Importing fonts from Google Fonts. */
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Sarabun', sans-serif;
}
</style>
