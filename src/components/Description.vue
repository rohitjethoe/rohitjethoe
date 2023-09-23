<template>
    <section class="description">
        <div class="container grid">
            <div :class="`col-${width} col-offset-${start}`">
                {{ content }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Description",
    props: {
        width: Number,
        start: Number,
        content: String
    }
}
</script>

<style lang="scss" scoped>

</style>