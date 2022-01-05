// 登录接口
import { getQueryParameters } from '../utils/getUrl'
export default {
  /** 用户登录
     *@login
     */
  login: (config) => {
    const user = getQueryParameters(config)
    if (user.account === 'wjc' && user.password === '000919') {
      return {
        name: '管理员',
        token: 'admin',
        photo: 'https://img1.baidu.com/it/u=3364871237,1751868068&fm=15&fmt=auto',
        rightList: [
          {
            path: '/home',
            name: 'home',
            redirect: '/home',
            component: 'Layout',
            meta: {
              icon: 'el-icon-s-home',
              title: 'Dashboard',
              path: '/home'
            },
            children: [
              {
                path: '/home',
                name: '',
                component: 'home',
                meta: {
                  icon: 'el-icon-s-home',
                  title: 'Dashboard',
                  path: '/home'
                }
              }
            ]
          },
          {
            path: '/dataCenter',
            name: '',
            component: 'Layout',
            redirect: '/table',
            meta: {
              icon: 'el-icon-s-data',
              title: '基本组件'
            },
            children: [
              {
                path: '/table',
                name: '',
                component: 'dataCenter/table',
                meta: {
                  title: '动态表格',
                  path: '/table'
                },
                children: []
              },
              {
                path: '/form',
                name: '',
                component: 'dataCenter/form',
                meta: {
                  title: '动态表单',
                  path: '/form'
                },
                children: []
              }
            ]
          },
          {
            path: '/mark',
            name: '',
            component: 'Layout',
            redirect: '/editmark',
            meta: {
              icon: 'el-icon-menu',
              title: 'Markdown'
            },
            children: [
              {
                path: '/editmark',
                name: '',
                component: 'mark/editmark',
                meta: {
                  title: '编辑Markdown',
                  path: '/editmark'
                },
                children: []
              },
              {
                path: '/showmark',
                name: '',
                component: 'mark/showmark',
                meta: {
                  title: '展示Markdown',
                  path: '/showmark'
                },
                children: []
              }
            ]
          },
          {
            path: '/drawingbed',
            name: 'drawingbed',
            component: 'Layout',
            redirect: '/drawingbed',
            meta: {
              icon: 'el-icon-picture',
              title: '图床组件',
              path: '/drawingbed'
            },
            children: [
              {
                path: '/drawingbed',
                name: '',
                component: 'drawingbed',
                meta: {
                  icon: 'el-icon-picture',
                  title: '图床组件',
                  path: '/drawingbed'
                }
              }
            ]
          },
          {
            path: '/power',
            name: 'power',
            component: 'Layout',
            redirect: '/power',
            meta: {
              icon: 'el-icon-s-tools',
              title: '权限测试',
              path: '/power'
            },
            children: [
              {
                path: '/power',
                name: '',
                component: 'power',
                meta: {
                  title: '页面权限',
                  path: '/power'
                }
              },
              {
                path: '/rolebutton',
                name: '',
                component: 'rolebutton',
                meta: {
                  title: '指令按钮',
                  path: '/rolebutton'
                }
              },
              {
                path: '/role',
                name: '',
                component: 'role',
                meta: {
                  title: '角色按钮',
                  path: '/role'
                }
              }
            ]
          },
          {
            path: '/people',
            name: 'people',
            component: 'Layout',
            redirect: '/people',
            meta: {
              icon: 'el-icon-user-solid',
              title: '个人中心',
              path: '/people'
            },
            children: [
              {
                path: '/people',
                name: '',
                component: 'people',
                meta: {
                  icon: 'el-icon-user-solid',
                  title: '个人中心',
                  path: '/people'
                }
              }
            ]
          }
        ]
      }
    } else if ((user.account === 'test' && user.password === 'test')) {
      return {
        name: '测试员',
        role: 0,
        token: 'test',
        photo: 'https://img0.baidu.com/it/u=1244881529,3297907499&fm=26&fmt=auto',
        rightList: [
          {
            path: '/home',
            name: 'home',
            redirect: '/home',
            component: 'Layout',
            meta: {
              icon: 'el-icon-s-home',
              title: 'Dashboard',
              path: '/home'
            },
            children: [
              {
                path: '/home',
                name: '',
                component: 'home',
                meta: {
                  icon: 'el-icon-s-home',
                  title: 'Dashboard',
                  path: '/home'
                }
              }
            ]
          },
          {
            path: '/dataCenter',
            name: '',
            component: 'Layout',
            redirect: '/table',
            meta: {
              icon: 'el-icon-s-data',
              title: '基本组件'
            },
            children: [
              {
                path: '/table',
                name: '',
                component: 'dataCenter/table',
                meta: {
                  title: '动态表格',
                  path: '/table'
                },
                children: []
              },
              {
                path: '/form',
                name: '',
                component: 'dataCenter/form',
                meta: {
                  title: '动态表单',
                  path: '/form'
                },
                children: []
              }
            ]
          },
          {
            path: '/mark',
            name: '',
            component: 'Layout',
            redirect: '/editmark',
            meta: {
              icon: 'el-icon-menu',
              title: 'Markdown'
            },
            children: [
              {
                path: '/editmark',
                name: '',
                component: 'mark/editmark',
                meta: {
                  title: '编辑Markdown',
                  path: '/editmark'
                },
                children: []
              },
              {
                path: '/showmark',
                name: '',
                component: 'mark/showmark',
                meta: {
                  title: '展示Markdown',
                  path: '/showmark'
                },
                children: []
              }
            ]
          },
          {
            path: '/drawingbed',
            name: 'drawingbed',
            component: 'Layout',
            redirect: '/drawingbed',
            meta: {
              icon: 'el-icon-picture',
              title: '图床组件',
              path: '/drawingbed'
            },
            children: [
              {
                path: '/drawingbed',
                name: '',
                component: 'drawingbed',
                meta: {
                  icon: 'el-icon-picture',
                  title: '图床组件',
                  path: '/drawingbed'
                }
              }
            ]
          },
          {
            path: '/power',
            name: 'power',
            component: 'Layout',
            redirect: '/power',
            meta: {
              icon: 'el-icon-s-tools',
              title: '权限测试',
              path: '/power'
            },
            children: [
              {
                path: '/rolebutton',
                name: '',
                component: 'rolebutton',
                meta: {
                  title: '指令按钮',
                  path: '/rolebutton'
                }
              },
              {
                path: '/role',
                name: '',
                component: 'role',
                meta: {
                  title: '角色按钮',
                  path: '/role'
                }
              }
            ]
          },
          {
            path: '/people',
            name: 'people',
            component: 'Layout',
            redirect: '/people',
            meta: {
              icon: 'el-icon-user-solid',
              title: '个人中心',
              path: '/people'
            },
            children: [
              {
                path: '/people',
                name: '',
                component: 'people',
                meta: {
                  icon: 'el-icon-user-solid',
                  title: '个人中心',
                  path: '/people'
                }
              }
            ]
          }
        ]
      }
    }
  }
}
