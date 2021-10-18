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
