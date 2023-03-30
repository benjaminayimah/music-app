import { createStore } from 'vuex'

export default createStore({
  state: {
    iphone: false,
    phone: false,
    currentPlayer: { active: true, play: false, player: {id: 1, trackname: 'Forever', artist: 'Lewis Capaldi', liked: false, image: require('@/assets/images/artist-1.png'), bgColor: '#02264A'} }
  },
  mutations: {
    computeInit(state) {
      if( /iPhone|iPad /i.test(navigator.userAgent) ) {
        state.iphone = true
      }
      ( /iPhone|iPad|android /i.test(navigator.userAgent) ) ? state.phone = true: state.phone = false
    },
    toggleLike(state) {
      state.currentPlayer.player.liked = !state.currentPlayer.player.liked
    },
    playPause(state) {
      if (state.currentPlayer.play) {
        state.currentPlayer.play = false
      } else {
        state.currentPlayer.play = true
      }
    },
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
