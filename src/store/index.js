import { createStore } from 'vuex'

export default createStore({
  state: {
    iphone: false,
    phone: false,
    currentPlayer: { active: true, player: {id: 1, trackname: 'Forever', artist: 'Lewis Capaldi', liked: false, image: require('@/assets/images/artist-1.png')} }
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
    getCurrentPlayer: (state) => state.currentPlayer
  },
  modules: {
  }
})
