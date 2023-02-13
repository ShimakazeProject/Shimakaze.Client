import { useDark } from '@vueuse/core'
import 'uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import routers from './routers'

useDark()

createApp(App)
  .use(createPinia())
  .use(routers)
  .mount('#app')
