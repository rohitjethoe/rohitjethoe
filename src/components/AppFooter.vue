<template>
    <footer id="footer" class="footer">
        <div class="container grid">
            <div class="footer__content col-7">
                <div class="footer__heading">
                    LET’S TALK <br>
                    ABOUT THE NEXT <br>
                    BIG THING. <br>
                </div>
                <div class="footer__copyright">
                    © {{ new Date().getFullYear() }} · Rohit Jethoe
                </div>
            </div>
            <div class="footer__map col-2 col-offset-13">
                <ul>
                    <li class="footer__map--title">
                        <span>Explore</span>
                    </li>
                    <li class="footer__map--link">
                        <a href="/">Work</a>
                    </li>
                    <li class="footer__map--link">
                        <a href="/about">About</a>
                    </li>
                </ul>
                <ul>
                    <li class="footer__map--title">
                        <span>Socials</span>
                    </li>
                    <li class="footer__map--link">
                        <a href="/">LinkedIn</a>
                    </li>
                    <li class="footer__map--link">
                        <a href="/about">Twitter</a>
                    </li>
                    <li class="footer__map--link">
                        <a href="/about">Mail</a>
                    </li>
                </ul>
            </div>
            <div class="footer__scroll col-16">
                <a href="#">
                    <div class="footer__circle">
                        <img src="../assets/arrow-2px.svg" alt="">
                    </div>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
    background-color: #000;
    font-family: "Inter", sans-serif;
    color: #fff;
    padding-top: math-clamp(100);
    padding-bottom: math-clamp(50);
    margin-top: math-clamp(120);
    &__scroll {
        position: relative;
        width: 100%;
        height: math-clamp(100);
        margin-bottom: math-clamp(30);
    }
    &__circle {
        position: absolute;
        width: math-clamp(100);
        height: math-clamp(100);
        background-color: $secondaryColor;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        z-index: 20;
    }
    &__heading {
        font-size: math-clamp(48);
        font-weight: 700;
        line-height: math-clamp(59);
        letter-spacing: 0.02em;
    }
    &__copyright {
        margin-top: math-clamp(20);
        font-size: math-clamp(16);
    }
    &__map {
        display: flex;
        gap: math-clamp(67);
        li {
            display: block;
            span {
                font-size: math-clamp(12);
            }
            a:link, a:visited {
                position: relative;
                z-index: 20;
                font-size: math-clamp(16);
                color: #fff;
                text-decoration: none;
            }
        }
        &--title {
            padding-bottom: math-clamp(12);
        }
        &--link {
            padding-bottom: math-clamp(8);
        }
    }
}
</style>