import request from '@/utils/request'
// 用户登录
export const login = params => {
  return request({
    method: 'GET',
    url: '/user/login',
    // data用来设置POST请求体
    params
  })
}
