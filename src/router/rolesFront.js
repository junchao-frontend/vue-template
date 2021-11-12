/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/

const role0 = [
  'home', 'homeF',
  'dataCenter', 'echart', 'table', 'apiManage',
  'rolebutton', 'rolebuttonF',
  'people', 'peopleF',
  '404'
]

const role1 = [
  'home', 'homeF',
  'dataCenter', 'echart', 'table', 'api', 'apiManage',
  'power', 'powerF', // 权限管理
  'rolebutton', 'rolebuttonF',
  'routerTest', 'first', 'second', 'threemenu', // 动态路由
  'people', 'peopleF',
  '404'
]

export const allRole = { role0, role1 }
