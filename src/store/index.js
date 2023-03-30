import { createStore } from 'vuex'

export default createStore({
  state: {
    iphone: false,
    currentPlayer: { active: true, play: false, player: {id: 1, trackname: 'Forever', artist: 'Lewis Capaldi', artist_id: 1, liked: false, image: require('@/assets/images/artist-1.png'), bgColor: '#02264A'} },
    artists: [
      {id: 1, name: 'Lewis Capaldi', avatar: require('@/assets/images/lewis_capaldi.png'), stream: 29938 },
      {id: 2, name: 'Zoe Wees', avatar: require('@/assets/images/zoe_wees.png'), stream: 10923 },
      {id: 3, name: 'Taylor Swift', avatar: require('@/assets/images/taylor_swift.png'), stream: 109792 },
      {id: 4, name: 'Imagine Dragons', avatar: require('@/assets/images/imagine_dragons.png'), stream: 192792 },
      {id: 5, name: 'James Arthur', avatar: require('@/assets/images/james_arthur.png'), stream: 825730 },
      {id: 6, name: 'Black Sherif', avatar: require('@/assets/images/black_sherif.png'), stream: 9738310 },





    ]
  },
  mutations: {
    computeInit(state) {
      if( /iPhone|iPad /i.test(navigator.userAgent) ) {
        state.iphone = true
      }
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
    getCurrentPlayer: (state) => state.currentPlayer,
    getArtists: (state) => state.artists
  },
  modules: {
  }
})
