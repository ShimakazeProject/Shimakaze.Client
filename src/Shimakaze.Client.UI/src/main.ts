import App from '@/App.vue'
import Background from '@/Background.vue'
import { router } from '@/routers'
import '@/styles/global.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { platform, version } from '@tauri-apps/api/os'

if (import.meta.env.MODE === 'development') {
  await import('@vue/devtools').then(i => {
    i.default.connect(/* host, port */)
  })
}

const platformName = await platform()
const osVersion = await version()
console.log(platformName, osVersion)
if (platformName === 'win32' && Number(osVersion.split('.')[2]) > 22000) {
  document.querySelector('body')?.setAttribute('rounded', '')
}

createApp(Background).mount('#background')
createApp(App)
  .use(
    createPinia()
      .use(piniaPluginPersistedstate)
  )
  .use(router)
  .mount('#app')
