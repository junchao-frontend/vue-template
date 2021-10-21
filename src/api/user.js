import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/login',
    // data用来设置POST请求体
    data
  })
}
// 通用获取表单数据
export function gettableData (data) {
  return request({
    method: 'GET',
    url: data.url,
    // data用来设置POST请求体
    data
  })
}
