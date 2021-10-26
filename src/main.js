import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 全局引入element ui
import axios from 'axios'
// import './mock/api.js' 之前用mock模拟的接口
import '@/utils/permission.js' // 全局引入自定义权限指令
import './assets/scss/index.scss'// 全局样式
import './components/index'
import * as echarts from 'echarts'// 全局引入echarts 新版引入方式
import dataV from '@jiaminghi/data-view'// 全局dataV组件
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(dataV)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
