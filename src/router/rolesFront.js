/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/
// const home = ['Home']

// const people = ['People']

const role0 = [
  'home', 'homeF',
  'dataCenter', 'echart', 'form', 'table',
  'people', 'peopleF'
]

const role1 = [
  'home', 'homeF',
  'dataCenter', 'echart', 'form', 'table', 'api',
  'power', 'powerF', // 权限管理
  'people', 'peopleF'
]

export const allRole = { role0, role1 }
