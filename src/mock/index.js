// Mock 入口文件
import Mock from 'mockjs'
import tableApi from './table'// 引入表单相关函数
import loginApi from './login'// 引入登录相关函数

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})

// 表单相关
Mock.mock(/\/user\/showdata/, 'get', tableApi.getUserList)
Mock.mock(/\/user\/add/, 'get', tableApi.createUser)
Mock.mock(/\/user\/search/, 'get', tableApi.searchUser)
Mock.mock(/\/user\/delete/, 'get', tableApi.deleteUser)
Mock.mock(/\/user\/update/, 'get', tableApi.updateUser)

// 登录相关
Mock.mock(/\/user\/login/, 'get', loginApi.login)
