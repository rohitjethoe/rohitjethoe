<template>
    <CoverImage source="/virtufit-mobile.webp" project="1" contain="1" return="1" relayProject="1"/>
    <ProjectDetails title="VirtuFit Service Request Form" :team="team" :tools="tools" :disciplines="disciplines" description="Revamped and streamlined the service request process for a sports goods store, ensuring a seamless and efficient experience for clients seeking assistance." />
    <Images :images="images"/>
    <TextWithImage :heading="textWithImage[0].heading" :text="textWithImage[0].text" :image="textWithImage[0].image"/>
    <FeaturedProjects :featuredProjects="featuredProjects" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import Images from '@/components/Images.vue';
import TextWithImage from '@/components/TextWithImage.vue';

export default {
    name: "Virtufit",
    data() {
        return {
            tools: ["Vue.js", "Tailwind"],
            disciplines: ["Web Development", "Web Application"],
            team: ["Relay Design", "Relay Development"],
            images: {
                0: {
                    path: "/virtufit-mobile2.webp",
                    width: 8,
                    start: 0,
                    marginTop: true
                },
                1: {
                    path: "/virtufit-desktop.webp",
                    width: 8,
                    start: 8,
                }
            },
            textWithImage: {
                0: {
                    heading: "A Cross-Website Wordpress Plugin",
                    text: "After a successful launch on VirtuFit, we upgraded the project by adding multi-language support and ensuring compatibility with Flow Fitness. We achieved this with a single Vue.js codebase that can be translated into Dutch, English, and German. Additionally, we provided support for two websites, each with its unique design, all within one codebase.<br /> <br />While the software has been developed using Vue.js, it functions as a WordPress plugin, achieving both speed and compatibility with two websites that were already built in WordPress.",
                    image: "/flowfitness.webp"
                }
            },
            featuredProjects: {
                0: {
                    path: '/monostatic-square.webp',
                    title: 'Monostatic',
                    link: '/projects/monostatic'
                },
                1: {
                    path: '/relay-square.webp',
                    title: 'Build by Relay',
                    link: '/projects/relay'
                }
            }
        }
    },
    components: { CoverImage, ProjectDetails, Images, FeaturedProjects, TextWithImage }
}
</script>