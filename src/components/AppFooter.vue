<template>
    <footer class="footer">
        <div class="container grid">
            <div class="footer__title col-14 col-offset-1 sm:col-16">
                LET’S TALK <br>
                ABOUT THE NEXT <br>
                BIG THING. <br>
            </div>
            <div class="footer__mail col-14 col-offset-1 sm:col-16">
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
            bearer: null,
            playing: null
        }
    },
    methods: {
        getSpotifyPlaying: function (bearer) {
            return fetch(`${import.meta.env.VITE_API_ENDPOINT}/me/player/currently-playing`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearer.access_token}`
                }
            })        
        }
    },
    mounted() {
        fetch(`${import.meta.env.VITE_TOKEN_ENDPOINT}/api/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: import.meta.env.VITE_REFRESH_TOKEN
            }).toString()
        })
        .then(async (res) => {
            const bearer = await res.json();
            this.getSpotifyPlaying(bearer)
            .then(async (res) => {
                this.playing = await res.json();
                console.log(res);
            })
            .catch((err) => {
                if (err) {
                    this.playing = null;
                }
            })
        })
        .catch((err) => {
            if (err) {
                this.playing = null;
            }
        })

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

<style lang="scss" scoped>
.footer {
    font-family: 'Inter', sans-serif;
    margin-top: math-clamp(240);
    background-color: $primaryColor;
    padding-top: math-clamp(120);
    padding-bottom: math-clamp(96);
    @media (max-width: 768px) {
        margin-top: math-clamp(60);
        padding: math-clamp(80) 0;
    }
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