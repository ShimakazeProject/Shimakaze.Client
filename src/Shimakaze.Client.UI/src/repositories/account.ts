import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore('account', () => {
  const levelProgress = ref(50)
  const level = ref(99)
  const name = ref('frg2089')
  const desc = ref('开发者')

  return {
    levelProgress,
    level,
    name,
    desc
  }
}, {
  persist: {
    storage: sessionStorage
  }
})
