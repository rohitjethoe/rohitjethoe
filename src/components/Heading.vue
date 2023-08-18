<template>
    <section class="heading">
        <div class="container grid">
            <div class="heading__content col-12" :class="`sm:col-${width} sm:col-offset-${start}`">
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
        width: Number,
        start: Number
    }
}
</script>

<style lang="scss" scoped>
.heading {
    font-family: $primaryFont;
    margin-top: math-clamp(160);
    &__content {
        font-size: math-clamp(48);
        font-weight: 300;
        line-height: math-clamp(58.09);
    }
}
</style>