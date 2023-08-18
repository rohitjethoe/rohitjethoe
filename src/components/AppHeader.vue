<template>
    <header class="header">
        <div class="header__logo">
            <a class="header__logo--link" href="/">
                Rohit Jethoe
            </a>
        </div>
        <div class="header__nav">
            <ul>
                <li>
                    <router-link to="/">
                        Work
                        <div></div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        Contact
                        <div></div>
                    </router-link>
                </li>
            </ul>
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
    padding: 0 math-clamp(126);
    padding-top: math-clamp(60);  
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    @media (max-width: 768px) {
        padding: 0 math-clamp(16);
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
}
</style>