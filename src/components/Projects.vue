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
                        Corona Counter gathers and shows data about the coronavirus (COVID-19).
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
                        ProfileGrabber allows you to view IG profile pictures. 
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
.section {
  margin-top: 60px;
}

.section .section-title {
  text-transform: uppercase;
  font-weight: 600;
  color: #818587;
  margin-left: 7.5%;
}

.project {
    margin-top: 20px;
    margin-bottom: 60px;
}

.project img {
    width: 300px;
    display: block;
    margin-left: 7.5%;
}

.project-details {
    width: 84%;
    margin-left: 7.5%;
    margin-top: 40px;
}

.project-title {
    font-size: 24px;
    font-weight: 600;
    color: #1B1919;
}

.project-details {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #585858;
    width: 300px;
    font-size: 14px;
}

.project-url {
    margin: 2px 0px;
}

.project-url a:link, .project-url a:visited {
    color: #b2b2fa;
}
</style>

