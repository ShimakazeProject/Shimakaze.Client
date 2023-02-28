import { createMemoryHistory, createRouter } from 'vue-router'
import routes from 'virtual:inline-router'

console.log(routes)

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.afterEach((to, from) => {
  let transition: string
  if (from.fullPath === to.fullPath) {
    transition = 'reload'
  } else if (to.fullPath === '/') {
    transition = 'pop'
  } else {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    transition = toDepth < fromDepth ? 'pop' : 'push'
  }
  to.meta.transition = transition
})
