<template>
    <section class="cover-image">
        <div class="grid" :class="contain ? 'container' : ''">
            <div class="cover-image__wrapper col-16" :class="project ? 'cover-image__project' : ''">
                <img :src="source" :alt="altText">
                <router-link v-if="return" to="/">
                    <div class="cover-image__close">
                        <div class="cover-image__close--wrapper">
                            <div class="cover-image__line cover-image__line--top"></div>
                            <div class="cover-image__line cover-image__line--bottom"></div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CoverImage",
    props: {
        source: String,
        altText: String,
        project: Boolean,
        contain: Boolean,
        return: Boolean
    }
}
</script>

<style lang="scss" scoped>
.cover-image {
    overflow-x: hidden;
    @media (max-width: 768px) {
        padding: math-clamp(12) 0;
    }
    .container {
        img {
            border-radius: math-clamp(10);
        }
    }
    &__wrapper {
        margin: math-clamp(160) 0;
        position: relative;
        @media (max-width: 768px) {
            margin: math-clamp(30) 0 math-clamp(15) 0;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    &__project {
        margin: math-clamp(56) 0;
        @media (max-width: 768px) {
            img {
                transform: scale(1.5);
            }
        }
    }
    &__close {
        width: math-clamp(40);
        height: math-clamp(40);
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 100%;
        margin-top: math-clamp(30);
        margin-right: math-clamp(30);
        z-index: 20;
        @media (max-width: 768px) {
            margin-top: 0;
            margin-right: 0;
        }
    }
    &__line {
        width: math-clamp(20);
        height: math-clamp(2);
        background-color: #000;
        border-radius: 1px;
        &--top {
            transition: 0.25s all;
            transform: translateY(math-clamp(1)) rotate(45deg);
        }
        &--bottom {
            transition: 0.25s all;
            transform: translateY(math-clamp(-1)) rotate(-45deg);
        }
    }
}
</style>