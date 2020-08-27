<template>
    <div class="about section" id="about">
        <div class="section-title">
            About me
        </div>
        <div class="about-me">
            <span class="about-me-title">🙋‍♂️ Hey! Nice to meet you.</span> <br> 
            I'm Rohit Jethoe and I am a 16 y/o Software Developer for web, mobile and desktop applications. <br> <br>
            I also am interested in web scraping/automation projects such as a automated <a href="https://github.com/rohitjethoe/likesniper" target="_blank" rel="noopener" noreferrer>Instagram like bot</a> or a <a href="https://nieuws.netlify.app" target="_blank" rel="noopener" noreferrer>news scraper</a>. <br> <br>
            I contribute to lots of Open Source projects on Github including the corona notification app website of the dutch government.
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
    .section {
        margin-top: 10%;
    }

    .section-title {
        font-weight: 600;
        text-transform: uppercase;
        color: #797d7f;
        margin-bottom: 20px;
    }

    .about-me {
        color: #414141;
        width: 80vw;
    }

    .about-me a:link, .about-me a:visited {
        color: #b2b2fa;
    }

    .about-me-title {
        font-size: 24px;
        color: #000;
    }

    @media only screen and (min-width: 1000px) {
        .section {
            margin-left: 12.5%;
            margin-bottom: 5%;
        }

        .section-title {
            font-size: 18px;
        }

        .about-me {
            width: 480px;
            font-size: 18px;
        }

        .about-me-title {
            font-size: 28px;
        }
    }

    @media only screen and (max-width: 1000px) {
        .section {
            margin-left: 10%;
            margin-bottom: 5%;
        }
    }

    @media only screen and (min-width: 800px) and (max-width: 1000px) {
        .about-me {
            width: 450px;
        }
    }

    @media only screen and (max-width: 800px) {
        .section {
            margin-left: 12.5%;
            margin-bottom: 5%;
        }
    }


    @media only screen and (max-width: 600px) {
        .section {
            margin-left: 12.5%;
        }
    }

    @media only screen and (max-width: 395px) {
        .section {
            margin-left: 7.5%;
        }
    }
</style>