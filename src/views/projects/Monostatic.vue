<template>
    <CoverImage source="/monostatic-mobile.webp" project="true" contain="true" return="true"/>
    <ProjectDetails title="Monostatic Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/monostatic-website.webp" project="true"/>
    <Music :songs="songs" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue';
import Music from '@/components/Music.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';

export default {
    name: "Monostatic",
    data() {
        return {
            tools: ["Craft CMS", "PHP and Twig", "SCSS"],
            disciplines: ["Web Development", "CMS Implementation"],
            team: ["Monostatic Design", "Relay Development"],
            songs: ["https://open.spotify.com/embed/track/3yk7PJnryiJ8mAPqsrujzf?utm_source=generator", "https://open.spotify.com/embed/track/74tLlkN3rgVzRqQJgPfink?utm_source=generator", "https://open.spotify.com/embed/track/5zFOrNwGaYlPcK1uZyPyY6?utm_source=generator", "https://open.spotify.com/embed/track/2K70ZV0Ls65Kkj0WUEfHlz?utm_source=generator"]
        }
    },
    components: { CoverImage, ProjectDetails, Music }
}
</script>