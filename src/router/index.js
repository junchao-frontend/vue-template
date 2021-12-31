import Vue from 'vue'
import store from '../store/index.js'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
Vue.use(VueRouter)
// vue-router路由版本更新产生的问题,导致路由跳转失败抛出该错误，但并不影响程序功能
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalReplace.call(this, location, onResolve, onReject) }
  return originalReplace.call(this, location).catch(err => err)
}

const dynamicRoute = [
  {
    path: '/powerF',
    name: 'powerF',
    component: Layout,
    redirect: '/power',
    meta: {
      icon: 'el-icon-s-tools',
      title: '权限页面',
      path: '/power'
    },
    children: [
      {
        path: '/power',
        name: 'power',
        component: () => import('@/views/power')
      }
    ]
  },
  {
    path: '/drawingbedF',
    name: 'drawingbedF',
    component: Layout,
    redirect: '/drawingbed',
    meta: {
      icon: 'el-icon-picture',
      title: '图床组件',
      path: '/drawingbed'
    },
    children: [
      {
        path: '/drawingbed',
        name: 'drawingbed',
        component: () => import('../views/drawingbed/')
      }
    ]
  }
]
const errorPage = {
  path: '*',
  redirect: '/404',
  hidden: true
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
    name: 'home',
    redirect: '/home',
    component: Layout,
    meta: {
      icon: 'el-icon-s-home',
      title: 'Dashboard',
      path: '/home'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/dataCenter',
    name: 'dataCenter',
    component: Layout,
    redirect: '/echart',
    meta: {
      icon: 'el-icon-s-data',
      title: '基本组件'
    },
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/dataCenter/table'),
        meta: {
          title: '动态表格',
          path: '/table'
        },
        children: []
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('../views/dataCenter/form'),
        meta: {
          title: '动态表单',
          path: '/form'
        },
        children: []
      }
    ]
  },
  {
    path: '/markF',
    name: 'markF',
    component: Layout,
    redirect: '/editmark',
    meta: {
      icon: 'el-icon-menu',
      title: 'Markdown'
    },
    children: [
      {
        path: '/editmark',
        name: 'editmark',
        component: () => import('../views/mark/editmark'),
        meta: {
          title: '编辑Markdown',
          path: '/editmark'
        },
        children: []
      },
      {
        path: '/showmark',
        name: 'showmark',
        component: () => import('../views/mark/showmark'),
        meta: {
          title: '展示Markdown',
          path: '/showmark'
        },
        children: []
      }
    ]
  },
  {
    path: '/rolebuttonF',
    name: 'rolebuttonF',
    component: Layout,
    redirect: '/rolebutton',
    meta: {
      icon: 'el-icon-mouse',
      title: '指令按钮',
      path: '/rolebutton'
    },
    children: [
      {
        path: '/rolebutton',
        name: 'rolebutton',
        component: () => import('../views/rolebutton/')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  }
]
const router = new VueRouter({
  mode: 'history',
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
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

/**
   * 动态路由的控制
   * 通过这个函数将角色对应的路由动态添加到router里面
*/
export function initDynamicRoutes () {
  const rightList = store.state.userList
  const currentRoutes = router.options.routes
  rightList.forEach(item => {
    dynamicRoute.forEach(i => {
      if (item.name === i.name) {
        currentRoutes.unshift(i)
        /**
         * 新版router方法 废弃了router.addRoutes方法
         */
        currentRoutes.forEach(itemRouter => {
          router.addRoute(itemRouter)
        })
      }
      // console.log(currentRoutes)
    })
  })
  /**
   * 在网上查了一下，原因在于，我们在addRoutes加动态路由前，就配置了通配符404路由；
    最后改成把动态添加过路由后吗，再最后push一下404通配符
   * 这之前有一个bug 如果不在addroute之后push一次通配符 在动态路由界面刷新就会进入404界面
   */
  currentRoutes.push(errorPage)
  router.addRoute(currentRoutes[currentRoutes.length - 1])
}

export default router
