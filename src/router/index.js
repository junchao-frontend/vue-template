import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
import { login } from '../api/login'
import store from '../store'
import { allRole } from '@/router/rolesFront.js'// 导入角色对应的路由
import NProgress from 'nprogress' // 引入进度条
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
// vue-router路由版本更新产生的问题,导致路由跳转失败抛出该错误，但并不影响程序功能
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 600, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.5 // 初始化时的最小百分比
})
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
      title: 'Dashboard'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
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
          title: '动态表格'
        }
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('../views/dataCenter/form'),
        meta: {
          title: '动态表单'
        }
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
          title: '编辑Markdown'
        }
      },
      {
        path: '/showmark',
        name: 'showmark',
        component: () => import('../views/mark/showmark'),
        meta: {
          title: '展示Markdown'
        }
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
      title: '指令按钮'
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
    path: '/drawingbedF',
    name: 'drawingbedF',
    component: Layout,
    redirect: '/drawingbed',
    meta: {
      icon: 'el-icon-picture',
      title: '图床组件'
    },
    children: [
      {
        path: '/drawingbed',
        name: 'drawingbed',
        component: () => import('../views/drawingbed/')
      }
    ]
  },
  {
    path: '/routerTest',
    name: 'routerTest',
    component: Layout,
    redirect: '/second',
    meta: {
      icon: 'el-icon-aim',
      title: '动态路由'
    },
    children: [
      {
        path: '/first',
        name: 'first',
        redirect: '/threemenu',
        meta: {
          title: '二级菜单1'
        },
        component: () => import('../views/routerTest/first'),
        children: [
          {
            path: '/threemenu',
            name: 'threemenu',
            meta: {
              title: '三级菜单'
            },
            component: () => import('../views/routerTest/threemenu')
          }
        ]
      },
      {
        path: '/second',
        name: 'second',
        meta: {
          title: '二级菜单2'
        },
        component: () => import('../views/routerTest/second')
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
        component: () => import('@/views/power')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
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
// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // to 是 访问界面
  // from 是来自哪
  // next是放行方法
  const logintoken = sessionStorage.getItem('token') // 从sessionstorage拿到token
  if (logintoken && to.path === '/login') {
    next('/home')
  }
  NProgress.start()
  // 若加载时间长且不定，担心进度条走完都没有加载完，可以调用
  NProgress.inc()// 这会以随机数量递增，且永远达不到100%，也可以设指定增量
  // console.log(logintoken)
  // 如果去登录界面 直接放行
  store.commit('insertCurrentPage', to.fullPath) // 将访问的路由存入到vuex之中 之后在侧边栏高亮显示
  // 先判断有没有token 如果已经获取到了token还想去登录界面则回到主界面
  if (to.path === '/login') { // 如果是去登录界面直接放行
    next()
  } else {
    if (!logintoken) { // 如果没有token 则要去登录界面
      next('/') // 如果这里路径写 /login  则不需要上面根路径的重定向
      NProgress.done()
    } else {
      // console.log(logintoken)
      // 有token的情况则要判断要访问的路由是否在权限之内
      // 拿到权限信息 之后进行判断
      const role = sessionStorage.getItem('roles')
      const routerRole = allRole['role' + role].toString()
      if (routerRole.indexOf(to.name) !== -1) { // 如果访问的路由在权限之内 放行 之后获取登录信息存到vuex中
        next()
        var loginData
        if (role === '0') {
          loginData = {
            account: 'test',
            password: 'test'
          }
        } else {
          loginData = {
            account: 'wjc',
            password: '000919'
          }
        }
        login(loginData).then(res => {
        // console.log(loginData, '---')
          const userInfo = res.data
          // 把角色的数据存入vuex
          // console.log('123')
          store.commit('SET_ROLE', userInfo.role)
          store.commit('SET_NAME', userInfo.name)
          store.commit('SET_PHOTO', userInfo.photo)
        })
        NProgress.done()
      } else { // 如果没在权限之内 去404
        next('/404')
      }
    }
    router.afterEach(() => {
      // 在即将进入新的页面组件前，关闭掉进度条
      NProgress.done()
    })
  }
})

export default router
