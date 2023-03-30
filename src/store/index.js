import { createStore } from 'vuex'

export default createStore({
  state: {
    phone: false
  },
  mutations: {
    computeInit(state) {
      if( /iPhone|iPad /i.test(navigator.userAgent) ) {
        state.phone = true
      }
    },
  },
  actions: {
  },
  getters: {
    getPhone: (state) => state.phone,
  },
  modules: {
  }
})
