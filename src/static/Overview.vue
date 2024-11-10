<script setup>
import { ref, computed } from 'vue';

const current = ref('');

const setCurrent = (input) => {
    if (input == current.value) {
        current.value = '';
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
        visibility: computed(() => { return current.value === 'Vadim River' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Monostatic Studio',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript'],
        visibility: computed(() => { return current.value === 'Monostatic Studio' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Build By Relay',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript'],
        visibility: computed(() => { return current.value === 'Build By Relay' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Green Future',
        type:  'Development',
        service: 'CMS Implementation',
        stack: ['JavaScript'],
        visibility: computed(() => { return current.value === 'Green Future' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'HODL',
        type:  'Maintenance',
        service: 'Front-end Development',
        stack: ['JavaScript'],
        visibility: computed(() => { return current.value === 'HODL' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'VirtuFit',
        type:  'Development',
        service: 'Web Application',
        stack: ['JavaScript', 'Vue'],
        visibility: computed(() => { return current.value === 'VirtuFit' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Huis&Tuin',
        type:  'Development',
        service: 'E-commerce',
        stack: ['JavaScript', 'Shopify'],
        visibility: computed(() => { return current.value === 'Huis&Tuin' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'Sammy',
        type:  'Development',
        service: 'Back-end Development',
        stack: ['JavaScript'],
        visibility: computed(() => { return current.value === 'Sammy' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    { 
        title: 'High Sun Glasses',
        type:  'Development',
        service: 'E-commerce',
        stack: ['JavaScript', 'Vue'],
        visibility: computed(() => { return current.value === 'High Sun Glasses' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    },
    {
        title: 'Crosswise Works',
        type: 'Maintenance',
        service: 'Front-end Development',
        stack: ['JavaScript'],
        visibility: computed(() => { return current.value === 'Crosswise Works' ? true : false }),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus leo. Aenean mollis id ex nec accumsan. Fusce velit erat, consequat sit amet risus ac, posuere venenatis ligula. Vivamus et ex maximus, iaculis."
    }
]
</script>

<template>
    <section class="qa-overview">
        <div class="qa-container">
            <div class="qa-overview__title">
                All Projects
            </div>
            {{ current.value }}
            <div class="qa-overview__table">
                <div v-for="project in projects" class="qa-overview__item">
                    <div @click="setCurrent(project.title)" class="qa-overview__card">
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
                    </div>
                    <div v-if="current.value == project.title" class="qa-overview__about">
                        <div class="qa-overview__description">
                            {{ project.description }}
                        </div>
                        <div class="qa-overview__stack">
                            <svg v-if="project.stack.includes('JavaScript')" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_388_228)">
                                <path d="M0 0H26V26H0V0Z" fill="#A5A5A5"/>
                                <path d="M23.8724 19.7991C23.6821 18.6128 22.9085 17.6168 20.6174 16.6875C19.8216 16.3218 18.9344 16.0598 18.6699 15.4567C18.576 15.1058 18.5636 14.9081 18.623 14.6955C18.7935 14.006 19.6165 13.791 20.269 13.9887C20.6891 14.1296 21.087 14.4533 21.3268 14.9699C22.4488 14.2433 22.4463 14.2482 23.2298 13.749C22.9431 13.3041 22.7899 13.099 22.602 12.9087C21.9273 12.1549 21.0079 11.7668 19.5374 11.7965C19.2828 11.8286 19.0258 11.8632 18.7712 11.8954C18.0372 12.0807 17.3378 12.4663 16.9275 12.9828C15.6967 14.3792 16.0477 16.8235 17.5454 17.8294C19.0209 18.9366 21.1884 19.1887 21.4652 20.2243C21.7346 21.4921 20.5334 21.9024 19.3397 21.7566C18.4598 21.5737 17.9705 21.1264 17.4416 20.3132C16.4678 20.8767 16.4678 20.8767 15.4669 21.4526C15.7042 21.9716 15.9538 22.2064 16.3517 22.6562C18.235 24.5667 22.9481 24.4727 23.7933 21.5811C23.8279 21.4822 24.0553 20.8199 23.8724 19.7991ZM14.1347 11.9497H11.7028C11.7028 14.0505 11.6929 16.1364 11.6929 18.2372C11.6929 19.5742 11.7621 20.8001 11.5447 21.1758C11.1888 21.9147 10.2669 21.8233 9.84675 21.6799C9.41918 21.4698 9.20169 21.1708 8.9496 20.7482C8.8804 20.6271 8.8285 20.5332 8.81117 20.5258C8.15131 20.9286 7.49387 21.3339 6.83398 21.7368C7.16272 22.4115 7.6471 22.9972 8.26744 23.3778C9.19425 23.9339 10.4399 24.1044 11.7424 23.8054C12.5901 23.5582 13.3216 23.0467 13.7047 22.2682C14.2583 21.2474 14.1397 20.0117 14.1347 18.645C14.1471 16.4157 14.1347 14.1864 14.1347 11.9497Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_388_228">
                                <rect width="26" height="26" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
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
    }

    &__card {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        font-size: math-clamp(21, 28);
        padding: math-clamp(20, 26.666) 0;
        border-bottom: math-clamp(2, 2.666) solid #000;
        color: #000;

        @media (max-width: $sm) {
            display: flex;
            justify-content: space-between;
            font-size: math-clamp(19);
        }
    }

    &__about {
        display: flex;
        justify-content: space-between;
        padding: math-clamp(20, 26.666) 0;
        border-bottom: math-clamp(2, 2.666) solid #000;

    }

    &__description {
        width: 42vw;
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
}
</style>