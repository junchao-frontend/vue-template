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
// 获取角色role
// Mock.mock('/findUserByToken', 'post', option => {
//   const token = option.body
//   if (token === 'admin-token') {
//     return users[token]
//   }
//   return users[token]
// })
