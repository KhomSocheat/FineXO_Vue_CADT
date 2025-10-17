import About from '@/views/About.vue'
import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Service from '@/components/Service.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]



const router = createRouter({
  history: createWebHistory(), // use browser history mode
  routes
})

export default router
