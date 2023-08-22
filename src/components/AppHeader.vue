<template>
    <header id="header" class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <a class="header__logo--link" href="/">
                        Rohit Jethoe
                    </a>
                </div>
                <div class="header__nav">
                    <div class="header__burger-icon" :class="navOpened ? 'header__burger-icon--opened' : ''" @click="navHandler()">
                        <div class="header__bar header__bar--top"></div>
                        <div class="header__bar header__bar--bottom"></div>
                    </div>
                    <ul>
                        <li>
                            <router-link to="/">
                                Work
                                <div></div>
                            </router-link>
                        </li>
                        <li >
                            <router-link to="/contact">
                                Contact
                                <div></div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="header__mobile" :class="navOpened ? 'header__mobile--opened' : ''">
                    <ul>
                        <li>
                            <router-link @click="navHandler()" to="/">
                                Work
                                <div></div>
                            </router-link>
                        </li>
                        <li >
                            <router-link @click="navHandler()" to="/contact">
                                Contact
                                <div></div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            navOpened: false
        }
    },
    methods: {
        navHandler: function () {
            if (!this.navOpened) {
                this.navOpened = true;
                document.body.style.overflow = 'hidden';
            } else {
                this.navOpened = false;
                document.body.style.overflow = 'auto';
            }
        }
    },
    mounted() {
        const links = document.querySelectorAll('li');
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
.header {
    font-family: $primaryFont;
    padding-top: math-clamp(60, 80);  
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
    }
    @media (max-width: 768px) {
        padding-top: math-clamp(16);
    }
    &__burger-icon {
        @media (min-width: 768px) {
            display: none;
        }
    }
    &__logo {
        position: relative;
        z-index: 40;
        &--link {
            background-color: transparent;
            font-size: math-clamp(18);
            color: $primaryColor;
            text-decoration: none;
        }
    }
    &__nav {
        position: relative;
        z-index: 40;
        ul {
            display: flex;
            gap: math-clamp(30);
            @media (max-width: 768px) {
                display: none;
            }
            li {
                position: relative;
                a:link, a:visited {
                    color: $primaryColor;
                    text-decoration: none;
                    font-weight: 500;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    gap: math-clamp(10);
                    div {
                        width: math-clamp(6);
                        height: math-clamp(6);
                        background-color: $secondaryColor;
                        border-radius: 100%;
                        opacity: 0;
                    }
                }
                .router-link-active:link, .router-link-active:visited {
                    div {
                        opacity: 1;
                    }
                }
            }
        }
    }
    &__burger-icon {
        &:hover {
            cursor: pointer;
        }
        &--opened {
            .header__bar {
                &--top {
                    transform: translateY(math-clamp(-3));
                }
                &--bottom {
                    transform: translateY(math-clamp(3));
                }
            }
        }
    }
    &__bar {
        width: 54px;
        height: 1px;
        background-color: $primaryColor;
        transition: 0.25s all;
        margin: math-clamp(6) 0;
    }
    &__mobile {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.5);
        // border-radius: 32px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 48px 8px;
        z-index: 30;
        transition: 0.25s opacity;
        pointer-events: none;
        padding-top: 50%;
        ul {
            // text-align: center;
            padding-left: math-clamp(16);
            li {
                padding: math-clamp(12) 0;
                a:link, a:visited {
                    color: $primaryColor;
                    text-decoration: none;
                    font-weight: 300;
                    font-size: math-clamp(40);
                    display: flex; 
                    align-items: center;
                    gap: math-clamp(24);
                    div {
                        width: math-clamp(8);
                        height: math-clamp(8);
                        background-color: $secondaryColor;
                        border-radius: 100%;
                        opacity: 0;
                    }
                }
                .router-link-active:link, .router-link-active:visited {
                    div {
                        opacity: 1;
                    }
                }
            }
        }
        &--opened {
            opacity: 1;
            pointer-events: all;
            @media (max-width: 768px) {
                display: block;
            }
        }
    }
}
</style>