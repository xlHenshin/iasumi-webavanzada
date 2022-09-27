import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

import './assets/main.scss'

app.use(pinia);
app.use(router);
app.mount('#app')
