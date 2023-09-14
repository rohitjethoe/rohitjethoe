<template>
    <footer id="footer" class="footer">
        <div class="container grid">
            <div class="footer__content col-15 sm:col-7">
                <div class="footer__heading">
                    LET’S TALK <br>
                    ABOUT THE NEXT <br>
                    BIG THING. <br>
                </div>
                <div class="footer__copyright">
                    © {{ new Date().getFullYear() }} · Rohit Jethoe
                </div>
            </div>
            <div class="footer__map col-15 sm:col-2 sm:col-offset-13">
                <ul>
                    <li class="footer__map--title">
                        <span>Explore</span>
                    </li>
                    <li class="footer__map--link">
                        <a href="/">Work</a>
                    </li>
                    <li class="footer__map--link">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <ul>
                    <li class="footer__map--title">
                        <span>Socials</span>
                    </li>
                    <li class="footer__map--link">
                        <a href="https://linkedin.com/in/rohitjethoe" target="_blank">LinkedIn</a>
                    </li>
                    <li class="footer__map--link">
                        <a href="https://github.com/rohitjethoe" target="_blank">GitHub</a>
                    </li>
                    <li class="footer__map--link">
                        <a href="https://pinterest.com/ikbenrohit" target="_blank">Pinterest</a>
                    </li>
                </ul>
            </div>
            <div class="footer__scroll col-4 sm:col-16">
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
    name: "Footer",
    mounted() {
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
    background-color: #000;
    position: relative;
    font-family: 'Inter', sans-serif;
    color: #fff;
    padding-top: math-clamp(100);
    padding-bottom: math-clamp(50);
    @media (max-width: 768px) {
        padding-top: math-clamp(80);
        padding-bottom: math-clamp(30);
    }
    &__scroll {
        position: relative;
        width: 100%;
        height: math-clamp(100);
        margin-bottom: math-clamp(30);
        @media (max-width: 768px) {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0, math-clamp(-36));
        }
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
        @media (max-width: 768px) {
            width: math-clamp(80);
            height: math-clamp(80);
            right: math-clamp(48);
            img {
                width: math-clamp(12);
            }
        }
    }
    &__heading {
        font-size: math-clamp(48);
        font-weight: 700;
        line-height: math-clamp(59);
        letter-spacing: 0.02em;
        @media (max-width: 768px) {
            font-size: math-clamp(36);
            line-height: math-clamp(42);
        }
    }
    &__copyright {
        margin-top: math-clamp(20);
        font-size: math-clamp(16);
        @media (max-width: 768px) {
            margin-top: math-clamp(10);
        }
    }
    &__map {
        display: flex;
        gap: math-clamp(67);
        @media (max-width: 768px) {
            padding: math-clamp(30) 0;
        }
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