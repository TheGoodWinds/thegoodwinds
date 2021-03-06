import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.place_name || localStorage.city || ""
  },
  mutations: {
    changeCity(state) {
      state.city = localStorage.place_name || localStorage.city || ""
    }
  },
  actions: {
    updateCity({ commit }) {
      commit('changeCity')
    }
  },
  getters: {
    city: state => {
      return state.city
    }
  }
})
