import Vue from 'vue'
// mport store from '@/store/index'
// 按钮权限指令
Vue.directive('permission', {
  inserted (el, binding) {
    // console.log(el, 'el')
    // console.log(binding, 'bingding')
    const role = binding.value.role
    // 这里之前有个bug 如果用vuex获取角色数据 页面刷新时获取角色会慢 按钮看不见
    // const loginrole = store.getters.GET_ROLE
    const Role = sessionStorage.getItem('token')
    // console.log('sss', loginRole)
    if (role.indexOf(Role) === -1) {
      el.parentElement.removeChild(el)
    }
  }
})
// 禁用指令
Vue.directive('disabled', {
  inserted (el, binding) {
    const effect = binding.value.effect
    if (effect === 'disabled') {
      el.disabled = true
      el.classList.add('is-disabled')
    }
  }
})
