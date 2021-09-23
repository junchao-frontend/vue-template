import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: '1'
  },
  mutations: {
    upcount (state) {
      state.count++
    },
    downcount (state) {
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
