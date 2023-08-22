import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Monostatic from "@/views/projects/Monostatic.vue"
import Virtufit from "@/views/projects/Virtufit.vue"
import Relay from "@/views/projects/Relay.vue"
import App from './App.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/projects/monostatic', component: Monostatic },
    { path: '/projects/virtufit', component: Virtufit },
    { path: '/projects/relay', component: Relay }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
