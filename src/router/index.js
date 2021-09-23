import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/Home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
