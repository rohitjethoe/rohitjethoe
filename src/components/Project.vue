<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    projectTitle: String,
    projectAsset: String
})
</script>

<template>
    <section class="qa-project">
        <div class="qa-project__image">
            <img class="qa-project__asset" :src="projectAsset"/>
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