import App from '@/App.vue'
import { router } from '@/routers'
import '@/styles/global.sass'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { createApp } from 'vue'

if (import.meta.env.MODE === 'development') {
  await import('@vue/devtools').then(i => {
    i.default.connect(/* host, port */)
  })
}

createApp(App)
  .use(
    createPinia()
      .use(piniaPersist)
  )
  .use(router)
  .mount('#app')
