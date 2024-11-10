import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/fonts.scss'
import '@/styles/reboot.scss'
import '@/styles/general.scss'

createApp(App)
    .use(router)
    .mount('#app')