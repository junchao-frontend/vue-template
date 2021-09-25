import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    name: '',
    role: []
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_NAME (state, name) {
      state.name = name
    },
    SET_ROLE (state, role) {
      state.role = role
    },
    SET_PHOTO (state, photo) {
      state.photo = photo
    }
  },
  getters: {
    GET_TOKEN: state => state.token,
    GET_ROLE: state => state.role,
    GET_NAME: state => state.name,
    GET_PHOTO: state => state.photo
  },
  actions: {
  },
  modules: {
  }
})
