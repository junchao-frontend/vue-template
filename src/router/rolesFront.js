/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/

const role0 = [
  'home', 'homeF',
  'dataCenter', 'echart', 'table', 'form',
  'rolebutton', 'rolebuttonF',
  'mark', 'markF', 'editmark', 'showmark',
  '404'
]

const role1 = [
  'home', 'homeF',
  'dataCenter', 'echart', 'table', 'form',
  'power', 'powerF', // 权限管理
  'rolebutton', 'rolebuttonF',
  'routerTest', 'first', 'second', 'threemenu', // 动态路由
  'mark', 'markF', 'editmark', 'showmark',
  '404'
]

export const allRole = { role0, role1 }
