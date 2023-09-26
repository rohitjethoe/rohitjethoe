<template>
    <CoverImage source="/relay-website.webp" project="1" contain="1" return="1" relayProject="1"/>
    <ProjectDetails title="Relay Website" :team="team" :tools="tools" :disciplines="disciplines" description="Crafted a creative agency's online presence through an interactive website with a user-friendly CMS, showcasing their portfolio and services dynamically." />
    <CoverImage source="/relay-mobile.webp" project="true"/>
    <Images :images="images"/>
    <section class="logo">
        <img src="/relay-motion.gif" alt="">
    </section>
    <TextWithImage :heading="textWithImage[0].heading" :text="textWithImage[0].text" :image="textWithImage[0].image"/>
    <!-- <Music :songs="songs"/> -->
    <FeaturedProjects :featuredProjects="featuredProjects" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import Music from '@/components/Music.vue';
import Images from '@/components/Images.vue';
import FeaturedProjects from '../../components/FeaturedProjects.vue';
import TextWithImage from '@/components/TextWithImage.vue';
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
                    path: "/relay-mobile2.webp",
                    width: 8,
                    start: 0
                },
                1: {
                    path: "/relay-desktop.webp",
                    width: 8,
                    start: 8
                },
            },
            textWithImage: {
                0: {
                    heading: "Dynamical Content Management",
                    text: "CraftCMS is a content management system that utilizes PHP for its backend, while its frontend is powered by Twig templates and Vite. The environment is very developer-friendly, and I was able to quickly adapt to Twig & PHP, even though I mainly work on personal projects in JavaScript or C.<br/><br/>The tool is particularly useful for creating a more flexible CMS. By using blocks, we empower designers to maintain custom pages, freeing them from rigid rule sets.",
                    image: "/green-craftcms-logo.webp"
                }
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
    components: { CoverImage, ProjectDetails, Music, Images, TextWithImage, FeaturedProjects }
}
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    justify-content: center;
    padding: math-clamp(90) 0;
    @media (max-width: 768px) {
        padding: math-clamp(60) 0;
    }
    img {
        width: math-clamp(102);
        @media (max-width: 768px) {
            width: 16vw;
        }
    }
}
</style>