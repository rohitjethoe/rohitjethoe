<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const isJournal = computed(() => route.path.startsWith('/journal'))

const content = [
    {
        year: 2025,
        posts: [
            {
                title: "Hello, World",
                date: "1752754706703",
                slug: "example-post"
            }
        ]
    },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
</script>

<template>
    <main class="font-inter px-2.5 pt-10 md:px-5 ">
        <div class="tracking-tighter flex flex-row-reverse md:block">
            <div class="w-20"></div>
            <div>
                <h2 class="font-medium">Journal</h2>
                <p class="text-neutral-500">Thoughts, stories and ideas.</p>
            </div>
        </div>
        <div class="pt-10">
            <div v-for="posts in content" class="tracking-tighter">
                <div class="text-neutral-500 py-5">{{ posts.year }}</div>
                <div v-for="post in posts.posts">
                    <a class="flex items-center group gap-2 cursor-pointer py-2.5" :href="`/journal/${post.slug}`">
                        <p>{{ post.title }}</p>
                        <span class="h-px grow bg-neutral-300 transition-all group-hover:bg-black sm:block"></span>
                        <p class="text-neutral-500 transition-all group-hover:text-black">{{ months[new Date(Number(post.date)).getMonth()] }} {{ new Date(Number(post.date)).getDate() }}</p>
                    </a>
                </div>
            </div>
        </div>
    </main>
    <div class="lg:hidden flex py-8">
        <div class="w-12"></div>
        <ul>
            <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isHome ? 'text-black font-medium' : 'text-neutral-500'">
                <a href="/">Index</a>
            </li>
            <li class="font-inter tracking-tighter transition-all hover:text-black py-1" :class="isJournal ? 'text-black font-medium' : 'text-neutral-500'">
                <a href="/journal">Technical Journal</a>
            </li>
        </ul>
    </div>
</template>

<style>
main {
    min-height: calc(100vh - 136px);
}

@media screen and (max-width: 768px) {
    main {
        min-height: calc(100vh - 52px);
    }
}
</style>