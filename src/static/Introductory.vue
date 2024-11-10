<script setup>
</script>

<template>
    <section class="qa-introductory">
      <div class="qa-container">
        <div class="qa-introductory__slug">
          Crafting pixel-perfect digital experiences, as a full-stack developer besides studying mathematics & engineering methods.        
        </div>
        <div class="qa-introductory__major">
          (BSc) Computer Science and Engineering at T<span>U</span> Delft<br />
        </div>
        <div class="qa-introductory__timeline">
          September 2024 - <span>now</span>
        </div>
        <div class="qa-introductory__experience">
          Full-stack Developer at <a href="https://monostatic.com/" target="_blank">Monostatic Studio</a> <img class="qa-introductory__icon" src="/assets/monostatic.webp" />
        </div>
        <div class="qa-introductory__timeline">
          March 2023 - August 2024
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-introductory {
	font-family: "Projekt Blackbird";
	font-size: math-clamp(19, 25.333);

    .qa-container {
        padding-top: math-clamp(7, 9.333);
        @media (max-width: $sm) {
            padding-top: math-clamp(36, 48);
        }
    }

	&__slug {
		margin-bottom: math-clamp(30, 40);
		color: $secondaryGray;
	}

	&__major {
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