import Vue from 'vue'
import VueRouter from 'vue-router'
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
export const constantRoutes = [
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
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  }
]
const createRouter = () => new VueRouter({
  // mode: 'history',
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: constantRoutes
})
const router = createRouter()

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
