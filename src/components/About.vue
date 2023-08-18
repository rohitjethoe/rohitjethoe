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
                    <div class="about__column--list">
                        Websites & Web Applications <br>
                        iOS & Android Apps <br>
                        Desktop Apps <br>
                        CMS Implementation <br>
                        Content Strategy <br>
                    </div>
                    <p>
                        Languages & Tools
                    </p>
                    <div class="about__column--list">
                        JavaScript, Vue, Node.js, React, PHP, SQL, CraftCMS, Twig, Tailwind, Sass, Docker, Vite, Git and Figma.
                    </div>
                </div>
            </div>

            <div class="about__column col-offset-6 col-9">
                <div class="about__column--title">
                    Experiences & Degrees
                </div>
                <div class="about__column--content">
                    <div class="about__row">
                        <div class="about__date">
                            May 2023 - Present 
                        </div>
                        <div class="about__details">
                            <p>Fullstack Developer · Relay</p>
                            <span>Developed and styled interactive web apps at Relay/Monostatic, including their websites. Also developed for many wonderful clients such as VirtuFit and Hodl Finance.</span>
                        </div>
                    </div>
                    <div class="about__row">
                        <div class="about__date">
                            Sep 2022 - Present 
                        </div>
                        <div class="about__details">
                            <p>VWO (Pre-University Education) · Vellesan</p>
                           
                        </div>
                    </div>
                    <div class="about__row">
                        <div class="about__date">
                            Sep 2020 - Jun 2022 
                        </div>
                        <div class="about__details">
                            <p>HAVO (Higher General Continued Education) · Vellesan</p>
                        </div>
                    </div>
                    <div class="about__row">
                        <div class="about__date">
                            Sep 2017 - Jun 2020 
                        </div>
                        <div class="about__details">
                            <p>MAVO (General Secondary Education)  · Vellesan</p>
                        </div>
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
            padding-bottom: math-clamp(30);
        }
        &--content {
            p {
                padding-bottom: math-clamp(10);
            }
        }
        &--list {
            color: #686868;
            line-height: math-clamp(21);
            padding-bottom: math-clamp(30);
        }
    }
    &__row {
        display: flex;
        justify-content: space-between;
    }
    &__date {
        text-transform: uppercase;
        font-weight: 500;
    }
    &__details {
        width: math-clamp(435);
        padding-bottom: math-clamp(12);
        p {
            font-weight: 500;
            color: $primaryColor;
        }
        span {
            color: $primaryColor;
        }
    }
}
</style>