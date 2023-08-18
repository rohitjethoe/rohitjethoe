<template>
    <footer class="footer">
        <div class="container grid">
            <div class="footer__title col-16">
                LET’S TALK <br>
                ABOUT THE NEXT <br>
                BIG THING. <br>
            </div>
            <div class="footer__mail col-16">
                <a href="mailto:rohitjethoe@proton.me">rohitjethoe@proton.me</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",
    data() {
        return {
            response: null
        }
    },
    async mounted() {
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

        const clientId = "d39a4a65f68849c792163cb28588b585";
        const clientSecret = "e133cd0cb2914c26ba642744f9dfdb21";
        const refresh_token = "AQDPWIm3XwP8JhRQKDVjXeI44zM2tse16DddlKqD4pJm_bPHeztriPFoA7n1NzI6uqf6-5OWf_T_Tvjb1_P8qsGgVYynbnY64mZLxaoDKqZVfmji5l0jX8gbz4HAdpq8IHU";
        const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

        const getBearer = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`)
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refresh_token
            }).toString()
        });

        let bearer = await getBearer.json();

        const getCurrentlyPlaying = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearer.access_token}`
            }
        });

        const response = await getCurrentlyPlaying.json();
        console.log(response)
    }
}
</script>

<style lang="scss" scoped>
.footer {
    font-family: 'Inter', sans-serif;
    margin-top: math-clamp(240);
    background-color: $primaryColor;
    padding-top: math-clamp(120);
    padding-bottom: math-clamp(96);
    &__title {
        color: #fff;
        font-size: math-clamp(48);
        font-weight: 700;
    }
    &__mail {
        padding-top: math-clamp(72);
        padding-bottom: math-clamp(30);
        font-size: math-clamp(24);
        a:link, a:visited {
            color: #fff;
            font-weight: 300;
            text-decoration: underline;
        }
    }
}
</style>