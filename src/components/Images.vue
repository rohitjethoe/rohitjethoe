<template>
    <section class="images">
        <div class="container grid">
            <div v-for="image in images" class="images__image col-16" :class="`sm:col-${image.width} sm:col-offset-${image.start}`">
                <img :class="image.marginTop ? 'images__image--marginTop' : ''" :src="image.path" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Images",
    props: {
        images: Array
    }
}
</script>

<style lang="scss" scoped>
.images {
    padding: math-clamp(120) 0;
    @media (max-width: 768px) {
        padding: math-clamp(30) 0;
    }
    &__image {
        img {
            width: 100%;
            height: auto;
        }
        &--marginTop {
            margin-top: math-clamp(120);
        }
    }
}
</style>