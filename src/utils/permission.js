import Vue from 'vue'
import store from '@/store/index'

Vue.directive('permission', {
  inserted (el, binding) {
    // console.log(el, 'el')
    // console.log(binding, 'bingding')
    const role = binding.value.role
    // const effect = binding.value.effect
    const loginRole = store.getters.GET_ROLE
    if (role.indexOf(loginRole) === -1) {
      // if (effect === 'disabled') {
      //   el.disabled = true
      //   el.classList.add('is-disabled')
      // }
      el.parentNode.removeChild(el)
    }
  }
})
