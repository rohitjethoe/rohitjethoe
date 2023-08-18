<template>
    <Heading content="Crafting Digital Experiences, as a Fullstack Developer." width="9" start="0"/>
    <CoverImage source="/background.webp"/>
    <section class="work">
        <div class="container grid">
            <div class="work__heading col-5 col-offset-10">
                Selected Works
            </div>
            <div class="work__cases col-16">
                <div class="work__case work__case--monostatic">
                    <img src="/monostatic.webp" alt="Monostatic">
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <span>
                        Monostatic
                    </span>
                </div>
                <div class="work__case work__case--virtufit">
                    <img src="/virtufit.webp" alt="VirtuFit">
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <span>
                        Virtufit
                    </span>
                </div>
            </div>
            <div class="work__cases work__cases--bottom col-16">
                <div class="work__case work__case--relay">
                    <img src="/relay.webp" alt="Relay">
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <span>
                        Build by Relay
                    </span>
                </div>
                <div class="work__case work__case--fjg-online">
                    <img src="/fjg-online.webp" alt="FJG Online">
                    <div class="work__expand">
                        <img class="work__arrow work__arrow--top"  src="../assets/arrow.svg" alt="">
                        <img class="work__arrow work__arrow--bottom" src="../assets/arrow.svg" alt="">
                    </div>
                    <span>
                        FJG Online
                    </span>
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
    components: { Heading, CoverImage, About }
}
</script>

<style lang="scss" scoped>
.work {
    font-family: $primaryFont;
    &__heading {
        font-size: math-clamp(48);
        font-weight: 300;
        text-align: right;
    }
    &__cases {
        margin-top: math-clamp(80);
        display: flex;
        flex-flow: wrap;
        gap: math-clamp(16);
        &--bottom {
            align-items: baseline;
            transform: translateY(math-clamp(-180));
        }
    }
    &__case {
        display: flex;
        gap: math-clamp(16);
        flex-flow: column;
        position: relative;
        &--monostatic {
            img {
                width: math-clamp(670);
                height: auto;
            }
        }
        &--virtufit {
            img {
                width: math-clamp(498);
            }
        }
        &--relay {
            img {
                width: math-clamp(670);
            }
        }
        &--fjg-online {
            img {
                width: math-clamp(498);
            }
        }
        &:hover {
            .work__arrow {
                &--top {
                    transform: rotate(180deg) translateY(math-clamp(-5)) translateX(math-clamp(-1));
                }
                &--bottom {
                    transform: translateY(math-clamp(-5));
                }
            }
        }
    }
    &__expand {
        margin: math-clamp(16);
        width: math-clamp(40);
        height: math-clamp(40);
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        border-radius: 100%;
        img {
            width: math-clamp(8);
        }
    }
    &__arrow {
        transition: 0.25s all;
        &--top {
            transform: rotate(180deg) translateY(math-clamp(-3)) translateX(math-clamp(-1.5));
        }
        &--bottom {
            transform: translateY(math-clamp(-3)) translateX(math-clamp(-1.5));
        }
    }
}

</style>