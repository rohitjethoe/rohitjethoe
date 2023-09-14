<template>
    <CoverImage source="/relay-website.webp" project="1" contain="1" return="1"/>
    <ProjectDetails title="Relay Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/relay-mobile.webp" project="true"/>
    <Images :images="images"/>
    <Music :songs="songs"/>
    <FeaturedProjects :featuredProjects="featuredProjects" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import Music from '@/components/Music.vue';
import Images from '@/components/Images.vue';
import FeaturedProjects from '../../components/FeaturedProjects.vue';

export default {
    name: "Relay",
    data() {
        return {
            tools: ["Craft CMS", "PHP and Twig", "SCSS"],
            disciplines: ["Web Development", "CMS Implementation"],
            team: ["Monostatic Design", "Relay Development"],
            songs: ["https://open.spotify.com/embed/track/3K8gIioWa3uC9002Asdh0N?utm_source=generator", "https://open.spotify.com/embed/track/52ojopYMUzeNcudsoz7O9D?utm_source=generator", "https://open.spotify.com/embed/track/5mQZ5pln1nychtPCtG88em?utm_source=generator"],
            images: {
                0: {
                    path: "/relay-mobile-play.webp",
                    width: 8,
                    start: 0
                },
                1: {
                    path: "/green-craftcms-logo.webp",
                    width: 8,
                    start: 8
                },
            },
            featuredProjects: {
                0: {
                    path: '/monostatic-square.webp',
                    title: 'Monostatic Website',
                    link: '/projects/monostatic'
                },
                1: {
                    path: '/virtufit-square.webp',
                    title: 'VirtuFit',
                    link: '/projects/virtufit'
                }
            }
        }
    },
    components: { CoverImage, ProjectDetails, Music, Images, FeaturedProjects }
}
</script>