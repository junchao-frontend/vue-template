import axios from 'axios'
const request = axios.create({
  // baseURL: 'http://152.136.115.31:7008', // 董文达服务器
  // baseURL: 'http://lxandzjy.top:9998', // 朱
  // baseURL: 'http://127.0.0.1:7001', // 自己
  timeout: 5000
})

request.interceptors.request.use(config => {
  // console.log(config, 'config')
  // startLoading()
  return config
})
request.interceptors.response.use(config => {
  // console.log(config, '----')
  // endLoading()
  return config
}
)

// showFullScreenLoading() 与 tryHideFullScreenLoading() 目的是合并同一页面多个请求触发loading

// let needLoadingRequestCount = 0 // 声明一个变量

// const showFullScreenLoading = () => {
//   if (needLoadingRequestCount === 0) { // 当等于0时证明第一次请求 这时开启loading
//     startLoading()
//   }
//   needLoadingRequestCount++ // 全局变量值++
// }

// const tryHideFullScreenLoading = () => {
//   if (needLoadingRequestCount <= 0) return // 小于等于0 证明没有开启loading 此时return
//   needLoadingRequestCount-- // 正常响应后 全局变量 --
//   if (needLoadingRequestCount === 0) { // 等于0 时证明全部加载完毕 此时结束loading 加载
//     endLoading()
//   }
// }
// 导出请求方法
export default request
