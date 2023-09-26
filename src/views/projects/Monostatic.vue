<template>
    <CoverImage source="/monostatic-mobile.webp" project="1" contain="1" return="1" relayProject="1"/>
    <ProjectDetails title="Monostatic Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/monostatic-website.webp" project="1"/>
    <Images :images="images"/>
    <Workflow />
    <TextWithImage :heading="textWithImage[0].heading" :text="textWithImage[0].text" :image="textWithImage[0].image"/>
    <FeaturedProjects :featuredProjects="featuredProjects" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue';
import Music from '@/components/Music.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import Images from '@/components/Images.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import TextWithImage from '@/components/TextWithImage.vue';
import Workflow from '@/components/Workflow.vue';

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
            textWithImage: {
                0: {
                    heading: "Monostatic: Accelerating ventures by investing design and innovation",
                    text: "I joined Monostatic as the first employee of their new development studio, Build By Relay, kick-starting my career in web development while pursuing my dream of enrolling in the TU Delft Computer Science Bachelor program.<br /><br />Working at Monostatic taught me numerous valuable skills, including creating structured code and following a workflow. Additionally, I learned how to develop outstanding applications as part of a team. Notably, at Monostatic, I not only improved as a developer but also gained insights into entrepreneurship, critical thinking in design, achieving perfection, and various other valuable skills.<br /><br />I have been with Monostatic since March \'23 and continue to work here today.",
                    image: "/monostatic-door.webp"
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
    components: { CoverImage, ProjectDetails, Music, Images, Workflow, TextWithImage,  FeaturedProjects }
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