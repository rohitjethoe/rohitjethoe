<template>
  <div id="filler"></div>
  <div id="root">
    <AppHeader />
    <main :class="this.$route.path === '/contact' ? 'contact' : ''">
      <router-view>
      </router-view>
      <div class="cursor"></div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "App",
  mounted() {
    let mouseY = 0;
    let mouseX = 0;
    let cursorX = 0;
    let cursorY = 0;
    let speed = 0.15;

    const cursor = document.querySelector('.cursor');

    const moveCursor = () => {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;
      
      cursorX = (cursorX + (distX * speed)) - 2;
      cursorY = (cursorY + (distY * speed)) - 2;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(moveCursor);
    }

    moveCursor();

    document.addEventListener('mousemove', (e) => {
      cursor.style.opacity = 1;
      mouseY = e.pageY;
      mouseX = e.pageX;
    });

    const root = document.querySelector('#root');
    const filler = document.querySelector('#filler');
    let scrollY = 0;
    let currentY = 0;

    const scrollAnimation = () => {
      if (window.innerWidth > 485) {
        filler.style.height = `${root.offsetHeight}px`;
        let distY = currentY - scrollY;

        scrollY = scrollY + (distY * 0.048);

        root.style.transform = `translateY(-${scrollY}px)`;
        filler.dataset.scrolled = scrollY;
        window.requestAnimationFrame(scrollAnimation);
      } else {
        root.style.position = 'relative';
        filler.height = '0px';
      }
    }

    scrollAnimation();

    document.addEventListener('scroll', () => {
      currentY = window.scrollY;
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
  width: math-clamp(18, 24);
  height: math-clamp(18, 24);
  border-radius: 100%;
  background-color: $secondaryColor;
  pointer-events: none;
  transition: width 0.25s, height 0.25s;
  z-index: 10;
  opacity: 0;
  @media (max-width: 768px) {
    display: none;
  }
}

main {
  padding-bottom: math-clamp(120);
  @media (max-width: 768px) {
    padding-bottom: math-clamp(60);
  }
}

.contact {
  padding-bottom: 0;
}

#filler {
  position: relative;
}

#root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>