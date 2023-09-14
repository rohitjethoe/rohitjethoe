<template>
    <section class="heading" :class="animation ? 'heading--animation' : ''">
        <div class="container grid">
            <div class="heading__content col-12 xs:col-10" :class="`sm:col-${width} sm:col-offset-${start}`">
                <span v-html="content"></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Heading",
    data() {
        return {
            animation: false
        }
    },
    props: {
        content: String,
        width: String,
        start: String,
    },
    mounted() {
        setTimeout(() => {
            this.animation = true;
        }, 50)
    }
}
</script>

<style lang="scss" scoped>
.heading {
    font-family: $primaryFont;
    padding-top: math-clamp(160, 200);
    opacity: 0.05;
    transform: translateY(math-clamp(30));
    transition: 500ms all;
    @media (max-width: 768px) {
        padding-top: math-clamp(80);
    }
    &__content {
        font-size: math-clamp(48, 64);
        font-weight: 300;
        line-height: math-clamp(58.09, 77.45);
        @media (max-width: 768px) {
            font-size: math-clamp(24);
            line-height: math-clamp(30);
        }
    }
    &--animation {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>