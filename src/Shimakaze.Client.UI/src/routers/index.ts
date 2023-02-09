import {
  createRouter, createWebHistory,
  type RouteRecordRaw, type RouteComponent
} from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import CampaignPage from '@/pages/CampaignPage.vue'
import SkirmishPage from '@/pages/SkirmishPage.vue'

const _routes = {
  '/': MainPage,
  '/campaign': CampaignPage,
  '/skirmish': SkirmishPage
}

type RoutePath = keyof typeof _routes

const routes: Record<RoutePath, RouteComponent | RouteRecordRaw> = _routes

const router = createRouter({
  history: createWebHistory(),
  routes: Object.keys(routes).map(path => {
    if ('component' in routes[path as RoutePath]) {
      return {
        ...(routes[path as RoutePath] as RouteRecordRaw),
        path
      }
    } else {
      return {
        path,
        component: routes[path as RoutePath] as RouteComponent
      }
    }
  })
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
export const go = async (path: keyof typeof routes | 'back'): Promise<void> => {
  if (path === 'back') {
    router.back()
    return
  }
  await router.push(path)
}

export default router
