<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
    projectTitle: String,
    projectAsset: String
})

const projectRef = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                projectRef.value.style.opacity = '1';
            }
        });
    }, { threshold: 0.333 });

    if (projectRef.value) {
        observer.observe(projectRef.value);
    }
});
</script>

<template>
    <section class="qa-project" ref="projectRef">
        <div class="qa-project__image">
            <img class="qa-project__asset" :src="projectAsset" :alt="projectTitle"/>
            <div class="qa-project__textual">
                {{ projectTitle }}
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-project {
    $p: &;

    font-family: "Projekt Blackbird";
    margin-bottom: math-clamp(30, 40);
    opacity: 0.1;
    transition: 250ms ease-in opacity;

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
}
</style>