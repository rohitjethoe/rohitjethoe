<template>
    <section class="project-details">
        <div class="container grid">
            <div class="project-details__title col-16 sm:col-12">
                {{ title }}
            </div>
            <div class="project-details__description col-16 xs:col-12">
                {{ description }} 
            </div>
            <div class="project-details__breakerBlock col-4"></div>
            <div class="project-details__disciplines col-8 sm:col-4">
                <span>Team</span>
                <ul>
                    <li v-for="item in team">{{ item }}</li>
                </ul>
            </div>
            <div class="project-details__disciplines col-8 sm:col-4">
                <span>Disciplines</span>
                <ul>
                    <li v-for="item in disciplines">{{ item }}</li>
                </ul>
            </div>
            <div class="project-details__tools col-12 sm:col-4">
                <span>Tools</span>
                <ul>
                    <li v-for="item in tools">{{ item }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProjectDetails",
    props: {
        title: String,
        description: String,
        tools: Array,
        disciplines: Array,
        team: Array
    }
}
</script>

<style lang="scss" scoped>
.project-details {
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.02em;
    font-weight: 300;
    &__title {
        font-size: math-clamp(24, 32);
    }
    &__description {
        letter-spacing: 0.02em;
        line-height: math-clamp(24, 32);
        padding: math-clamp(20, 26.666) 0;
        @media (max-width: 768px) {
            padding: math-clamp(10) 0;
        }
    }
    &__disciplines, &__tools {
        span {
            font-weight: 500;
        }
        line-height: math-clamp(24, 32);
    }
    &__breakerBlock {
        @media (max-width: 768px) {
            display: none;
        }
    }
}
</style>