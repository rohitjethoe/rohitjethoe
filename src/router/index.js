// router.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Journal from '@/views/Journal.vue'
import Post from '@/views/Post.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/journal', component: Journal },
  { path: '/journal/:slug', component: Post }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
