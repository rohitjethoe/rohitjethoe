<template>
    <section class="cover-image">
        <div class="container">
            <div class="cover-image__wrapper">
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
    }
}
</script>

<style lang="scss" scoped>
.cover-image {
    margin: math-clamp(160) 0;
    &__wrapper {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>