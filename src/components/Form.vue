<template>
    <section class="form">
        <div class="grid">
            <div class="form__connect col-16 sm:col-3">
                <div class="form__heading">
                    Contact
                </div>
                <div class="form__mail">
                    <a href="mailto:rohitjethoe@proton.me">rohitjethoe@proton.me</a>
                </div>
                <div class="form__lists">
                    <div class="form__socials">
                        <div class="form__title">
                            Social
                        </div>
                        <div class="form__social">
                            <ul>
                                <li>
                                    <a href="https://github.com/rohitjethoe">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/rohitjethoe">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/rohitjethoe">Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="form__timezones">
                        <div class="form__title">
                            Timezone
                        </div>
                        <div class="form__timezone">
                            <ul>
                                <li>
                                    Amsterdam <span><span>{{ amsterdam.hours < 10 ? `0${amsterdam.hours}` : amsterdam.hours }}:{{ amsterdam.minutes < 10 ? `0${amsterdam.minutes}` : amsterdam.minutes }}</span></span>
                                </li>
                                <li>
                                    New York <span>{{ newYork.hours < 10 ? `0${newYork.hours}` : newYork.hours }}:{{ newYork.minutes < 10 ? `0${newYork.minutes}` : newYork.minutes }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form__contact col-16 sm:col-15 sm:col-offset-3">
                <div class="form__fields">
                    <div class="form__message">
                        <div class="form__title">
                            Bericht*
                        </div>
                        <textarea v-model="message" placeholder="Type your message in here...."></textarea>
                    </div>
                    <div class="form__details">
                        <input v-model="firstName" class="form__details--field form__details--firstname" placeholder="Firstname*" type="text">
                        <input v-model="lastName" class="form__details--field form__details--lastname" placeholder="Lastname*" type="text">
                        <input v-model="email" class="form__details--field form__details--email" placeholder="Email*" type="text">
                    </div>
                </div>
                <div class="form__image">
                    <img src="/amsterdam-map.webp" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            message: '',
            firstName: '',
            lastName: '',
            email: '',
            newYork: {
                hours: new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })).getHours(),
                minutes: new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })).getMinutes()
            },
            amsterdam: {
                hours: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })).getHours(),
                minutes: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })).getMinutes()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    font-family: 'Inter', sans-serif;
    padding: math-clamp(60) 0;
    padding-bottom: 0;
    padding-left: math-clamp(126, 126);
    @media (max-width: 768px) {
        padding: math-clamp(0);
        padding-left: math-clamp(0);
    }
    &__connect {
        @media (max-width: 768px) {
            padding-left: math-clamp(12);
            padding-bottom: math-clamp(0);
            padding-right: math-clamp(12);
        }
    }
    &__heading {
        font-size: math-clamp(40, 53.333);
        font-weight: 300;
        padding: math-clamp(60) 0 math-clamp(30) 0;
    }
    &__mail {
        padding-bottom: math-clamp(30);
        a:link, a:visited {
            color: #686868;
            text-decoration: none;
            font-weight: 300;
        }
    }
    &__title {
        font-size: math-clamp(20);
        font-weight: 300;
        padding-bottom: math-clamp(12);
    }
    &__lists {
        @media (max-width: 768px) {
            display: flex;
            // flex-flow: row-reverse;
            justify-content: start;
            gap: math-clamp(60);
        }
    }
    &__socials {
        padding-bottom: math-clamp(30);
    }
    &__socials, &__timezone {
        ul {
            li {
                font-weight: 300;
                padding: math-clamp(4) 0;
                span {
                    color: #686868;
                }
                a:link, a:visited {
                    color: #686868;
                    text-decoration: none;
                }
            }
        }
    }
    &__contact {
        background-color: #F0EBEB;
        position: relative;
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
            display: block;
        }
    }
    &__image {
        width: math-clamp(385);
        @media (max-width: 768px) {
            width: 100vw;
        }
        img {
            width: 100%;
        }
    }
    &__fields {
        padding: math-clamp(60);
        @media (max-width: 768px) {
            padding: math-clamp(60) math-clamp(12);
        }
    }
    &__message {
        width: math-clamp(547);
        height: math-clamp(439);
        @media (max-width: 768px) {
            width: 92%;
        }
        textarea {
            width: 100%;
            height: 86%;
            margin-top: math-clamp(4);
            background-color: #F0EBEB;
            border: none;
            font-family: 'Inter', sans-serif;
            font-size: math-clamp(36);
            font-weight: 300;
            resize: none;
            &:focus {
                border: none;
                outline: none;
            }
        }
    }
    &__details {
        &--field {
            border: none;
            background-color: #D9D9D9;
            font-size: math-clamp(18);
            font-weight: 200;
            padding: math-clamp(9) math-clamp(14);
            margin-right: math-clamp(10);
            margin-bottom: math-clamp(10);
            @media (max-width: 768px) {
                margin: 0;
                margin-right: math-clamp(10);
                margin-bottom: math-clamp(10);
            }
            &:focus {
                border: none;
                outline: none;
            }
        }
        &--firstname {
            width: 40%;
            @media (max-width: 768px) {
                width: 36%;
            }
        }
        &--lastname {
            width: 40%;
            @media (max-width: 768px) {
                width: 36%;
            }
        }
        &--email {
            width: calc(80% + math-clamp(38));
            @media (max-width: 768px) {
                width: calc(72% + math-clamp(38));
            }
        }
    }
}
</style>