import { useDark } from '@vueuse/core'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'

useDark()

createApp(App)
  .use(routers)
  .mount('#app')
