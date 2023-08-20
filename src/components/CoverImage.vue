<template>
    <section class="cover-image">
        <div class="grid" :class="contain ? 'container' : ''">
            <div class="cover-image__wrapper col-16" :class="project ? 'cover-image__project' : ''">
                <img :src="source" :alt="altText">
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
        contain: Boolean
    }
}
</script>

<style lang="scss" scoped>
.cover-image {
    @media (max-width: 768px) {
        margin: math-clamp(60) 0;
    }
    .container {
        img {
            border-radius: math-clamp(10);
        }
    }
    &__wrapper {
        margin: math-clamp(160) 0;
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
        img {
            // border-radius: math-clamp(12);
        }   
    }
}
</style>