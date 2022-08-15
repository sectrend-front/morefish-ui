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
          component: () => import('@/packages/Button/doc/doc.md')
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
