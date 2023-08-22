<template>
    <CoverImage source="/virtufit-mobile.webp" project="true" contain="true" return="true"/>
    <ProjectDetails title="VirtuFit Service Request Form" :team="team" :tools="tools" :disciplines="disciplines" description="Revamped and streamlined the service request process for a sports goods store, ensuring a seamless and efficient experience for clients seeking assistance." />
</template>

<script>
import CoverImage from '@/components/CoverImage.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'

export default {
    name: "Virtufit",
    data() {
        return {
            tools: ["Vue.js", "Tailwind"],
            disciplines: ["Web Development", "Web Application"],
            team: ["Relay Design", "Relay Development"]
        }
    },
    components: { CoverImage, ProjectDetails }
}
</script>