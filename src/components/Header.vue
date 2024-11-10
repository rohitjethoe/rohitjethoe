<script setup>
</script>

<template>
    <header class="qa-header">
        <div class="qa-header__name">
            <a class="qa-header__url" href="/">
                Rohit Jethoe
            </a>
        </div>
        <div class="qa-header__cv">
            <a class="qa-header__download" href="/curriculum_vitae.pdf" target="_blank">download c.v.</a>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "@/styles/functions" as *;

.qa-header {
    $h: &;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Projekt Blackbird';
    padding: math-clamp(30, 40);

    &__name {
        #{$h}__url {
            color: #000;
            text-decoration: none;
            font-size: math-clamp(24, 32);
        }
    }

    &__cv {
        transform: rotate(4deg);
        transition: 250ms ease-in background-color;
        #{$h}__download {
            padding: math-clamp(10, 13.333) math-clamp(15, 20);
            border: math-clamp(1.5, 2) solid #000;
            border-radius: math-clamp(18, 24);
            color: #000;
            text-decoration: none;
            font-size: math-clamp(17, 22.666);
            transition: 250ms ease-in color, 250ms ease-in background-color;

            &:hover {
                background-color: #000;
                color: #fff;    
            }
        }
    }
}
</style>