import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/document',
      name: 'document',
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('@/doc/Button/index.vue')
        },
        {
          path: 'icon',
          name: 'icon',
          component: () => import('@/doc/Icon/index.vue')
        },
        {
          path: 'card',
          name: 'card',
          component: () => import('@/doc/Card/index.vue')
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestWorld.vue')
    }
  ]
})
export default router
