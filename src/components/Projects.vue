<template>
    <div class="projects" id="projects">
        <div class="projects section">
            <div class="section-title">
                Featured Projects
            </div>
            <div class="project">
                <img src="@/assets/coronacounter.png" alt="Corona Counter">
                <div class="project-details">
                    <div class="project-title">
                        Corona Counter
                    </div>
                    <div class="project-description">
                        Corona Counter gathers and shows data about the coronavirus.
                    </div>
                    <div class="project-url">
                        <a href="https://rohit.nl/coronacounter/" target="_blank" rel="noopener"  noreferrer>
                            https://rohit.nl/coronacounter/
                        </a>
                    </div>
                </div>
            </div>
            <div class="project">
                <img src="@/assets/profilegrabber.png" alt="Profile Grabber">
                <div class="project-details">
                    <div class="project-title">
                        Profile Grabber
                    </div>
                    <div class="project-description">
                        ProfileGrabber allows you to download IG profile pictures. 
                    </div>
                    <div class="project-url">
                        <a href="https://profilegrabber.netlify.app/" target="_blank" rel="noopener"  noreferrer>
                            https://profilegrabber.netlify.app/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['image']
}
</script>

<style scoped>
    .section-title {
        font-weight: 600;
        color: #797d7f;
        text-transform: uppercase;
        margin-left: 7.5%;
        margin-bottom: 20px;
    }

    .project {
        margin-left: 7.5%;
        margin-bottom: 25px;
    }

    .project img {
        width: 300px;
    }

    .project-title {
        font-size: 24px;
        font-weight: 600;
        color: #1B1919;
    }

    .project-details {
        color: #585858;
        width: 300px;
        font-size: 14px;
    }

    .project a:link, .project a:visited {
        color: #b2b2fa;
    }

    @media only screen and (min-width: 395px) {
        .section-title {
            margin-left: 12.5%;
        }

        .project {
            margin-left: 12.5%;
        }
    }


    @media only screen and (min-width: 600px) {
        .project {
            margin-bottom: 60px;
        }

        .project img {
            width: 400px;
        }

        .project-title {
            font-size: 28px;
        }

        .project-details {
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 800px) {
        .section-title {
            margin-left: 12%;
        }

        .project {
            margin-left: 12%;
            display: flex;
            align-items: center;
        }

        .project img {
            width: 340px;
        }

        .project-details {
            margin-left: 40px;
        }
    }

    @media only screen and (min-width: 1000px) {
        .section-title {
            font-size: 18px;
        }

        .project img {
            width: 400px;
        }
        
        .project-title {
            font-size: 32px;
        }

        .project-details {
            font-size: 18px;
            margin-left: 50px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .project img {
            width: 500px;
        }
    }
</style>

