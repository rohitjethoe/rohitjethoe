<script setup>
import { onMounted, ref } from 'vue';

const playingNowData = ref(null);

onMounted(() => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;
    const TOKEN_ENDPOINT = import.meta.env.TOKEN_ENDPOINT;

    const getAuthToken = async () => {
        let response = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`d39a4a65f68849c792163cb28588b585:e133cd0cb2914c26ba642744f9dfdb21`)
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: 'AQDPWIm3XwP8JhRQKDVjXeI44zM2tse16DddlKqD4pJm_bPHeztriPFoA7n1NzI6uqf6-5OWf_T_Tvjb1_P8qsGgVYynbnY64mZLxaoDKqZVfmji5l0jX8gbz4HAdpq8IHU'
            }).toString()
        });

        let data = await response.json();
        return data.access_token;
    }

    const getPlayingNow = async (bearer) => {
        let response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearer}`
            }
        });

        try {
            const result = await response.json();
            return result;
        } catch(err) {
            return null;
        }
    }

    const getPlayingCalls = async () => {
        let bearer = await getAuthToken();
        playingNowData.value = await getPlayingNow(bearer);
        
        if (playingNowData.value !== null) {
            document.querySelector('.qa-footer__song').innerHTML = await playingNowData.value.item.name;
            document.querySelector('.qa-footer__artist').innerHTML = await playingNowData.value.item.artists[0].name;
            document.querySelector('.qa-footer__divider').innerHTML = '-';
            document.querySelector('.qa-footer__link').href = await playingNowData.value.item.external_urls.spotify;
        } else {
            document.querySelector('.qa-footer__song').innerHTML = 'Currently Not Playing...';
            document.querySelector('.qa-footer__artist').innerHTML = '';
            document.querySelector('.qa-footer__divider').innerHTML = '';
        }
    }

    (async() => {
        await getPlayingCalls();
    })();
    
    setInterval(async () => {
        await getPlayingCalls();
    }, 10000);
})
</script>

<template>
    <footer class="qa-footer">
        <div class="qa-container">
            <div class="qa-footer__slug">
                <div class="qa-footer__spotify">
                    <a class="qa-footer__link" href="https://open.spotify.com/user/rohitftw" target="_blank">
                        <svg class="qa-footer__icon" width="20" height="20" viewBox="0 0 534 534" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M424.741 236.739C338.783 185.69 196.998 180.997 114.94 205.902C101.76 209.899 87.8267 202.462 83.8359 189.284C79.8428 176.099 87.2726 162.173 100.458 158.168C194.658 129.576 351.243 135.097 450.2 193.838C462.055 200.877 465.938 216.183 458.915 228.014C451.884 239.867 436.563 243.777 424.739 236.739M421.925 312.346C415.895 322.133 403.099 325.202 393.326 319.193C321.667 275.144 212.388 262.381 127.605 288.117C116.612 291.437 104.998 285.241 101.659 274.265C100.068 268.988 100.633 263.296 103.232 258.436C105.831 253.576 110.251 249.945 115.523 248.338C212.374 218.946 332.777 233.18 415.086 283.763C424.858 289.781 427.934 302.582 421.925 312.346ZM389.295 384.958C388.159 386.823 386.667 388.447 384.903 389.735C383.139 391.023 381.138 391.95 379.016 392.464C376.893 392.978 374.69 393.068 372.532 392.729C370.374 392.39 368.305 391.629 366.442 390.489C303.822 352.217 225.003 343.574 132.179 364.777C130.052 365.264 127.85 365.326 125.699 364.961C123.548 364.597 121.49 363.812 119.642 362.651C117.794 361.491 116.193 359.978 114.931 358.199C113.668 356.419 112.768 354.409 112.282 352.282C111.793 350.154 111.729 347.951 112.092 345.798C112.456 343.646 113.241 341.586 114.402 339.737C115.563 337.888 117.077 336.287 118.858 335.024C120.639 333.761 122.651 332.862 124.78 332.378C226.359 309.16 313.492 319.152 383.78 362.102C385.644 363.24 387.264 364.735 388.55 366.499C389.836 368.264 390.761 370.265 391.274 372.387C391.786 374.51 391.875 376.712 391.536 378.869C391.197 381.026 390.434 383.095 389.295 384.958ZM266.995 0.333313C119.726 0.333313 0.333313 119.722 0.333313 266.995C0.333313 414.283 119.726 533.667 266.998 533.667C414.276 533.667 533.667 414.283 533.667 266.995C533.667 119.724 414.276 0.333313 266.995 0.333313Z" fill="#1ED660"/>
                        </svg>
                        <span class="qa-footer__song">Cry</span> <span class="qa-footer__divider">-</span> <span class="qa-footer__artist">Cigarettes After Sex</span>
                    </a>
                </div>
                LET’S TALK<br />
                ABOUT THE NEXT<br />
                BIG THING.
            </div>
            <div class="qa-footer__socials">
                <div class="qa-footer__heading">
                    Socials
                </div>
                <ul class="qa-footer__list">
                    <li class="qa-footer__item">
                        <a href="https://github.com/rohitjethoe" target="_blank">Github</a>
                    </li>
                    <li class="qa-footer__item">
                        <a href="https://www.linkedin.com/company/rohitjethoe/" target="_blank">LinkedIn</a>
                    </li>
                    <li class="qa-footer__item">
                        <a href="mailto:rohitjethoe@proton.me" target="_blank">E-mail</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="qa-container qa-footer__bottom">
            <div class="qa-footer__meta">
                <div class="qa-footer__copyright">
                    © {{ new Date().getFullYear() }} - Rohit Jethoe
                </div>
            </div>
            <div class="qa-footer__impressum">
                <div>
                    <a class="qa-footer__link" href="/terms">Terms & Privacy</a>
                </div>
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

    .qa-container {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: $sm) {
        padding-top: math-clamp(20);
    }

    &__bottom {
        flex-direction: row;
        padding-top: math-clamp(164, 218.666);
        align-items: end;
        font-size: math-clamp(19, 25.333);

        @media (max-width: $sm) {
            font-size: math-clamp(14);
            padding-top: math-clamp(128);
            flex-direction: row;
            gap: 20px;
        }
    }

    &__slug {
        font-size: math-clamp(64, 85.333);

        @media (max-width: $sm) {
            font-size: math-clamp(37);
        }
    }

    &__heading {
        padding-bottom: math-clamp(42, 56);
        font-size: math-clamp(16, 21.333);
        text-align: right;

        @media (max-width: $sm) {
            padding-bottom: math-clamp(24);
            font-size: math-clamp(14);
        }
    }

    &__item {
        padding: math-clamp(6, 8) 0;
        text-align: right;
        @media (max-width: $sm) {
            padding: math-clamp(4) 0;
        }
        a:link, a:visited {
            color: #fff;
            font-size: math-clamp(19, 25.333);
            text-decoration: none;

            @media (max-width: $sm) {
                font-size: math-clamp(17);
            }
        }
    }

    &__spotify {
        padding-bottom: math-clamp(42, 56);
        @media (max-width: $sm) {
            padding-bottom: math-clamp(24);
        }
    }

    &__copyright {
        font-size: math-clamp(19, 25.333);

        @media (max-width: $sm) {
            font-size: math-clamp(14);
        }
    }

    &__meta {
        display: flex;
        flex-direction: column-reverse;
        gap: math-clamp(16, 21.333);

        @media (max-width: $sm) {
            gap: math-clamp(10);
        }
    }

    &__link {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: end;
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

    &__impressum {
        display: flex;
        flex-direction: column;
        text-align: right;
        gap: math-clamp(12, 16);
        font-size: math-clamp(19, 25.333);

        @media (max-width: $sm) {
            gap: math-clamp(10);
            font-size: math-clamp(14);
        }
    }
}
</style>