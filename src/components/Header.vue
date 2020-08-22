<template>
    <div class="header">
        <div class="logo">
            Rohit Jethoe
        </div>
        <div class="nav">
            <ul>
                <li>
                    <a href="#projects">
                        projects <div class="rect"></div>
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        experience <div class="rect"></div>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        about <div class="rect"></div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="burger-icon" @click="openNavByIcon">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
            <div class="bar bar-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        openNavByIcon() {
            const nav = document.querySelector('.header');
            if (!nav.classList.contains('opened')) {
                nav.classList.add('opened');
            } else {
                nav.classList.remove('opened');
            }
        }
    }
}
</script>

<style>
    .header {
        display: fixed;
        top: 0;
    }

    .logo {
        float: left;
        font-size: 24px;
        margin-top: 5px;
        margin-left: 10px;
    }

    .nav {
        float: right;
        margin-top: 10px;
        margin-right: 10px;
    }

    .nav ul li {
        display: inline;
        list-style-type: none;
        padding-left: 24px;
    }

    .nav a:link, .nav a:visited {
        color: #000;
        text-decoration: none;
        font-weight: 300;
    }

    .rect {
        display: none;
    }

    .burger-icon {
        display: none;
    }

    .burger-icon .bar {
        transition: 0.2s all;
    }

    .burger-icon:hover {
        cursor: pointer;
    }

    .burger-icon .bar {
        width: 26px;
        height: 3px;
        background-color: #000;
        margin-bottom: 5px;
    }

    @media only screen and (min-width: 1000px) {
        .logo {
            font-size: 32px;
        }
        .nav {
            margin-top: 15px;
            margin-right: 15px;
        }

        .nav ul li {
            padding-left: 37px;
        }
    }

    @media only screen and (max-width: 600px) {
        .nav {
            display: none;
            float: none;
            position: absolute;
            top: 37px;
            padding-left: 10px;
            background-color: rgba(255,255,255, 0.8);
        }

        .opened .nav {
            display: block;
        }

        .nav .rect {
            margin-left: 10px;
            transition: 0.3s all;
        }

        .nav a:hover .rect {
            width: 40px;
            height: 3px;
            background-color: #3a3a3a;
            transform: translateY(5px);
        }

        .nav ul li {
            display: block;
            padding: 0px;
            margin-top: 5px;
        }

        .nav a:link, .nav a:visited {
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 300;
            color: #3a3a3a;
        }

        .burger-icon {
            display: block;
            float: right;
            margin-top: 13px;
            margin-right: 10px;
        }

        .opened .bar-1 {
            transform: translateY(8px);
        }

        .opened .bar-3 {
            transform: translateY(-8px);
        }
    }

    .header::after {
        clear: both;
        content: "";
        display: table;
    }
</style>