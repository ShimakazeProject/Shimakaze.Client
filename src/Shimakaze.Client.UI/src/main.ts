import { createApp } from 'vue'
import { router } from '@/router'
import App from '@/App.vue'
import '@/styles/global.sass'

if (import.meta.env.MODE === 'development') {
  await import('@vue/devtools').then(i => {
    i.default.connect(/* host, port */)
  })
}

createApp(App).use(router).mount('#app')
