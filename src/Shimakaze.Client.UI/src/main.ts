import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { system } from '@a/kernel'
import { init } from './services/i18n'
import { getMainMenus } from './services/main'

system().then(console.log).catch(console.error)
init('zh-Hans', '').catch(console.error)
getMainMenus().then(console.log).catch(console.error)

createApp(App).mount('#app')
