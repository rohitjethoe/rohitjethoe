import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'katex/dist/katex.min.css'

createApp(App).use(router).mount('#app')
