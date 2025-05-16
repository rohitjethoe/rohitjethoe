import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/terms', component: () => import('@/views/Terms.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router