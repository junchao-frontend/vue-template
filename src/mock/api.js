import { tokens, users } from './user.js'
const Mock = require('mockjs')
// const tokens = {
//   admin: {
//     token: 'admin-token'
//   },
//   student: {
//     token: 'student-token'
//   }
// }
Mock.mock('/login', 'post', (req) => {
  // console.log(req, 'req')
  const username = JSON.parse(req.body)
  if (username.name === 'admin') {
    return tokens.admin
  }
  return tokens.student
})

// 获取角色role
Mock.mock('/findUserByToken', 'post', option => {
  const token = option.body
  if (token === 'admin-token') {
    return users[token]
  }
  return users[token]
})
