<template>
    <Heading content="Crafting Digital Experiences, as a Fullstack Developer." width="9" start="0"/>
    <CoverImage source="/background.webp" contain="true"/>
    <section class="work">
        <div class="container grid">
            <div class="work__heading col-16 sm:col-5 sm:col-offset-10">
                Selected Works
            </div>
            <div class="work__cases col-16">
                <div class="work__case work__case--monostatic">
                    <div class="work__case--image">
                        <a href="/projects/monostatic">
                            <img src="/monostatic.webp" alt="Monostatic">
                        </a>
                        <div class="work__case--overlay"></div>
                    </div>
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <div>
                        <a href="/projects/monostatic">Monostatic</a> 
                    </div>
                </div>
                <div class="work__case work__case--virtufit">
                    <div class="work__case--image">
                        <a href="/projects/virtufit">
                            <img src="/virtufit.webp" alt="VirtuFit">
                        </a>
                        <div class="work__case--overlay"></div>
                    </div>
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
                    <div class="work__case--image">
                        <a href="/projects/relay">
                            <img src="/relay.webp" alt="Relay">
                        </a>
                        <div class="work__case--overlay"></div>
                    </div>
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <div class="work__case--name">
                        <a href="#">Build by Relay</a> 
                    </div>
                </div>
                <div class="work__case work__case--fjg-online">
                    <div class="work__case--image">
                        <a href="#">
                            <img src="/fjg-online.webp" alt="FJG Online">
                        </a>
                        <div class="work__case--overlay"></div>
                    </div>
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
import About from '@/components/About.vue';
import CoverImage from '@/components/CoverImage.vue';
import Heading from '@/components/Heading.vue';

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
        margin-top: math-clamp(80);
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
        @media (max-width: 768px) {
            padding-bottom: math-clamp(30);
        }
        a:link, a:visited {
            text-decoration: none;
            color: #000;
        }
        &--image {
            position: relative;
            overflow: hidden;
            border-radius: math-clamp(8);
            img {
                transform: scale(1.01);
                transition: 0.5s all;
            }
            a:link, a:visited {
                display: inline-block;
                height: 0px;
            }
        }
        &--overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0,0,0, 0.05);
            opacity: 0;
            transition: 0.5s all;
            pointer-events: none;
        }
        &--monostatic {
            img {
                width: math-clamp(670, 893.333);
            }
            @media (max-width: 768px) {
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
        &--virtufit {
            img {
                width: math-clamp(498, 664);
            }
            @media (max-width: 768px) {
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
        &--relay {
            img {
                width: math-clamp(670, 893.333);
            }
            @media (max-width: 768px) {
                width: 100vw;
                transform: translateX(math-clamp(-16)) translateY(math-clamp(-48));
                .work__case--image {
                    border-radius: 0px;
                }
                .work__case--name {
                    transform: translateX(math-clamp(16));
                }
                img {
                    width: 100%;
                }
            }
        }
        &--fjg-online {
            img {
                width: math-clamp(498, 664);
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        &:hover {
            img {
                transform: scale(1.1);
            }
            .work__arrow {
                &--top {
                    transform: translateX(math-clamp(9)) translateY(math-clamp(-5));
                }
                &--bottom {
                    transform: translateX(math-clamp(-8)) rotate(180deg) translateY(math-clamp(-5));
                }
            }
            .work__case--overlay {
                opacity: 1;
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
        pointer-events: none;
        img {
            width: math-clamp(8, 10.666);
        }
    }
    &__arrow {
        transition: 0.25s all;
        &--top {
            transform: translateX(math-clamp(7)) translateY(math-clamp(-3));
        }
        &--bottom {
            transform: translateX(math-clamp(-6)) rotate(180deg) translateY(math-clamp(-3));
        }
    }
}
</style>