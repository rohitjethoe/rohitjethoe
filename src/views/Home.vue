<script setup>
import Introductory from '@/static/Introductory.vue';
import Contact from '@/static/Contact.vue';
import Project from '@/components/Project.vue';
import Overview from '@/static/Overview.vue';
</script>

<template>
    <Introductory />
    <Contact />
    <Project projectAsset="/assets/monostatic-cover.webp" projectTitle="Monostatic Studio"/>
    <Project projectAsset="/assets/huistuindesign-cover.webp" projectTitle="Huis&Tuin"/>
    <Project projectAsset="/assets/vadimriver-cover.webp" projectTitle="Vadim River Portfolio"/>
    <Project projectAsset="/assets/virtufit-cover.webp" projectTitle="VirtuFit Service Form"/>
    <Project projectAsset="/assets/highsun-cover.webp" projectTitle="High Sun Glasses"/>
    <Project projectAsset="/assets/greenfuture-cover.webp" projectTitle="Green Future"/>
    <Project projectAsset="/assets/buildbyrelay-cover.webp" projectTitle="Build By Relay"/>
    <Overview />
</template>