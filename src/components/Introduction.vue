<template>
    <div class="introduction">
        <div class="short-intro">
            Hello! 👋 <br>
            I am Rohit Jethoe, <br>
            a <span class="short-intro-bgcolor">@{{ typeOfDeveloper }}</span> developer. <br>
        </div>
        <div class="contact">
             Do you have any project ideas? Let's have a talk together <a href="mailto:info@rohit.nl">info@rohit.nl</a> 
        </div>
        <div class="arrow">
            <i class="fa fa-chevron-down"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Introduction",
    data() {
        return {
            typeOfDeveloper: 'javascript',
            typeOfDevIndex: 0
        }
    },
    mounted() {
        const typeOfDeveloper = ['front end', 'vue.js', 'node.js', 'back end', 'php/mysql', 'automation', 'full stack'];

        setInterval(() => {
            if (this.typeOfDevIndex < typeOfDeveloper.length) {
                this.typeOfDeveloper = typeOfDeveloper[this.typeOfDevIndex];
                this.typeOfDevIndex++;
            } else {
                clearInterval();
            }
        }, 150);
    }
}
</script>

<style>
    .introduction {
        margin-top: 60px;
        margin-left: 10%;
    }

    .short-intro {
        font-size: 28px;
        font-weight: 600;
    }

    .contact {
        font-size: 12px;
        width: 80%;
    }

    .contact a:link, .contact a:visited {
        color: #b2b2fa;
    }

    @media only screen and (min-width: 800px) {
        .contact {
            font-size: 14px;
        }
    }

    @media only screen and (min-width: 1000px) {
        .contact {
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .contact {
            font-size: 18px;
        }
    }

    .short-intro-bgcolor {
        background-color: #b2b2fa;
        padding: 1px 2px; 
    }

    .arrow {
        margin: 12.5% 0px;
    }

    .arrow .fa {
        font-size: 20px;
    }

    @media only screen and (min-width: 800px) {
        .arrow .fa {
            font-size: 24px;
        }

        .arrow {
            margin: 7.5% 0px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .introduction {
            margin-top: 100px;
            margin-left: 12%;
        }
        .short-intro {
            font-size: 52px;
        }
    }

    @media only screen and (max-width: 1200px) {
        .introduction {
            margin-top: 80px;
            margin-left: 12%;
        }
        .short-intro {
            font-size: 48px;
        }
    }

    @media only screen and (max-width: 1000px) {
        .introduction {
            margin-top: 60px;
        }
        .short-intro {
            font-size: 38px;
        }
    }

    @media only screen and (max-width: 800px) {
        .introduction {
            margin-left: 12%;
        }

        .short-intro {
            font-size: 36px;
        }
    }

    @media only screen and (min-width: 500px) and (max-width: 600px) {
        .short-intro {
            font-size: 30px;
        }
    }

    @media only screen and (max-width: 500px) {
        .short-intro {
            font-size: 27px;
        }
    }

    @media only screen and (max-width: 395px) {
        .introduction {
            margin-left: 7.6%;
        }
    }
</style>