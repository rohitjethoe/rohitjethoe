<template>
    <section class="blog">
        <div class="container grid">
            <div class="blog__heading col-16 sm:col-14">
                Archived collection of posts about the research I've conducted to enhance my skills in Web Development and Design.
            </div>
            <div v-for="post in posts" class="blog__post col-16 sm:col-7" :class="`sm:col-offset-${post.id % 2  ? '8' : '0'}`">
                <a :href="`/blog${post.uri}`">
                    <img :src="post.thumbnail" alt="">
                    <div class="blog__title">
                        {{ post.title }}
                    </div>
                    <div class="blog__tags">
                        <div v-for="tag in post.tags" class="blog__tag">
                            {{ tag }}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Blog",
    data() {
        return {
            posts: {
                0: {
                    id: 0,
                    thumbnail: '/cs50x.webp',
                    title: 'Web Assembly: An exciting development for the future of Web Development',
                    tags: ['Programming'],
                    uri: "/cs50x"
                },
                1: {
                    id: 1,
                    thumbnail: '/cs50x.webp',
                    title: 'Web Assembly: An exciting development for the future of Web Development',
                    tags: ['Programming'],
                    uri: "/cs50x"
                },
                2: {
                    id: 2,
                    thumbnail: '/cs50x.webp',
                    title: 'Web Assembly: An exciting development for the future of Web Development',
                    tags: ['Programming'],
                    uri: "/cs50x"
                }
            }           
        }
    }
}
</script>

<style lang="scss" scoped>
.blog {
    padding: math-clamp(120) 0;
    font-family: 'Inter', sans-serif;
    @media (max-width: 768px) {
        padding: math-clamp(90) 0;
    }
    &__heading {
        font-weight: 300;
        font-size: math-clamp(48);
        padding: math-clamp(20) 0;
        @media (max-width: 768px) {
            font-size: math-clamp(24);
        }
    }
    &__post {
        margin-top: math-clamp(60);
        @media (max-width: 768px) {
            margin-top: math-clamp(8);
        }
        a:link, a:visited {
            color: $primaryColor;
            text-decoration: none;
        }
        img {
            border-radius: math-clamp(12);
            width: 100%;
        }
    }
    &__title {
        padding: math-clamp(24) 0;
        font-size: math-clamp(20);
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: math-clamp(16);
            padding: math-clamp(12) 0;
        }
    }
    &__tags {
        padding-bottom: math-clamp(12);
        font-size: math-clamp(16);
        font-weight: 300;
        text-transform: uppercase;
        @media (max-width: 768px) {

        }
    }
}
</style>