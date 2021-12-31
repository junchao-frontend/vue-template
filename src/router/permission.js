import router from './index.js'
import { login } from '../api/login'
import store from '../store'
// import { allRole } from '@/router/rolesFront.js'// 导入角色对应的路由
import NProgress from 'nprogress' // 引入进度条
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 600, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.5 // 初始化时的最小百分比
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
      next()
      if (logintoken === 'admin') {
        var loginData = {
          account: 'wjc',
          password: '000919'
        }
      } else if (logintoken === 'test') {
        loginData = {
          account: 'test',
          password: 'test'
        }
      }
      login(loginData).then(res => {
        // console.log(loginData, '---')
        const userInfo = res.data
        // 把角色的数据存入vuex
        store.commit('SET_NAME', userInfo.name)
        store.commit('SET_PHOTO', userInfo.photo)
      })
      NProgress.done()
    }
    router.afterEach(() => {
      // 在即将进入新的页面组件前，关闭掉进度条
      NProgress.done()
    })
  }
})
