import Background from '@/Background.vue'
import { router } from '@/routers'
import { init } from '@/services/i18n'
import '@/styles/global.scss'
import { platform, version } from '@tauri-apps/api/os'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { RouterView } from 'vue-router'
import { system } from './apis/kernel'

if (import.meta.env.MODE === 'development') {
  await import('@vue/devtools').then(i => {
    i.default.connect(/* host, port */)
  })

  system()
    .then(console.log)
    .catch(console.error)
}

// TODO: 本地化翻译部分需要重构
init('zh-Hans', '')
  .catch(console.error)

Promise
  .all([platform(), version()])
  .then(([platformName, osVersion]) => {
    if (platformName === 'win32' && Number(osVersion.split('.')[2]) > 22000) {
      document.querySelector('body')?.setAttribute('rounded', '')
    }
  })
  .catch(console.error)

createApp(Background).mount('#background')
createApp(RouterView)
  .use(
    createPinia()
      .use(piniaPluginPersistedstate)
  )
  .use(router)
  .mount('#app')
