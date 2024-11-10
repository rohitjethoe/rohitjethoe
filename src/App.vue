<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <main class="qa-main">
    <section class="qa-introductory">
      <div class="qa-container">
        <div class="qa-introductory__slug">
          Crafting pixel-perfect digital experiences, as a full-stack Developer besides studying mathematics & engineering methods.        
        </div>
        <div class="qa-introductory__major">
          (BSc) Computer Science and Engineering @ T<span>U</span> Delft<br />
        </div>
        <div class="qa-introductory__timeline">
          September 2024 - <span>now</span>
        </div>
        <div class="qa-introductory__experience">
          Full-stack Developer at Monostatic Studio <img src="@/assets/monostatic.png" />
        </div>
        <div class="qa-introductory__timeline">
          March 2023 - <span>August 2024</span>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
.qa-introductory {
	font-family: "Projekt Blackbird";

	&__slug {
		color: #8A8A8A;
	}

	&__major {
		span {
			color: #00AEE3;
		}
	}
}
</style>