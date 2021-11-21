import request from '../utils/request'
// 增加表单数据
export const addTabeldata = data => {
  return request({
    method: 'POST',
    url: '/api/book',
    data
  })
}
// 展示表单数据
export const showTabeldata = data => {
  return request({
    method: 'GET',
    url: '/api/book/show',
    data
  })
}
