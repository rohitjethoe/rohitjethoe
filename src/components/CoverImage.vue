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
                <div v-if="relayProject" class="cover-image__tag">
                    <a href="https://buildbyrelay.com" target="_blank">
                        <svg width="71" height="33" viewBox="0 0 71 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1497_7103)">
                            <path d="M0 1.97107C13.1708 1.97107 20.0295 12.1175 20.0295 21.0652C20.0295 27.45 15.2472 30.3314 11.7965 30.3314H11.7063C8.25557 30.3314 3.47326 27.45 3.47326 21.0652C3.47326 12.1175 10.3295 1.97107 23.5003 1.97107" stroke="#4DFF68" stroke-width="3.9397" stroke-miterlimit="10"/>
                            <path d="M23.5002 1.97107C36.671 1.97107 43.5297 12.1175 43.5297 21.0652C43.5297 27.45 38.7474 30.3314 35.2967 30.3314H35.2064C31.7557 30.3314 26.9734 27.45 26.9734 21.0652C26.9734 12.1175 33.8297 1.97107 47.0005 1.97107" stroke="#4DFF68" stroke-width="3.9397" stroke-miterlimit="10"/>
                            <path d="M47.0003 1.97107C60.1711 1.97107 67.0299 12.1175 67.0299 21.0652C67.0299 27.45 62.2476 30.3314 58.7969 30.3314H58.7066C55.2559 30.3314 50.4736 27.45 50.4736 21.0652C50.4736 12.1175 57.3298 1.97107 70.5006 1.97107" stroke="#4DFF68" stroke-width="3.9397" stroke-miterlimit="10"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1497_7103">
                            <rect width="70.5083" height="32.3" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg> 
                    </a>
                </div>
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
        return: Boolean,
        relayProject: Boolean
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
            user-select: none;
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
        z-index: 10;
        @media (max-width: 768px) {
            margin-top: 0;
            margin-right: 0;
            transform: translateY(math-clamp(-16));
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
    &__tag {
        position: absolute;
        padding: math-clamp(24);
        z-index: 20;
        @media (min-width: 768px) {
            top: 0;
            left: 0;
        }
        @media (max-width: 768px) {
            padding: 0;
            transform: translateY(math-clamp(-8));
        }
        svg {
            // mix-blend-mode: luminosity;
            width: math-clamp(48);
            height: auto;
            object-fit: contain;
            transition: 0.5s all;
            transform: scale(1);
            path {
                stroke: rgba(0, 0, 0, 0.15);
            }
        }
        &:hover {
            z-index: 20;
        }
    }
}
</style>