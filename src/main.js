import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './mock/api.js'
import '@/utils/permission.js'
import './assets/sass/index.scss'
import './components/index'
import * as echarts from 'echarts'
import dataV from '@jiaminghi/data-view'
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
