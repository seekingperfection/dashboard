import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/dashboard',
      component: () => import('@/pages/dashboard/index.vue'),
    },
    {
      path: '/product/:id',
      component: () => import('@/pages/productInner/index.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/pages/notFound/index.vue'),
    },
  ],
})

export default router
