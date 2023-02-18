import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { system } from '@a/kernel'

system().then(console.log).catch(console.error)

createApp(App).mount('#app')
