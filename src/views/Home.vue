<template>
    <Heading content="Crafting Digital Experiences, as a Fullstack Developer." width="9" start="0"/>
    <CoverImage source="/background.webp"/>
    <section class="work">
        <div class="container grid">
            <div class="work__heading col-16 sm:col-5 sm:col-offset-10">
                Selected Works
            </div>
            <div class="work__cases col-16">
                <div class="work__case work__case--monostatic">
                    <a href="/projects/monostatic">
                        <img src="/monostatic.webp" alt="Monostatic">
                    </a>
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <div>
                        <a href="/projects/monostatic">Monostatic</a> 
                    </div>
                </div>
                <div class="work__case work__case--virtufit">
                    <a href="/projects/virtufit">
                        <img src="/virtufit.webp" alt="VirtuFit">
                    </a>
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <div>
                        <a href="/projects/virtufit">VirtuFit</a> 
                    </div>
                </div>
            </div>
            <div class="work__cases work__cases--bottom col-16">
                <div class="work__case work__case--relay">
                    <a href="#">
                        <img src="/relay.webp" alt="Relay">
                    </a>
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <div>
                        <a href="#">Build by Relay</a> 
                    </div>
                </div>
                <div class="work__case work__case--fjg-online">
                    <a href="#">
                        <img src="/fjg-online.webp" alt="FJG Online">
                    </a>
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <div>
                        <a href="#">FJG Online</a> 
                    </div>
                </div>
            </div>
        </div>
    </section>
    <About />
</template>

<script>
import About from '../components/About.vue';
import CoverImage from '../components/CoverImage.vue';
import Heading from '../components/Heading.vue';

export default {
    name: "Home",
    mounted() {
        const links = document.querySelectorAll('a');
        const cursor = document.querySelector('.cursor');

        links.forEach((link) => {
            link.addEventListener('mouseover', () => {
                cursor.style.height = '36px';
                cursor.style.width = '36px';
            })

            link.addEventListener('mouseleave', () => {
                cursor.style.height = '18px';
                cursor.style.width = '18px';
            })
        })
    },
    components: { Heading, CoverImage, About }
}
</script>

<style lang="scss" scoped>
.work {
    font-family: $primaryFont;
    @media (max-width: 768px) {
        margin-top: math-clamp(240);
    }
    &__heading {
        font-size: math-clamp(48, 64);
        font-weight: 300;
        text-align: right;
        @media (max-width: 768px) {
            font-size: math-clamp(24);
        }
    }
    &__cases {
        margin-top: math-clamp(80, 106.666);
        display: flex;
        flex-flow: wrap;
        gap: math-clamp(16, 21.333);
        @media (max-width: 768px) {
            display: block;
            margin-top: math-clamp(30);
        }
        &--bottom {
            align-items: baseline;
            transform: translateY(math-clamp(-180, -240));
            @media (max-width: 768px) {
                transform: none;
            }
        }
    }
    &__case {
        display: flex;
        gap: math-clamp(16, 21.333);
        flex-flow: column;
        position: relative;
        a:link, a:visited {
            text-decoration: none;
            color: #000;
        }
        &--monostatic {
            img {
                width: math-clamp(670, 893.333);
                height: auto;
            }
        }
        &--virtufit {
            img {
                width: math-clamp(498, 664);
            }
        }
        &--relay {
            img {
                width: math-clamp(670, 893.333);
            }
        }
        &--fjg-online {
            img {
                width: math-clamp(498, 664);
            }
        }
        &:hover {
            .work__arrow {
                &--top {
                    transform: rotate(180deg) translateY(math-clamp(-5, -6.666)) translateX(math-clamp(-1, -1.333));
                }
                &--bottom {
                    transform: translateY(math-clamp(-5, -6.666));
                }
            }
        }
        @media (max-width: 768px) {
            padding-bottom: math-clamp(30);
            img {
                width: 100%;
            }
        }
    }
    &__expand {
        margin: math-clamp(16, 21.333);
        width: math-clamp(40, 53.333);
        height: math-clamp(40, 53.333);
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        border-radius: 100%;
        img {
            width: math-clamp(8, 10.666);
        }
    }
    &__arrow {
        transition: 0.25s all;
        &--top {
            transform: rotate(180deg) translateY(math-clamp(-3, -4)) translateX(math-clamp(-1.5, -2));
        }
        &--bottom {
            transform: translateY(math-clamp(-3, -4)) translateX(math-clamp(-1.5, -2));
        }
    }
}

</style>