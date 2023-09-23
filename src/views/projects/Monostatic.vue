<template>
    <CoverImage source="/monostatic-mobile.webp" project="1" contain="1" return="1" relayProject="1"/>
    <ProjectDetails title="Monostatic Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/monostatic-website.webp" project="1"/>
    <Images :images="images"/>
    <section class="description">
        <div class="container grid">
            <div class="description__heading col-15 col-offset-1">
                Dynamically displayed
            </div>
            <div class="description__content col-15 col-offset-1">
                Monostatic’s portfolio was crafted with the elegance of CraftCMS, enabling us to<br/>create a dynamic and playful design. I had the opportunity to work on the project<br/>commissioned by my employer, <a href="https://www.buildbyrelay.com" target="_blank">Build By Relay</a>, during my time with the company.<br/>I was responsible for its development. 
            </div>
        </div>
    </section>
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

<style lang="scss" scoped>
.description {
    font-family: 'Inter', sans-serif;
    line-height: math-clamp(23);
    a:link, a:visited {
        color: $primaryColor;
    }
    &__heading {
        font-size: math-clamp(24);
        font-weight: 300;
    }
}
</style>