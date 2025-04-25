<script setup>
import Introductory from '@/static/Introductory.vue';
import Contact from '@/static/Contact.vue';
import Project from '@/components/Project.vue';
import Overview from '@/static/Overview.vue';
</script>

<template>
    <Introductory />
    <Contact />
    <div class="qa-projects">
        <Project projectAsset="/assets/monostatic-cover.webp" projectTitle="Monostatic Studio" projectColor="#ebfd55" />
        <Project projectAsset="/assets/huistuindesign-cover.webp" projectTitle="Huis&Tuin" projectColor="#efe8db"/>
        <Project projectAsset="/assets/vadimriver-cover.webp" projectTitle="Vadim River Portfolio" projectColor="#fafafa"/>
        <Project projectAsset="/assets/virtufit-cover.webp" projectTitle="VirtuFit Service Form" projectColor="#c0d68f"/>
        <Project projectAsset="/assets/highsun-cover.webp" projectTitle="High Sun Glasses" projectColor="#e8eae7"/>
        <Project projectAsset="/assets/greenfuture-cover.webp" projectTitle="Green Future" projectColor="#36422d"/>
        <Project projectAsset="/assets/buildbyrelay-cover.webp" projectTitle="Build By Relay" projectColor="#4dff68"/>
    </div>
    <Overview />
</template>