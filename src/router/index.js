import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
import { login } from '../api/user'
import store from '../store'
import Test1 from '@/views//dataCenter/echart'
import Test2 from '@/views//dataCenter/form'
import Test3 from '@/views//dataCenter/table'
import Test4 from '@/views//dataCenter/api'
import Test5 from '@/views/home'
Vue.use(VueRouter)
// vue-router路由版本更新产生的问题,导致路由跳转失败抛出该错误，但并不影响程序功能
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/homeF',
    name: 'homeF',
    redirect: '/home',
    component: Layout,
    meta: {
      icon: 'el-icon-s-home',
      title: '首页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Test5,
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/dataCenter',
    name: 'dataCenter',
    component: Layout,
    redirect: '/dataCenter/form',
    meta: {
      icon: 'el-icon-s-data',
      title: '数据中心'
    },
    children: [
      {
        path: '/dataCenter/echart',
        name: 'echart',
        component: Test1,
        meta: {
          title: '可视化组件'
        }
      },
      {
        path: '/dataCenter/form',
        name: 'form',
        component: Test2,
        meta: {
          title: '表格组件'
        }
      },
      {
        path: '/dataCenter/table',
        name: 'table',
        component: Test3,
        meta: {
          title: '表单组件'
        }
      },
      {
        path: '/dataCenter/api',
        name: 'api',
        component: Test4,
        meta: {
          title: 'api组件'
        }
      }
    ]
  },
  {
    path: '/powerF',
    name: 'powerF',
    component: Layout,
    redirect: '/power',
    meta: {
      icon: 'el-icon-s-tools',
      title: '权限页面'
    },
    children: [
      {
        path: '/power',
        name: 'power',
        component: () => import('@/views/power'),
        meta: {
          title: '权限页面',
          role: ['admin']
        }
      }
    ]
  },
  {
    path: '/peopleF',
    name: 'peopleF',
    component: Layout,
    redirect: '/people',
    meta: {
      icon: 'el-icon-s-custom',
      title: '个人中心'
    },
    children: [
      {
        path: '/people',
        name: 'people',
        component: () => import('@/views/people'),
        meta: {
          title: '个人中心'
        }
      }
    ]
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, '----')
  // to 是 访问界面
  // from 是来自哪
  // next是放行方法
  // 如果去登录界面 直接放行
  store.commit('insertCurrentPage', to.fullPath)
  if (to.path === '/login') {
    next()
  } else {
    // 如果不是去登录界面 判断有没有token
    const logintoken = sessionStorage.getItem('token')
    if (!logintoken) { // 如果没有token 则要去登录界面
      next('/') // 如果这里路径写 /login  则不需要上面根路径的重定向
    } else {
      // 有token 获取当前角色的信息
      next()
      login(logintoken).then(res => {
        const userInfo = res.data.data
        // 把角色的数据存入vuex
        // console.log('123')
        store.commit('SET_ROLE', userInfo.role)
        store.commit('SET_NAME', userInfo.name)
        store.commit('SET_PHOTO', userInfo.photo)
      })
    }
  }
})

// 解决Loading chunk (\d)+ failed问题
router.onError((error) => {
  console.error(error)
  const pattern = /Loading chunk/g
  // const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed && error.type === 'missing') {
    // const targetPath = router.history.pending.fullPath
    router.push(targetPath)
  }
})
export default router
