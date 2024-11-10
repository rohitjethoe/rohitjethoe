<script setup>
import Project from '@/components/Project.vue';
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
          Full-stack Developer at Monostatic Studio <img src="/assets/monostatic.png" />
        </div>
        <div class="qa-introductory__timeline">
          March 2023 - August 2024
        </div>
      </div>
    </section>

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

    <Project projectAsset="/assets/monostatic-cover.webp" projectTitle="Monostatic Studio"/>
    <Project projectAsset="/assets/huistuindesign-cover.webp" projectTitle="Huistuindesign.nl"/>
    <Project projectAsset="/assets/virtufit-cover.webp" projectTitle="VirtuFit Service Form"/>
    <Project projectAsset="/assets/greenfuture-cover.webp" projectTitle="Green Future"/>
    <Project projectAsset="/assets/buildbyrelay-cover.webp" projectTitle="Build By Relay"/>

    <section class="qa-overview">
        <div class="qa-container">
            <div class="qa-overview__title">
                All Projects
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

	&__timeline {
		margin-bottom: math-clamp(30, 40);
        span {
            text-decoration: underline;
        }
	}

	&__major, &__experience {
		margin-bottom: math-clamp(8, 12);
	}
}

.qa-contact {
    $c: &;

    font-family: "Projekt Blackbird";
    min-height: calc(100vh - math-clamp(234.75, 313) - math-clamp(84, 112));
    display: flex;
    align-items: end;

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
            }

            &--unactive {
                color: #000;
            }
        }
    }
}
</style>