<template>
    <section class="about">
        <div class="container grid">
            <div class="about__heading col-16">
                <span>Capabilities</span><br>
                And Degrees
            </div>
            <div class="about__column col-14 sm:col-4">
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
                        JavaScript, Vue, Node.js, React, PHP, SQL, CraftCMS, Twig, Tailwind, SCSS, Docker, Vite, Git and Figma.
                    </div>
                </div>
            </div>

            <div class="about__column col-16 sm:col-offset-6 sm:col-9">
                <div class="about__column--title">
                    Experiences & Degrees
                </div>
                <div class="about__column--content">
                    <div class="about__row">
                        <div class="about__date">
                            <span>May</span> 2023 - <span>Present</span> 
                        </div>
                        <div class="about__details">
                            <p>
                                <a href="https://www.monostatic.com" target="_blank">
                                    Fullstack Developer · Monostatic
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.85103 0.973656C6.83651 0.697896 6.6012 0.486113 6.32544 0.500627L1.83166 0.737142C1.5559 0.751656 1.34411 0.98697 1.35863 1.26273C1.37314 1.53849 1.60846 1.75027 1.88422 1.73576L5.87869 1.52552L6.08892 5.52C6.10344 5.79576 6.33875 6.00754 6.61451 5.99303C6.89027 5.97851 7.10206 5.7432 7.08754 5.46744L6.85103 0.973656ZM1.37165 7.28077L6.72337 1.33442L5.98007 0.665454L0.628353 6.61181L1.37165 7.28077Z" fill="black"/>
                                    </svg> 
                                </a>
                            </p>
                            <span class="about__details--description">Developed and styled interactive web apps at Relay/Monostatic, including their websites. Also developed for many wonderful clients such as VirtuFit, Hodl Finance and Green Future.</span>
                        </div>
                    </div>
                    <div class="about__row">
                        <div class="about__date">
                            <span>Sep</span> 2022 - <span>Present</span> 
                        </div>
                        <div class="about__details">
                            <p>VWO <span>(Pre-University Education)</span> · Vellesan</p>
                           
                        </div>
                    </div>
                    <div class="about__row">
                        <div class="about__date">
                            <span>Sep</span> 2020 - <span>Jun</span> 2022 
                        </div>
                        <div class="about__details">
                            <p>HAVO <span>(Higher General Continued Education)</span> · Vellesan</p>
                        </div>
                    </div>
                    <div class="about__row">
                        <div class="about__date">
                            <span>Sep</span> 2017 - <span>Jun</span> 2020
                        </div>
                        <div class="about__details">
                            <p>MAVO <span>(General Secondary Education)</span>  · Vellesan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
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
    }
}
</script>

<style lang="scss">
.about {
    font-family: 'Inter', sans-serif;
    margin-top: math-clamp(30);
    @media (max-width: 768px) {
        padding-bottom: math-clamp(30);
    }
    &__heading {
        font-size: math-clamp(48);
        font-weight: 300;
        line-height: math-clamp(60);
        @media (max-width: 768px) {
            font-size: math-clamp(24);
            line-height: math-clamp(32);
        }
        span {
            color: #686868;
        }
    }
    &__column {
        font-weight: 300;
        margin-top: math-clamp(80);
        @media (max-width: 768px) {
            margin-top: math-clamp(20);
        }
        &--title {
            color: $primaryColor;
            font-size: math-clamp(24);
            padding-bottom: math-clamp(30);
            @media (max-width: 768px) {
                font-size: math-clamp(20);
                padding-bottom: math-clamp(16);
            }
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
        @media (max-width: 768px) {
            span {
                display: none;
            }
            span.about__details--description {
                display: block;
            }
        }
    }
    &__date {
        text-transform: uppercase;
        font-weight: 500;
        @media (max-width: 768px) {
            width: 30vw;
        }
    }
    &__details {
        width: math-clamp(435);
        padding-bottom: math-clamp(12);
        @media (max-width: 768px) {
            width: 60vw;
        }
        p {
            font-weight: 500;
            color: $primaryColor;
            a:link, a:visited {
                display: flex;
                gap: math-clamp(8);
                color: $primaryColor;
                text-decoration: none;
                align-items: center;
            }
        }
        &--description {
            color: #686868;
            letter-spacing: 0.02em;
            line-height: math-clamp(20);
            @media (max-width: 768px) {
                display: block;
            }
        }
    }
}
</style>