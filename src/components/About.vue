<template>
    <section class="about">
        <div class="container grid">
            <div class="about__heading col-16">
                <span>Capabilities</span><br>
                And Degrees
            </div>
            <div class="about__column col-4">
                <div class="about__column--title">
                    Professional Expertises
                </div>
                <div class="about__column--content">
                    <p>
                        Engineering
                    </p>
                    <div>
                        Websites & Web Applications <br>
                        iOS & Android Apps <br>
                        Desktop Apps <br>
                        CMS Implementation <br>
                        Content Strategy <br>
                    </div>
                    <p>
                        Languages & Tools
                    </p>
                    <div>
                        JavaScript, Vue, Node.js, React, PHP, SQL, CraftCMS, Twig, Tailwind, Sass, Docker, Vite, Git and Figma.
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="scss">
.about {
    font-family: 'Inter', sans-serif;
    margin-top: math-clamp(30);
    &__heading {
        font-size: math-clamp(48);
        font-weight: 300;
        line-height: math-clamp(60);
        span {
            color: #686868;
        }
    }
    &__column {
        font-weight: 300;
        margin-top: math-clamp(80);
        &--title {
            color: $primaryColor;
            font-size: math-clamp(24);
            padding-bottom: math-clamp(20);
        }
        &--content {
            p {
                padding-bottom: math-clamp(10);
            }
            div {
                color: #686868;
                line-height: math-clamp(21);
                padding-bottom: math-clamp(30);
            }
        }
    }
}
</style>