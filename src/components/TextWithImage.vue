<template>
    <section class="text-with-image">
        <div class="container grid">  
            <div class="text-with-image__text col-16 sm:col-7 sm:col-offset-0">
                <div class="text-with-image__heading">
                    {{ heading }}
                </div>
                <div class="text-with-image__content">
                    <span v-html="text"></span>
                </div>
            </div>
            <div class="text-with-image__asset col-16 sm:col-8 sm:col-offset-8">
                <img :src="image" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TextWithImage",
    props: {
        image: String,
        heading: String,
        text: String
    }
}
</script>

<style lang="scss">
.text-with-image {
    font-family: 'Inter', sans-serif;
    padding: math-clamp(120) 0;
    @media (max-width: 768px) {
        padding: math-clamp(60) 0;
    }
    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__heading {
        font-size: math-clamp(24, 32);
        font-weight: 300;
    }
    &__content {
        letter-spacing: 0.02em;
        line-height: math-clamp(24, 32);
        padding: math-clamp(20, 26.666) 0;
    }
    &__asset {
        img {
            width: 100%;
        }
    }
}
</style>