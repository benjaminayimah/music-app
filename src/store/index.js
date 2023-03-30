import { createStore } from 'vuex'

export default createStore({
  state: {
    iphone: false,
    phone: false,
  },
  mutations: {
    computeInit(state) {
      if( /iPhone|iPad /i.test(navigator.userAgent) ) {
        state.iphone = true
      }
      if( /iPhone|iPad|android /i.test(navigator.userAgent) ) {
        state.phone = true
      }
    },
  },
  actions: {
  },
  getters: {
    getiPhone: (state) => state.iphone,
    getPhone: (state) => state.phone,
  },
  modules: {
  }
})
