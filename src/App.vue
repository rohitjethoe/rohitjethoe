<template>
  <div id="app">
    <Header />
    <div class="container">
      <Introduction />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Introduction from '@/views/Introduction';

export default {
  name: 'App',
  components: {
    Header,
    Introduction
  }
}
</script>

<style>
/* Importing fonts from Google Fonts. */
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Sarabun', sans-serif;
}
</style>
