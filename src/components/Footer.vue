<script setup>
import { onMounted, ref } from 'vue';

const playingNowData = ref(null);

onMounted(() => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;
    const TOKEN_ENDPOINT = import.meta.env.TOKEN_ENDPOINT;

    const getAuthToken = async () => {
        let response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(clientId)
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refresh_token
            }).toString()
        });

        let data = await response.json();
        return data.access_token;
    }

    const getPlayingNow = async (bearer) => {
        try {
            let response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearer}`
                }
            });

            const result = await response.json();
            console.log(result);

            return result;
        } catch(err) {
            return null;
        }
    }

    (async() => {
        let bearer = await getAuthToken();
        playingNowData.value = await getPlayingNow(bearer);
        
        if (playingNowData.value !== null) {
            document.querySelector('.qa-footer__song').innerHTML = await playingNowData.value.item.name;
            document.querySelector('.qa-footer__artist').innerHTML = await playingNowData.value.item.artists[0].name;
            document.querySelector('.qa-footer__link').href = await playingNowData.value.item.external_urls.spotify;
        } else {
            document.querySelector('.qa-footer__song').innerHTML = 'not playing currently...';
            document.querySelector('.qa-footer__artist').innerHTML = '';
            document.querySelector('.qa-footer__divider').innerHTML = '';
        }
    })();
})
</script>

<template>
    <footer class="qa-footer">
        <div class="qa-container">
            <div class="qa-footer__slug">
                LET’S TALK<br />
                ABOUT THE NEXT<br />
                BIG THING.
            </div>
            <div class="qa-footer__socials">

            </div>
        </div>
        <div class="qa-container qa-footer__bottom">
            <div class="qa-footer__copyright">
                © 2024 - Rohit Jethoe
            </div>
            <div class="qa-footer__spotify">
                <a class="qa-footer__link" href="https://spotify.com/rohitjethoe" target="_blank">
                    <img class="qa-footer__icon" src="@/assets/spotify.svg" alt="spotify"/>
                    <span class="qa-footer__song">Cry</span> <span class="qa-footer__divider">-</span> <span class="qa-footer__artist">Cigarettes after Sex</span>
                </a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.qa-footer {
    $f: &;

    font-family: "Projekt Blackbird";
    background-color: #000;
    color: #fff;
    padding-top: math-clamp(48, 64);
    margin-top: math-clamp(120, 160);

    .qa-container {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: $sm) {
        padding-top: math-clamp(20);
    }

    &__bottom {
        padding-top: math-clamp(164, 218.666);
        @media (max-width: $sm) {
            padding-top: math-clamp(60);
            flex-direction: column-reverse;
            gap: 20px;
        }
    }

    &__slug {
        font-size: math-clamp(64, 85.333);

        @media (max-width: $sm) {
            font-size: math-clamp(32);
        }
    }

    &__copyright {
        font-size: math-clamp(19, 25.333);

        @media (max-width: $sm) {
            font-size: math-clamp(14);
        }
    }

    &__link {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: math-clamp(12, 16);
        font-size: math-clamp(19, 25.333);

        @media (max-width: $sm) {
            font-size: math-clamp(14);
            gap: math-clamp(6);
        }
    }

    &__icon {
        transform: translateY(math-clamp(-1, -1.333));
        @media (max-width: $sm) {
            width: math-clamp(14);
            height: auto;
        }
    }
}
</style>