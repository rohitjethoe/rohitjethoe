<template>
  <AppHeader />
  <main>
    <div class="cursor"></div>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "App",
  mounted() {
    let mouseY = 0;
    let mouseX = 0;
    let cursorX = 0;
    let cursorY = 0;
    let speed = 0.1;

    const cursor = document.querySelector('.cursor');

    const moveCursor = () => {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;
      
      cursorX = cursorX + (distX * speed);
      cursorY = cursorY + (distY * speed);
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(moveCursor);
    }

    moveCursor();

    document.addEventListener('mousemove', (e) => {
      cursor.style.opacity = 1;
      mouseY = e.pageY;
      mouseX = e.pageX;
    });
  },
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">
.cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: math-clamp(18);
  height: math-clamp(18);
  border-radius: 100%;
  margin-left: math-clamp(-4);
  background-color: $secondaryColor;
  pointer-events: none;
  transition: width 0.25s, height 0.25s;
  z-index: 10;
  opacity: 0;
}

</style>