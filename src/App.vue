<template>
  <div id="app">
    <Header />
    <div class="container">
      <Introduction />
      <Projects />
      <Experience />
      <About />
      <Skills />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Introduction,
    Projects,
    Experience,
    About,
    Skills,
    Footer
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

.container {
  margin-bottom: 10%;
}
</style>
