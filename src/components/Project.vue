<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
    projectTitle: String,
    projectAsset: String,
    projectColor: String,
});

const projectRef = ref(null);

import { useIntersectionObserver } from '@vueuse/core';

onMounted(() => {
    useIntersectionObserver(
        projectRef,
        ([{ isIntersecting }]) => {
            if (isIntersecting) {
                projectRef.value.style.opacity = 1;
            } else {
                projectRef.value.style.opacity = 0;
            }
        },
        {
            threshold: 0.1,
        }
    );
});
</script>

<template>
    <section class="qa-project">
        <div class="qa-project__image">
            <img 
                class="qa-project__asset" 
                :src="projectAsset" 
                :alt="projectTitle" 
                loading="lazy" 
            />
            <div class="qa-project__textual">
                {{ projectTitle }}
            </div>
        </div>
        <div 
            class="qa-project__overlay" 
            :style="`background-color: ${projectColor};`" 
            ref="projectRef"
        ></div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-project {
    position: relative;
    font-family: "Projekt Blackbird";
    margin-bottom: math-clamp(30, 40);
    transition: opacity 250ms ease-in;

    @media (max-width: $sm) {
        margin-bottom: math-clamp(15, 20);
    }

    &__image {
        position: relative;
        width: 100vw;
        overflow: hidden;
    }

    &__asset {
        width: 100%;
    }

    &__textual {
        position: absolute;
        bottom: math-clamp(30, 40);
        left: math-clamp(30, 40);
        font-size: math-clamp(18, 24);

        @media (max-width: $sm) {
            display: none;
        }
    }

    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: opacity 500ms ease-out;
        opacity: 0; 
    }
}
</style>
