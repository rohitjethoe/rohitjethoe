<template>
    <section class="music">
        <div class="container grid">
            <div class="music__heading col-12 col-offset-1 sm:col-offset-6 sm:col-8">
                Every line of code needs a soundtrack...
            </div>
            <div class="music__playlist col-14 xs:col-10 col-offset-1 sm:col-offset-6 sm:col-8">
                <iframe v-for="song in songs" style="border-radius:12px" :src="`${song}&theme=1`" width="100%" height="90px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Music",
    props: {
        songs: Array
    }
}
</script>

<style lang="scss">
.music {
    font-family: 'Inter', sans-serif;
    padding: math-clamp(20, 40) 0;
    &__heading {
        font-size: math-clamp(24, 32);
        font-weight: 300;
    }
}
</style>