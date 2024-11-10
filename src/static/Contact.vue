<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const section = document.querySelector('.qa-contact');

  setTimeout(() => {
    section.classList.add('qa-contact--landed');
  }, 100);
})
</script>

<template>
    <section class="qa-contact">
		<div class="qa-container">
			<div class="qa-contact__email">
				<a class="qa-contact__link" href="mailto:rohitjethoe@proton.me">
					rohitjethoe@proton.me
				</a>
			</div>
			<div class="qa-contact__github">
				<a class="qa-contact__link" href="https://github.com/rohitjethoe" target="_blank">
					<span class="qa-contact__link--inactive">github.com/</span><span class="qa-contact__link--active">rohitjethoe</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-contact {
    $c: &;

    font-family: "Projekt Blackbird";
    min-height: calc(100vh - math-clamp(234.75, 313) - math-clamp(84, 112));
    display: flex;
    align-items: end;
    opacity: 0.1;
    transition: 200ms ease-in opacity;

    &--landed {
        opacity: 1;
    }

    @media (max-width: $xs) {
        min-height: calc(100svh - math-clamp(312.75) - math-clamp(61.5))
    }

    &__link {
        font-size: math-clamp(19, 25.333);
    }

    &__email {
        margin-bottom: math-clamp(12, 16);
        #{$c}__link {
            color: $referrerBlue;
        }
    }

    &__github {
        margin-bottom: math-clamp(12, 16);
        #{$c}__link {
            color: #000;
            text-decoration: none;
            span {
                text-decoration: underline;
            }

            &--active {
                color: $referrerBlue;
                transition: color 250ms ease-out;
                &:hover {
                    color: #0013e4;
                }
            }

            &--unactive {
                color: #000;
            }
        }
    }
}
</style>