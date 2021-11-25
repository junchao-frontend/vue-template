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
        role: 1,
        token: 'admin',
        photo: 'https://img1.baidu.com/it/u=3364871237,1751868068&fm=15&fmt=auto'
      }
    } else {
      return {
        name: '测试员',
        role: 0,
        token: 'test',
        photo: 'https://img0.baidu.com/it/u=1244881529,3297907499&fm=26&fmt=auto'
      }
    }
  }
}
