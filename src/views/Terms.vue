<template>
    <div class="qa-terms qa-container">
        <strong>Last updated on May 16th</strong>
        <div class="qa-terms__privacy">
            <h1 class="qa-terms__title">Privacy</h1>
            <br>
            We use Google Analytics on this website to track visitor behavior and improve our website. For more information about how Google uses your data, you can read the <a href="https://policies.google.com/privacy?hl=en">Google Privacy Policy</a> If you don't want your data to be collected, you can use <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. We only use functional cookies to ensure the website works properly.
            <br> <br>
            We don't use cookies for advertising or other commercial purposes.
        </div>
        <ol>
            <h1 class="qa-terms__title">Terms of Service</h1>
            <li class="qa-terms__primary">
                1. Definitions
                <ol class="qa-terms__secondary">
                    <li>1. Website: www.rohit.nl</li>
                    <li>2. Services: The portfolio and associated services, accessible via www.rohit.nl.</li>
                    <li>3. Administrator: Rohit Jethoe, registered with Kamer van Koophandel under number 97134961</li>
                    <li>4. User: Any natural or legal person who visits the website or uses the services.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                2. Applicability
                <ol class="qa-terms__secondary">
                    <li>1. These terms and conditions apply to all users of the website and services.</li>
                    <li>2. Deviations from these terms are only valid if confirmed in writing by the administrator.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                3. Right of use
                <ol class="qa-terms__secondary">
                    <li>1. In case of misuse or unauthorized use, the administrator may suspend or terminate access.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                4. Availability
                <ol class="qa-terms__secondary">
                    <li>1. The administrator strives for maximum availability of the website but cannot guarantee uninterrupted access.</li>
                    <li>2. Maintenance work will be announced in advance whenever possible.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                5. Liability
                <ol class="qa-terms__secondary">
                    <li>1. The administrator provides the services “as is” and is not liable for direct or indirect damages resulting from the use of the website or services, unless such damages are due to intent or gross negligence.</li>
                    <li>2. Users are responsible for the proper use of the website and the provided information.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                6. Duration and Termination
                <ol class="qa-terms__secondary">
                    <li>1. The administrator reserves the right to discontinue the services or website at any time.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                7. Force Majeure
                <ol class="qa-terms__secondary">
                    <li>1. The administrator is not liable for failures to meet obligations due to force majeure, including outages, technical issues, or other extraordinary circumstances.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                8. Governing Law
                <ol class="qa-terms__secondary">
                    <li>1. These terms and conditions are governed by Dutch law.</li>
                    <li>2. Disputes arising from the use of the website or services will be submitted to the competent court in the Netherlands.</li>
                </ol>
            </li>
            <li class="qa-terms__primary">
                By using the website and services, the user agrees to these terms and conditions.
            </li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>
.qa-terms {
    padding-bottom: 40px;

    strong {
        color: #666;
    }

    @media screen and (min-width: 1024px) {
        width: 920px;
    }

    &__title {
        font-size: 24px;
        padding-top: 15px;
    }

    &__primary {
        padding-top: 12px;
    }

    &__secondary {
        padding-top: 6px;
        padding-left: 20px;
    }

    &__privacy {
        a:link, a:visited {
            color: #2f40ff;
        }
    }
}
</style>