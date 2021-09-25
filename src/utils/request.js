import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://api-toutiao-web.itheima.net/'
})

// get 一遍用于查询 post 一般用于添加 put一般用于修改，完整替换 delete patch修改 局部修改

// 导出请求方法
export default request
