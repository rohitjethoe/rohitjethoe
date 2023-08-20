<template>
    <CoverImage source="/relay-website.webp" project="true" contain="true"/>
    <ProjectDetails title="Relay Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/relay-mobile.webp" project="true"/>
    <Music :songs="songs"/>
</template>

<script>
import CoverImage from '../../components/CoverImage.vue';
import ProjectDetails from '../../components/ProjectDetails.vue';
import Music from '../../components/Music.vue';

export default {
    name: "Relay",
    data() {
        return {
            tools: ["Craft CMS", "PHP and Twig", "SCSS"],
            disciplines: ["Web Development", "CMS Implementation"],
            team: ["Monostatic Design", "Relay Development"],
            songs: ["https://open.spotify.com/embed/track/3K8gIioWa3uC9002Asdh0N?utm_source=generator", "https://open.spotify.com/embed/track/52ojopYMUzeNcudsoz7O9D?utm_source=generator", "https://open.spotify.com/embed/track/5mQZ5pln1nychtPCtG88em?utm_source=generator"]
        }
    },
    components: { CoverImage, ProjectDetails, Music }
}
</script>