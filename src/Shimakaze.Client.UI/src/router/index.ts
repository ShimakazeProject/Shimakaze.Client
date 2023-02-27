import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '@p/HomePage.vue'

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
})
