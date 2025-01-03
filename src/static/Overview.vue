<script setup>
import { ref, computed, onMounted } from 'vue';

const current = ref("");
const overviewRef = ref(null);

const setCurrent = (input) => {
    if (input == current.value) {
        current.value = "";
    } else {
        current.value = input;
    }
}

const projects = [
    { 
        title: 'Monostatic Studio',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript', 'Docker'],
        description: "A CMS Implementation built for visually appealing showcases of clients like Daily Paper, Studiewinkel and HODL."
    },
    { 
        title: 'Build By Relay',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript', 'Docker'],
        description: "A CMS Implementation built for the daughter company of Monostatic studio."
    },
    { 
        title: 'Huis&Tuin',
        type:  'Development',
        service: 'E-commerce',
        stack: ['JavaScript', 'Shopify'],
        description: "E-commerce Template development, maintenance and design for a home & garden furniture store."
    },
    { 
        title: 'Green Future',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript', 'Docker'],
        description: "A CMS Implementation built for a company dedicated to making the world greener through the transformation of waste management."
    },
    { 
        title: 'HODL',
        type:  'Maintenance',
        service: 'Front-end Development',
        stack: ['JavaScript', 'Docker'],
        description: "Maintenance by adding a new header menu and implementing graphs to display fund data using JavaScript."
    },
    { 
        title: 'VirtuFit',
        type:  'Development',
        service: 'Web Application',
        stack: ['JavaScript', 'Vue'],
        description: "Developed a service form in Vue.js as a Single Page Application, which was later integrated as a Wordpress plugin through channeling the hosted Vue app."
    },
    { 
        title: 'Sammy',
        type:  'Development',
        service: 'Back-end Development',
        stack: ['JavaScript'],
        description: "A back-end development project where I focused on generating keys and certificates required for implementing Apple Wallet passes."
    },
    { 
        title: 'High Sun Glasses',
        type:  'Development',
        service: 'E-commerce',
        stack: ['JavaScript', 'Vue'],
        description: "High Sun Glasses is a friend's single-product store, where I developed an e-commerce solution using Vue.js and Stripe API."
    },
    {
        title: 'Crosswise Works',
        type: 'Maintenance',
        service: 'Front-end Development',
        stack: ['JavaScript', 'Docker'],
        description: "Maintained a CMS Implementation by fixing front-end bugs and improving its accessibility."
    },
    { 
        title: 'Vadim River',
        type:  'Development',
        service: 'Web Application',
        stack: ['JavaScript', 'Vue', 'Firebase'],
        description: "Developed a Vue and Firebase portfolio website for photography."
    },
];

const handleScroll = () => {
    const cards = document.querySelectorAll('.qa-overview__card');
    const title = document.querySelector('.qa-overview__title');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        if (rect.top < windowHeight * 0.84 && rect.bottom > windowHeight * 0.16) {
            card.style.opacity = '1';
        }
    });

    if (title) {
        const titleRect = title.getBoundingClientRect();
        const titleHeight = titleRect.height;

        if (titleRect.top < windowHeight - titleHeight * 0.84 && titleRect.bottom > titleHeight * 0.16) {
            title.style.opacity = '1';
        } 
    }
};

onMounted(() => {
    const cards = document.querySelectorAll('.qa-overview__card');
    const table = document.querySelector('.qa-overview__table');
    let currentCard = null;

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i] !== card) {
                    cards[i].classList.add('qa-overview__card--fade');
                    
                    if (card !== cards[0]) {
                        table.classList.add('qa-overview__table--fade');
                    } else {
                        table.classList.remove('qa-overview__table--fade');
                    }
                }
                
                if (cards[i] === card) {
                    card.classList.remove('qa-overview__card--fade');
                    currentCard = i;

                    if (cards[i - 1]) {
                        cards[i - 1].classList.add('qa-overview__card--bottom')
                    }
                }
            }
        })

        card.addEventListener('mouseleave', () => {
            if (cards[currentCard - 1]) {
                cards[currentCard - 1].classList.remove('qa-overview__card--bottom');
            }
            if (cards[currentCard] === cards[-1]) {
                table.classList.remove('qa-overview__table--fade');
            }
        });
    })

    table.addEventListener('mouseleave', () => {
        cards.forEach((card) => {
            card.classList.remove('qa-overview__card--fade');
            card.classList.remove('qa-overview__card--bottom');
            table.classList.remove('qa-overview__table--fade');
        })
    })
});
</script>

<template>
    <section class="qa-overview">
        <div class="qa-container">
            <div class="qa-overview__title">
                All Projects
            </div>
            <div class="qa-overview__table">
                <div v-for="project in projects" class="qa-overview__item">
                    <div ref="overviewRef" @click="setCurrent(project.title)" :class="current === project.title ? 'qa-overview__card--active' : ''" class="qa-overview__card">
                        <div class="qa-overview__company">
                            {{ project.title }}
                        </div>
                        <div class="qa-overview__type">
                            <span>{{ project.type }}, </span>{{ project.service }}
                        </div>
                        <div class="qa-overview__reference" :class="(current.value == project.title) ? 'qa-overview__reference--current' : ''">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.48542 0.707177V16.9706M9.48542 16.9706L17.9707 8.48535M9.48542 16.9706L1.00014 8.48535" stroke="black" stroke-width="2"/>
                            </svg>
                        </div>
                        <div v-if="current === project.title" class="qa-overview__divider"></div>
                    </div>
                    <div v-if="current === project.title" class="qa-overview__about">
                        <div class="qa-overview__description">
                            {{ project.description }}
                        </div>
                        <div class="qa-overview__stack">
                            <img v-if="project.stack.includes('Docker')" class="qa-overview__icon" src="@/assets/docker.svg" alt=".vue"/>
                            <img v-if="project.stack.includes('Vue')" class="qa-overview__icon" src="@/assets/vue.svg" alt=".vue"/>
                            <img v-if="project.stack.includes('Shopify')" class="qa-overview__icon" src="@/assets/shopify.svg" alt=".shopify"/>
                            <img v-if="project.stack.includes('Firebase')" class="qa-overview__icon" src="@/assets/firebase.svg" alt=".firebase"/>
                            <img v-if="project.stack.includes('JavaScript')" class="qa-overview__icon" src="@/assets/javascript.svg" alt=".js"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-overview {
    $o: &;

    font-family: "Projekt Blackbird";
    
    .qa-container {
        padding-top: math-clamp(60, 80);
        
    }

    &__title {
        font-size: math-clamp(39, 52);
        opacity: 0.1;
        transition: opacity 250ms ease-out;

        @media (max-width: $xs) {
            font-size: math-clamp(24, 32);
        }
    }

    &__table {
        border-top: math-clamp(2, 2.666) solid #000;
        margin-top: math-clamp(30, 40);
        transition: border-top 250ms ease-out;

        &--fade {
            border-top: math-clamp(2, 2.666) solid $secondaryGray;
        }
    }

    &__reference {
        display: flex;
        gap: math-clamp(16, 24);

        svg {
            transform: rotate(-90deg);
            path {
                transition: 250ms ease-out stroke;
            }
        }

        &--current {
            svg {
                transform: rotate(0);
            }
        }
    }

    &__card {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        font-size: math-clamp(21, 28);
        padding: math-clamp(20, 26.666) 0;
        border-bottom: math-clamp(2, 2.666) solid #000;
        color: #000;
        transition: border-bottom 250ms ease-out, color 250ms ease-out, opacity 250ms ease-out;
        position: relative;
        opacity: 0.1;

        &--fade {
            border-bottom: math-clamp(2, 2.666) solid $secondaryGray;
            color: $secondaryGray;
            #{$o}__reference {
                svg path {
                    stroke: $secondaryGray;
                }
            }
        }

        &--bottom {
            border-bottom: math-clamp(2, 2.666) solid #000;
        }

        &--active {
            border-bottom: math-clamp(2, 2.666) solid #000;
            color: #000;

            #{$o}__reference {
                svg {
                    transform: rotate(0);
                }
            }
        }

        &:hover {
            cursor: pointer;
        }

        @media (max-width: $sm) {
            display: flex;
            justify-content: space-between;
            font-size: math-clamp(19);
        }
    }

    &__divider {
        position: absolute;
        width: 100%;
        height: math-clamp(2, 2.666);
        top: 0;
        transform: translateY(math-clamp(-2, -2.666));
        background-color: #000;
    }

    &__about {
        display: flex;
        justify-content: space-between;
        padding: math-clamp(20, 26.666) 0;
        border-bottom: math-clamp(2, 2.666) solid #000;

        @media (max-width: $sm) {
            flex-direction: column;
            gap: math-clamp(15);
        }
    }

    &__type {
        width: 42vw;
        font-size: math-clamp(21, 28);
        @media (max-width: $sm) {
            display: none;
        }
    }

    &__description {
        width: 42vw;
        font-size: math-clamp(21, 28);
        @media (max-width: $sm) {
            width: 100%;
            font-size: math-clamp(17);
            line-height: math-clamp(23);
        }
    }

    &__company {
        width: 42vw;
    }

    &__stack {
        display: flex;
        gap: math-clamp(16, 24);
        align-items: end;
        justify-content: start;

        @media (max-width: $sm) {
            gap: math-clamp(12);
            flex-direction: row-reverse;
        }
    }

    &__icon {
        width: math-clamp(24, 32);
        height: auto;

        @media (max-width: $sm) {
            width: math-clamp(20);
        }
    }
}
</style>