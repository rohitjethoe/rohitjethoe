<script setup></script>

<template>
    <footer class="tracking-tighter p-2.5 pt-0 md:p-5 md:pt-0 text-sm flex justify-between">
        <div>
            &copy; {{ new Date().getFullYear() }} - Rohit Jethoe
        </div>
        <div>
            <ul class="flex gap-1.5 md:gap-2.5">
                <li>
                    <a class="text-neutral-500 transition-all hover:text-black" href="">
                        Terms of Service
                    </a>
                </li>
                <li class="text-neutral-500">•</li>
                <li>
                    <a class="text-neutral-500 transition-all hover:text-black" href="">
                        Privacy Policy
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>