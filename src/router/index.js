// router.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Journal from '@/views/Journal.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/journal', component: Journal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
