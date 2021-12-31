import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    currentPage: '', // 用来存储当前路由
    token: sessionStorage.getItem('token'),
    name: '',
    photo: ''
  },
  mutations: {
    SET_USERLIST (state, data) {
      state.userList = data
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    insertCurrentPage (state, currentPage) {
      state.currentPage = currentPage
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_NAME (state, name) {
      state.name = name
    },
    SET_PHOTO (state, photo) {
      state.photo = photo
    }
  },
  getters: {
    GET_NAME: state => state.name,
    GET_PHOTO: state => state.photo,
    getCurrentPage: state => state.currentPage
  },
  actions: {
  },
  modules: {
  }
})
