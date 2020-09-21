import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
    isLoggedIn: false
  },
  mutations: {
    setIsLoggedIn (state, status) {
      state.isLoggedIn = status
    }
  },
  getters: {
  },
  actions: {
    login () {
    }
  }
})
