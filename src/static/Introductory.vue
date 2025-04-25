<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const section = document.querySelector('.qa-introductory');

  setTimeout(() => {
    section.classList.add('qa-introductory--landed');
  }, 100);
})
</script>

<template>
    <section class="qa-introductory">
      <div class="qa-container">
        <div class="qa-title">
          Freelance Creative Development,
        </div>
        <div class="qa-introductory__slug">
          As a Frontend Developer experienced in JavaScript and Content Management Systems. However, as a student interested in things that will always hold true.        
        </div>
        <!-- <div class="qa-introductory__major">
          (BSc) Computer Science and Engineering at T<span>U</span> Delft<br />
        </div>
        <div class="qa-introductory__timeline">
          September 2024 - <span>now</span>
        </div>
        <div class="qa-introductory__experience">
          Front-end Developer at <a href="https://monostatic.com/" target="_blank">Monostatic Studio</a> <img class="qa-introductory__icon" src="/assets/monostatic.webp" alt="monostatic logo"/>
        </div>
        <div class="qa-introductory__timeline">
          March 2023 - August 2024
        </div> -->
      </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-introductory {
	font-family: "Projekt Blackbird";
	font-size: math-clamp(19, 25.333);
	opacity: 0.1;
	transition: 200ms ease-in opacity;

	&--landed {
		opacity: 1;
	}

  .qa-title {
    font-size: math-clamp(32, 42.666);
    line-height: math-clamp(80, 106.666);

    @media (max-width: $sm) {
      font-size: math-clamp(25);
      line-height: math-clamp(40);
      margin-bottom: math-clamp(20);
    }
  }

  .qa-container {
    padding-top: math-clamp(7, 9.333);
    @media (max-width: $sm) {
        padding-top: math-clamp(36, 48);
    }
  }

	&__slug {
		margin-bottom: math-clamp(12, 16);
    line-height: math-clamp(23, 30.666);
		color: $secondaryGray;
	}

	&__major {
    line-height: math-clamp(25);
		span {
			color: $delftPrimary;
		}
	}

    &__experience {
        a:link, a:visited {
            color: #000;
            transition: color 250ms ease-out;
            text-decoration: none;
        }

        a:hover {
            color: $monostaticPrimary;
        }
    }

	&__timeline {
		margin-bottom: math-clamp(30, 40);
        span {
            text-decoration: underline;
        }
	}

	&__major, &__experience {
		margin-bottom: math-clamp(8, 12);
	}

    &__icon {
        width: math-clamp(18, 24);
        height: math-clamp(18, 24);
        transform: translateY(math-clamp(2, 2.666));
    }
}
</style>