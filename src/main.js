import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import mitt from 'mitt'
import Test from '@/views/test'

const emitter = mitt()
const app=createApp(App)
app.use(router).mount('#app')
    app.provide('mitt',emitter)
