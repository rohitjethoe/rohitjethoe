<template>
    <CoverImage source="/monostatic-mobile.webp" project="1" contain="1" return="1" relayProject="1"/>
    <ProjectDetails title="Monostatic Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/monostatic-website.webp" project="1"/>
    <Images :images="images"/>
    <Music :songs="songs" />
    <FeaturedProjects :featuredProjects="featuredProjects" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue';
import Music from '@/components/Music.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import Images from '@/components/Images.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';

export default {
    name: "Monostatic",
    data() {
        return {
            tools: ["Craft CMS", "PHP and Twig", "SCSS"],
            disciplines: ["Web Development", "CMS Implementation"],
            team: ["Monostatic Design", "Relay Development"],
            songs: ["https://open.spotify.com/embed/track/3yk7PJnryiJ8mAPqsrujzf?utm_source=generator", "https://open.spotify.com/embed/track/74tLlkN3rgVzRqQJgPfink?utm_source=generator", "https://open.spotify.com/embed/track/5zFOrNwGaYlPcK1uZyPyY6?utm_source=generator", "https://open.spotify.com/embed/track/2K70ZV0Ls65Kkj0WUEfHlz?utm_source=generator"],
            images: {
                0: {
                    path: "/monostatic-mobile-play.webp",
                    width: 8,
                    start: 0
                },
                1: {
                    path: "/craftcms-logo.webp",
                    width: 8,
                    start: 8,
                }
            },
            featuredProjects: {
                0: {
                    path: '/relay-square.webp',
                    title: 'Build by Relay',
                    link: '/projects/relay'
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