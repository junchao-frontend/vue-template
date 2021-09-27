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
    meta: {
      icon: 'el-icon-s-home',
      title: '首页'
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home')
      }
    ]
  },
  {
    path: '/dataCenter',
    name: 'dataCenter',
    component: Layout,
    meta: {
      icon: 'el-icon-s-data',
      title: '数据中心'
    },
    children: [
      {
        path: '/dataCenter/echart',
        name: 'echart',
        component: () => import('../views/dataCenter/echart'),
        meta: {
          title: '可视化组件'
        }
      },
      {
        path: '/dataCenter/form',
        name: 'form',
        component: () => import('../views/dataCenter/form'),
        meta: {
          title: '表格组件'
        }
      },
      {
        path: '/dataCenter/table',
        name: 'table',
        component: () => import('../views/dataCenter/table'),
        meta: {
          title: '表单组件'
        }
      }
    ]
  },
  {
    path: '/power',
    name: 'Power',
    component: Layout,
    redirect: '/power',
    meta: {
      icon: 'el-icon-s-custom',
      title: '权限页面'
    },
    children: [
      {
        path: '/power',
        name: 'power',
        component: () => import('@/views/power'),
        meta: {
          title: '权限页面'
        }
      }
    ]
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/people'),
    meta: {
      icon: 'el-icon-s-custom',
      title: '个人中心'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // to 是 访问界面
  // from 是来自哪
  // next是放行方法
  if (to.path !== '/login') {
    const logintoken = sessionStorage.getItem('token')
    if (logintoken) {
      // 已登录，允许通过
      next()
      // 调用获取角色的接口
      findUserByToken(logintoken).then(res => {
        const userInfo = res.data
        // 把角色的数据存入vuex
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
