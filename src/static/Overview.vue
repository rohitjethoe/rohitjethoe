<script setup>
import { ref, computed, onMounted } from 'vue';

const current = ref("");

const setCurrent = (input) => {
    if (input == current.value) {
        current.value = "";
    } else {
        current.value = input;
    }
}

const projects = [
    { 
        title: 'Vadim River',
        type:  'Development',
        service: 'Web Application',
        stack: ['JavaScript', 'Vue', 'Firebase'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Monostatic Studio',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Build By Relay',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Green Future',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'HODL',
        type:  'Maintenance',
        service: 'Front-end Development',
        stack: ['JavaScript'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'VirtuFit',
        type:  'Development',
        service: 'Web Application',
        stack: ['JavaScript', 'Vue'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Huis&Tuin',
        type:  'Development',
        service: 'E-commerce',
        stack: ['JavaScript', 'Shopify'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Sammy',
        type:  'Development',
        service: 'Back-end Development',
        stack: ['JavaScript'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'High Sun Glasses',
        type:  'Development',
        service: 'E-commerce',
        stack: ['JavaScript', 'Vue'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    {
        title: 'Crosswise Works',
        type: 'Maintenance',
        service: 'Front-end Development',
        stack: ['JavaScript'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    }
]

onMounted(() => {
    const cards = document.querySelectorAll('.qa-overview__card');
    const table = document.querySelector('.qa-overview__table');
    let currentCard = null;

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
})
</script>

<template>
    <section class="qa-overview">
        <div class="qa-container">
            <div class="qa-overview__title">
                All Projects
            </div>
            <div class="qa-overview__table">
                <div v-for="project in projects" class="qa-overview__item">
                    <div @click="setCurrent(project.title)" :class="current === project.title ? 'qa-overview__card--active' : ''" class="qa-overview__card">
                        <div class="qa-overview__company">
                            {{ project.title }}
                        </div>
                        <div class="qa-overview__description">
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
        @media (max-width: $sm) {
            display: none;
        }

        svg {
            transform: rotate(-90deg);
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
        transition: border-bottom 250ms ease-out, color 250ms ease-out;
        position: relative;

        &--fade {
            border-bottom: math-clamp(2, 2.666) solid $secondaryGray;
            color: $secondaryGray;
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
    }

    &__description {
        width: 42vw;
        font-size: math-clamp(21, 28);
        span {
            @media (max-width: $sm) {
                display: none;
            }
        }
    }

    &__company {
        width: 42vw;
    }

    &__stack {
        display: flex;
        gap: math-clamp(16, 24);
        align-items: baseline;
    }

    &__icon {
        width: math-clamp(24, 32);
        height: auto;
    }
}
</style>