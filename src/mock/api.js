// import { tokens, users } from './user.js'
const Mock = require('mockjs')
// const tokens = {
//   admin: {
//     token: 'admin-token'
//   },
//   student: {
//     token: 'student-token'
//   }
// }
// console.log(tokens)
// Mock.mock('/login', 'post', (req) => {
//   // console.log(req, 'req')
//   const username = JSON.parse(req.body)
//   if (username.name === 'admin') {
//     return tokens.admin
//   }
//   return tokens.student
// })
Mock.mock('/login', 'post', {
  ret: 0,
  data: {
    name: '管理员',
    phone: '15533570808',
    password: 'admin',
    photo: 'https://img0.baidu.com/it/u=101483086,2641300916&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    role: '1',
    token: 'admin'
  }
})
Mock.mock('/tabledata', 'get', {
  ret: 0,
  data: {
    tabledata: [
      {
        loginName: '王军潮',
        power: 'api管理,角色管理',
        creatTime: '2021/10/15',
        manager: '代理商1',
        state: '启用'
      },
      {
        loginName: '于森',
        power: 'api管理,账号管理',
        creatTime: '2021/10/16',
        manager: '代理商2',
        state: '禁用'
      },
      {
        loginName: '石平',
        power: 'api管理,角色管理',
        creatTime: '2021/10/17',
        manager: '代理商3',
        state: '启用'
      },
      {
        loginName: '刘沛申',
        power: 'api管理,权限管理',
        creatTime: '2021/10/18',
        manager: '代理商4',
        state: '禁用'
      },
      {
        loginName: '尹梦淞',
        power: '角色管理,权限管理',
        creatTime: '2021/10/19',
        manager: '代理商5',
        state: '启用'
      },
      {
        loginName: '周浩露',
        power: '账号管理,权限管理',
        creatTime: '2021/10/22',
        manager: '代理商6',
        state: '禁用'
      },
      {
        loginName: '张蓝宁',
        power: '角色管理,权限管理',
        creatTime: '2021/10/20',
        manager: '代理商7',
        state: '启用'
      },
      {
        loginName: '刘学彤',
        power: 'api管理,权限管理',
        creatTime: '2021/10/21',
        manager: '代理商8',
        state: '禁用'
      },
      {
        loginName: '曹旭',
        power: '账号管理,权限管理',
        creatTime: '2021/10/22',
        manager: '代理商9',
        state: '禁用'
      },
      {
        loginName: '赵浩男',
        power: '账号管理,权限管理',
        creatTime: '2021/10/22',
        manager: '代理商10',
        state: '启用'
      }
    ],
    pagedata: {
      page: 1,
      per_page: 10,
      totalpage: 2
    }
  }
})
// 获取角色role
// Mock.mock('/findUserByToken', 'post', option => {
//   const token = option.body
//   if (token === 'admin-token') {
//     return users[token]
//   }
//   return users[token]
// })
