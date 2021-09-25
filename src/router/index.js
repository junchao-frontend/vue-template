import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
import { findUserByToken } from '../api/user'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/',
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
router.beforeEach((to, from, next) => {
  // to 是 访问界面
  // from 是来自哪
  // next是放行方法
  if (to.path !== '/login') {
    const logintoken = sessionStorage.getItem('tt')
    if (logintoken) {
      // 已登录，允许通过
      next()
      findUserByToken(logintoken).then(res => {
        const userInfo = res.data
        store.commit('SET_ROLE', userInfo.role)
        store.commit('SET_NAME', userInfo.name)
        store.commit('SET_PHOTO', userInfo.photo)
      })
    } else {
      // 没有登录 跳转到登录界面
      next('/login')
    }
  } else {
    // 登录界面 正常允许通过
    next()
  }
})
export default router
