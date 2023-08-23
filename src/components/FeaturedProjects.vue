<template>
    <section class="featured-projects">
        <div class="container grid">
            <div class="featured-projects__heading col-16">
                Discover more projects
            </div>
            <div class="featured-projects__project col-16 sm:col-6 sm:col-offset-0">
                <a :href="featuredProjects[0].link">
                    <img :src="featuredProjects[0].path" alt="">
                    <div class="featured-projects__project--title">
                        {{ featuredProjects[0].title }}
                    </div>
                </a>
            </div>
            <div class="featured-projects__project col-16 sm:col-6 sm:col-offset-6">
                <a :href="featuredProjects[1].link">
                    <img :src="featuredProjects[1].path" alt="">
                    <div class="featured-projects__project--title">
                        {{ featuredProjects[1].title }}
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FeaturedProjects",
    mounted() {
        const links = document.querySelectorAll('a');
        const cursor = document.querySelector('.cursor');

        links.forEach((link) => {
            link.addEventListener('mouseover', () => {
                cursor.style.height = '36px';
                cursor.style.width = '36px';
            })

            link.addEventListener('mouseleave', () => {
                cursor.style.height = '18px';
                cursor.style.width = '18px';
            })
        })
    },
    props: {
        featuredProjects: Array
    }
}
</script>

<style lang="scss" scoped>
.featured-projects {
    font-family: 'Inter', sans-serif;
    padding: math-clamp(60) 0;
    @media (max-width: 768px) {
        padding: math-clamp(30) 0;
    }
    &__heading {
        font-size: math-clamp(48);
        font-weight: 300;
        padding: math-clamp(56) 0;
        @media (max-width: 768px) {
            font-size: math-clamp(24);
            padding: math-clamp(20) 0;
        }
    }
    &__project {
        a:link, a:visited {
            color: $primaryColor;
            text-decoration: none;
        }
        img {
            width: 100%;
            height: auto;
        }
        &--title {
            padding: math-clamp(12) 0;
        }
    }
}
</style>