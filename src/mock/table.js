// 表单相关接口函数
import { getQueryParameters } from '../utils/getUrl'
import Mock from 'mockjs'

var List = [] // 定义表格数据
const count = 50
/**
 *通过for循环 模拟count条随机数据
 */
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    email: Mock.Random.email(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date()
  }))
}

export default {
/**
 * @getUserList
 * 模拟get请求  获取分页数据
 * 前端传参 params:{pageIndex,pageSize}
 */
  getUserList: (params) => {
    // console.log(List)
    const paramObj = getQueryParameters(params)
    // console.log(paramObj)
    const pageIndex = parseInt(paramObj.pageIndex)
    const pageSize = parseInt(paramObj.pageSize)
    const start = pageIndex * 10 - 1 // 9
    const end = start + 1 - pageSize // 5
    var pageData = List.filter((item, index) => index >= end && index <= start)
    return {
      total: List.length,
      data: pageData
    }
  },
  /**
 * @createUser
 * 模拟增加数据接口
 */
  createUser: (params) => {
    const userInfo = getQueryParameters(params)
    List.unshift({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      addr: userInfo.addr,
      age: userInfo.age,
      birth: userInfo.birth
    })
    return {
      code: 0,
      data: {
        message: '添加成功'
      }
    }
  },
  /**
 * @searchUser
 * 模拟表单搜索
 */
  searchUser: (params) => {
    const userInfo = getQueryParameters(params)
    const name = userInfo[0]
    console.log(name)
    List = List.filter((item) => item.name === name)
    // console.log(aaa, 'aaa')
    return {
      code: 0,
      data: {
        message: '搜索成功'
      }
    }
  },

  /**
   *@deleteUser
   * 模拟删除
   */
  deleteUser: (params) => {
    const id = getQueryParameters(params)[0]
    // eslint-disable-next-line no-const-assign
    List = List.filter((item) => item.id !== id)
  },

  /** 模拟修改用户信息
   * @updateUser
   */
  updateUser: (params) => {
    // eslint-disable-next-line no-unused-vars
    const { id, name, email, addr, age, birth } = getQueryParameters(params)
    List.some(i => {
      if (i.id === id) {
        i.name = name
        i.email = email
        i.addr = addr
        i.age = age
        i.birth = birth
        return true
      }
    })
  }
}
