<template>
    <!-- <section class="banner">
        the contact page is a work in progress
    </section> -->
    <Form />
</template>

<script>
import Form from '@/components/Form.vue'

export default {
    name: "Contact",
    components: { Form }
}
</script>

<style lang="scss" scoped>
.banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #e3e3e3;
    color: rgb(142,0,0);
    text-align: center;
    padding: 4px 0px;
    font-weight: 600;
}
</style>