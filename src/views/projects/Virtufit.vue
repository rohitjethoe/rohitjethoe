<template>
    <CoverImage source="/virtufit-mobile.webp" project="1" contain="1" return="1" relayProject="1"/>
    <ProjectDetails title="VirtuFit Service Request Form" :team="team" :tools="tools" :disciplines="disciplines" description="Revamped and streamlined the service request process for a sports goods store, ensuring a seamless and efficient experience for clients seeking assistance." />
    <FeaturedProjects :featuredProjects="featuredProjects" />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
export default {
    name: "Virtufit",
    data() {
        return {
            tools: ["Vue.js", "Tailwind"],
            disciplines: ["Web Development", "Web Application"],
            team: ["Relay Design", "Relay Development"],
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
    components: { CoverImage, ProjectDetails, FeaturedProjects }
}
</script>