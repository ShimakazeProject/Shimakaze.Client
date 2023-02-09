import { createMemoryHistory, createRouter } from 'vue-router'
import routes from 'virtual:inline-router'

console.log(routes)

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
