// 表单api
import request from '../utils/request'
// 创建表单数据
export const createUser = (params) => {
  return request({
    method: 'GET',
    url: '/user/add',
    params
  })
}
// 获取表单数据和分页
export const getUserList = (params) => {
  return request({
    method: 'GET',
    url: '/user/showdata',
    params
  })
}

// 搜索表单数据
export const searchUser = (params) => {
  return request({
    method: 'GET',
    url: '/user/search',
    params
  })
}
// 更新表单数据
export const updateUser = (params) => {
  return request({
    method: 'GET',
    url: '/user/update',
    params
  })
}
// 删除表单数据
export const deleteUser = (params) => {
  return request({
    method: 'GET',
    url: '/user/delete',
    params
  })
}
