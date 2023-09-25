<template>
    <section class="workflow">
        <div class="container grid">
            <div class="workflow__label col-16">
                Workflow
            </div>
            <div class="workflow__heading col-16">
                Four steps <br/>to orbit
            </div>
            <div class="workflow__table col-16">
                <div v-for="item in content" class="workflow__row">
                    <div @click="setActiveIndex(item.index)" class="workflow__row__heading">
                        <div class="workflow__step">
                            {{ item.index }} 
                        </div>
                        <div class="workflow__name">
                            {{ item.heading }}
                        </div>
                        <div class="workflow__cta" :class="activeIndex === item.index ? 'workflow__cta--active' : ''">
                            <img src="@/assets/arrow-circle.svg" alt="">
                        </div>
                    </div>
                    <div v-if="activeIndex === item.index" class="workflow__section">
                        <div class="workflow__section--heading">
                            {{  item.title }}
                        </div>
                        {{ item.content }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Workflow",
    data() {
        return {
            activeIndex: 0,
            content: {
                0: {
                    index: 1,
                    heading: "Templating",
                    title: "Design and plan the mission",
                    content: ""
                },
                1: {
                    index: 2,
                    heading: "Assemble",
                    title: "",
                    content: ""
                },
                2: {
                    index: 3,
                    heading: "Launch",
                    title: "Ready for ascension",
                    content: ""
                },
                3: {
                    index: 4,
                    heading: "Maintain",
                    title: "",
                    content: ""
                },
            }
        }
    },
    methods: {
        setActiveIndex: function (index) {
            if (this.activeIndex === 0 || this.activeIndex !== index) {
                this.activeIndex = index;
            } else {
                this.activeIndex = 0;
            }
        }
    },
    mounted() {
        const flows = document.querySelectorAll('.workflow__row');
        const cursor = document.querySelector('.cursor');

        flows.forEach((flow) => {
            flow.addEventListener('mouseover', () => {
                cursor.style.height = '36px';
                cursor.style.width = '36px';
            })

            flow.addEventListener('mouseleave', () => {
                cursor.style.height = '18px';
                cursor.style.width = '18px';
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.workflow {
    font-family: $primaryFont;
    padding: math-clamp(120) 0;
    @media (max-width: 768px) {
        padding: math-clamp(60) 0;
    }
    &__label {
        padding-top: math-clamp(50, 66.65);
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }
    &__heading {
        font-size: math-clamp(52, 69.333);
        padding-top: math-clamp(6, 8);
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        line-height: math-clamp(64, 85.333);
        padding-bottom: math-clamp(50, 66.66666);
        @media (max-width: 768px) {
            font-size: math-clamp(36);
            line-height: math-clamp(52);
        }
    }
    &__table {
        border-bottom: math-clamp(1, 1.333) solid #000;
    }
    &__row {
        &__heading {
            display: flex;
            align-items: center;
            border-top: math-clamp(1, 1.333) solid #000;
            padding: math-clamp(16, 21.333) math-clamp(10, 13.333);
        }
        &:hover {
            cursor: pointer;
        }
    }
    &__step {
        font-size: math-clamp(32, 42.666);
        font-weight: 300;
        padding-right: math-clamp(60, 80);
        user-select: none;
        @media (max-width: 768px) {
            font-size: math-clamp(24);
            padding-right: math-clamp(30, 40);
        }
    }
    &__name {
        font-size: math-clamp(32, 42.666);
        font-weight: 300;
        flex-grow: 1;
        user-select: none;
        @media (max-width: 768px) {
            font-size: math-clamp(24);
        }
    }
    &__cta {
        img {
            transition: 200ms all ease-in-out;
            user-select: none;
        }
        &--active {
            img {
                transform: rotate(90deg);
            }
        }
    }
}
</style>