import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Cadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
    
      component: () => import('../views/Home.vue')
    }
  ]
})

export default router
