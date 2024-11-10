<script setup>
</script>

<template>
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

.qa-introductory {
	font-family: "Projekt Blackbird";
	font-size: math-clamp(19, 25.333);

	&__slug {
		margin-bottom: math-clamp(30, 40);
		color: #8A8A8A;
	}

	&__major {
		span {
			color: #00AEE3;
		}
	}

	&__timeline {
		margin-bottom: math-clamp(30, 40);
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

    &__link {
        font-size: math-clamp(19, 25.333);
    }

    &__email {
        margin-bottom: math-clamp(12, 16);
        #{$c}__link {
            color: #2F40FF;
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
                color: #2F40FF;
            }

            &--unactive {
                color: #000;
            }
        }
    }
}
</style>