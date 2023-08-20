<template>
    <section class="project-details">
        <div class="container grid">
            <div class="project-details__title col-12">
                {{ title }}
            </div>
            <div class="project-details__description col-12">
                {{ description }} 
            </div>
            <div class="col-4"></div>
            <div class="project-details__disciplines col-4">
                <span>Team</span>
                <ul>
                    <li v-for="item in team">{{ item }}</li>
                </ul>
            </div>
            <div class="project-details__disciplines col-4">
                <span>Disciplines</span>
                <ul>
                    <li v-for="item in disciplines">{{ item }}</li>
                </ul>
            </div>
            <div class="project-details__tools col-4">
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
    &__title {
        font-size: math-clamp(24, 32);
    }
    &__description {
        letter-spacing: 0.02em;
        line-height: math-clamp(24, 32);
        padding: math-clamp(20, 26.666) 0;
    }
    &__disciplines, &__tools {
        span {
            font-weight: 500;
        }
        line-height: math-clamp(24, 32);
    }
}
</style>