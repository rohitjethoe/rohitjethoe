<script setup>
import Project from '@/components/Project.vue';

const projects = [
    { 
        title: 'Vadim River',
        type:  'Development',
        service: 'Web Application'
    },
    { 
        title: 'Monostatic Studio',
        type:  'Development',
        service: 'CMS Implementation'
    },
    { 
        title: 'Build By Relay',
        type:  'Development',
        service: 'CMS Implementation'
    },
    { 
        title: 'Green Future',
        type:  'Development',
        service: 'CMS Implementation'
    },
    { 
        title: 'HODL',
        type:  'Maintenance',
        service: 'Front-end Development'
    },
    { 
        title: 'VirtuFit',
        type:  'Development',
        service: 'Web Application'
    },
    { 
        title: 'Huistuindesign.com',
        type:  'Development',
        service: 'E-commerce'
    },
    { 
        title: 'Sammy',
        type:  'Development',
        service: 'Back-end Development'
    },
    { 
        title: 'High Sun Glasses',
        type:  'Development',
        service: 'E-commerce'
    },
]
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
            <div class="qa-overview__table">
                <div v-for="project in projects" class="qa-overview__item">
                    <div class="qa-overview__company">
                        {{ project.title }}
                    </div>
                    <div class="qa-overview__description">
                        <span>{{ project.type }}, </span>{{ project.service }}
                    </div>
                    <div class="qa-overview__reference">
                        <a :href="project.reference">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.71206 9.48528H16.9755M16.9755 9.48528L8.49023 1M16.9755 9.48528L8.49023 17.9706" stroke="black" stroke-width="2"/>
                            </svg>
                        </a>
                    </div>
                </div>
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

.qa-overview {
    font-family: "Projekt Blackbird";
    
    .qa-container {
        padding-top: math-clamp(30, 40);
    }

    &__title {
        font-size: math-clamp(39, 52);
    }

    &__table {
        padding-top: math-clamp(24, 32);
        border-bottom: math-clamp(2, 2.666) solid #000;
    }

    &__item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        font-size: math-clamp(21, 28);
        padding: math-clamp(20, 26.666) 0;
        border-top: math-clamp(2, 2.666) solid #000;

        @media (max-width: $sm) {
            display: flex;
            justify-content: space-between;
            font-size: math-clamp(19);
        }
    }

    &__description {
        span {
            @media (max-width: $sm) {
                display: none;
            }
        }
    }

    &__company {
        width: 42vw;
    }

    &__reference {
        @media (max-width: $sm) {
            display: none;
        }
    }
}
</style>