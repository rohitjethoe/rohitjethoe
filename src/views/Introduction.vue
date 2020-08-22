<template>
    <div class="introduction">
        <div class="short-intro">
            Hello! 👋 <br>
            I am Rohit Jethoe, <br>
            a <span class="short-intro-bgcolor">@{{ typeOfDeveloper }}</span> developer.
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
        const typeOfDeveloper = ['front end', 'vue.js', 'node.js', 'back end', 'php/mysql', 'full stack'];

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
        margin-top: 40px;
        margin-left: 10%;
    }

    .short-intro {
        font-size: 28px;
        font-weight: 600;
    }

    .short-intro-bgcolor {
        background-color: #b2b2fa;
        padding: 1px 2px; 
    }

    @media only screen and (min-width: 1200px) {
        .introduction {
            margin-top: 80px;
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