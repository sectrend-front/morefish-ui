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
      component: () => import('@/views/TestWorld.vue'),
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('#d/Button/index.vue')
        }
      ]
    }
  ]
})
export default router
