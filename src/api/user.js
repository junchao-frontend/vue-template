import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/user/login',
    // data用来设置POST请求体
    data
  })
}

// // 注册用户
// export const registerUser = data => {
//   return request({
//     method: 'POST',
//     url: '/user',
//     data
//   })
// }
// 通用获取表单数据
// export function gettableData (data) {
//   return request({
//     method: 'GET',
//     url: data.url,
//     // data用来设置POST请求体
//     data
//   })
// }
// export function ceshi (data) {
//   return request({
//     method: 'POST',
//     url: '/user/findAll.do',
//     dataType: 'jsonp',
//     // data用来设置POST请求体
//     data
//   })
// }
