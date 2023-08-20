<template>
    <CoverImage source="/relay-website.webp" project="true"/>
    <ProjectDetails title="Relay Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
</template>

<script>
import CoverImage from '../../components/CoverImage.vue';
import ProjectDetails from '../../components/ProjectDetails.vue';

export default {
    name: "Relay",
    data() {
        return {
            tools: ["Craft CMS", "PHP and Twig", "SCSS"],
            disciplines: ["Web Development", "CMS Implementation"],
            team: ["Monostatic Design", "Relay Development"]
        }
    },
    components: { CoverImage, ProjectDetails }
}
</script>