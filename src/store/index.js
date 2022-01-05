import Vue from 'vue'
import Vuex from 'vuex'
import router, { constantRoutes } from '../router/index'
// getMenu 解析后台路由
import { getMenu } from '../utils/getMenu'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meunList: [],
    currentPage: '', // 用来存储当前路由
    token: sessionStorage.getItem('token'),
    name: '',
    photo: ''
  },
  mutations: {
    SET_ROUTER_MENULIST (state, list) {
      // 静态路由 +  动态路由  合并  完整路由
      const array = constantRoutes.concat(list)
      state.meunList = array
      router.options.routes = array
      /**
         * 新版router方法 废弃了router.addRoutes方法
         */
      array.forEach(itemRouter => {
        router.addRoute(itemRouter)
      })
      const errorPage = {
        path: '*',
        redirect: '/404',
        hidden: true
      }
      /** 刷新界面进入404解决：
      *原因在于，我们在addRoutes加动态路由前，就配置了通配符404路由；
        * 最后改成把动态添加过路由后吗，再最后push一下404通配符
        * 这之前有一个bug 如果不在addroute之后push一次通配符 在动态路由界面刷新就会进入404界面
      */
      array.push(errorPage)
      router.addRoute(array[array.length - 1])
    },
    insertCurrentPage (state, currentPage) {
      state.currentPage = currentPage
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_NAME (state, name) {
      state.name = name
    },
    SET_PHOTO (state, photo) {
      state.photo = photo
    }
  },
  getters: {
    GET_NAME: state => state.name,
    GET_PHOTO: state => state.photo,
    getCurrentPage: state => state.currentPage
  },
  actions: {
    setMenuList ({ commit, state }) {
      // 接收返回来的 路由数组
      return new Promise((resolve, reject) => {
        getMenu().then(res => {
          commit('SET_ROUTER_MENULIST', res)
          // resolve(res)
        })
      })
    }
  },
  modules: {
  }
})
