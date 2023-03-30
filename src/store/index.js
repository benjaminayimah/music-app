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
      ( /iPhone|iPad|android /i.test(navigator.userAgent) ) ? state.phone = true: state.phone = false
    }
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
