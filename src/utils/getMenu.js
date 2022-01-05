/* eslint-disable no-unused-vars */
import Layout from '@/layout'
import { login } from '@/api/login'

/**
 * @description: 解析后端返回来的菜单树
 * @param {*} data 后端返回来的路由树
 * @param {*} arr 菜单
 * @return {*}
 */
function tree (data, arr) {
  // console.log(data);
  data.forEach((datas, index) => {
    arr.push({
      path: datas.path,
      name: datas.name,
      hidden: !!datas.hidden,
      //   types: datas.types,
      // hidden: datas.hidden == 'true' ? true : false,
      // 当时这块踩坑了
      component: datas.component === 'Layout' ? Layout : resolve => require([`@/views/${datas.component}`], resolve),
      meta: {
        title: datas.meta.title || '',
        icon: datas.meta.icon || '',
        path: datas.meta.path || ''
        // // 用来存放按钮权限
        // button: datas.meta.button
      },
      redirect: datas.redirect || '',
      // id: datas.id,
      // 子路由
      children: []
    })
    // console.log(arr);

    if (datas.children) {
      const childArr = tree(datas.children, [])
      arr[index].children = childArr
    }
  })
  return arr
}

/**
 * @description: 获取当前登录用户的菜单
 * @param {*}
 * @return {*}
 */
export function getMenu () {
  return new Promise(function (resolve, reject) {
    var token = sessionStorage.getItem('token')
    var userData
    if (token === 'admin') {
      userData = {
        account: 'wjc',
        password: '000919'
      }
    } else if (token === 'test') {
      userData = {
        account: 'test',
        password: 'test'
      }
    } else {
      return
    }
    login(userData).then(res => {
      const datas = res.data.rightList
      // 调用 tree 来解析后端返回来的树
      resolve(tree(datas, []))
    })
  })
}
