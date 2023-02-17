import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Kernel } from './apis/base'

Kernel.instance.call('system/methods').then(console.info).catch(console.warn)

createApp(App).mount('#app')
