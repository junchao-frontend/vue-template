// 基于element 封装一个loading
import { Loading } from 'element-ui'
import '../assets/scss/pageLoading.css'
var loading = null

// 开始加载loading
export const startLoading = () => {
  loading = Loading.service({
    lock: true,
    // text: '加载中...', // 加载动画的文字
    background: 'rgb(38, 50, 56)'// 加载动画的背景
  })
}
// 结束 取消loading加载
export const endLoading = () => {
  loading.close()
}
