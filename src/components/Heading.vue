<template>
    <section class="heading">
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
    props: {
        content: String,
        width: String,
        start: String,
    }
}
</script>

<style lang="scss" scoped>
.heading {
    font-family: $primaryFont;
    padding-top: math-clamp(160, 200);
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
}
</style>