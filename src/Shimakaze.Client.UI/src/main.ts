import App from '@/App.vue'
import { router } from '@/routers'
import '@/styles/global.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

if (import.meta.env.MODE === 'development') {
  await import('@vue/devtools').then(i => {
    i.default.connect(/* host, port */)
  })
}

createApp(App)
  .use(
    createPinia()
      .use(piniaPluginPersistedstate)
  )
  .use(router)
  .mount('#app')
