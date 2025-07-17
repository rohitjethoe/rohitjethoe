<script setup>
const content = [
    {
        year: 2025,
        posts: [
            {
                title: "Hello, World",
                date: "1752754706703",
                slug: "hello-world"
            }
        ]
    },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
</script>

<template>
    <main class="font-inter min-h-screen p-2.5 md:p-5 ">
        <div class="tracking-tighter">
            <h2 class="font-medium">Journal</h2>
            <p class="text-neutral-500">Thoughts, stories and ideas.</p>
        </div>
        <div class="pt-5">
            <div v-for="posts in content" class="tracking-tighter">
                <div class="text-neutral-500 py-5">{{ posts.year }}</div>
                <div v-for="post in posts.posts">
                    <a class="flex items-center group gap-2 cursor-pointer py-2.5" :href="`/post/${post.slug}`">
                        <p>{{ post.title }}</p>
                        <span class="h-px grow bg-neutral-300 transition-all group-hover:bg-black sm:block"></span>
                        <p class="text-neutral-500 transition-all group-hover:text-black">{{ months[new Date(Number(post.date)).getMonth()] }} {{ new Date(Number(post.date)).getDate() }}</p>
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>