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
                    <div class="header__burger-icon">
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
                        <li>
                            <a href="#footer">
                                Contact
                                <div></div>
                            </a>
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
        z-index: 20;
        &--link {
            background-color: transparent;
            font-size: math-clamp(18);
            color: $primaryColor;
            text-decoration: none;
        }
    }
    &__nav {
        position: relative;
        z-index: 20;
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
    &__bar {
        width: 54px;
        height: 1px;
        background-color: $primaryColor;
        margin: math-clamp(6) 0;
    }
}
</style>