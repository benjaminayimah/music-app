import { createStore } from 'vuex'

export default createStore({
  state: {
    iphone: false,
    categories: [
      {id: 1, name: 'music'},
      {id: 2, name: 'podcasts & shows'}
    ],
    currentPlayer: { active: true, max: false, play: false, player: {id: 1, trackname: 'Forever', artist: 'Lewis Capaldi', artist_id: 1, liked: false, image: require('@/assets/images/artist-1.png'), bgColor: '#02264A'} },
    artists: [
      {id: 1, name: 'Lewis Capaldi', avatar: require('@/assets/images/lewis_capaldi.png'), stream: 29938 },
      {id: 2, name: 'Zoe Wees', avatar: require('@/assets/images/zoe_wees.png'), stream: 10923 },
      {id: 3, name: 'Taylor Swift', avatar: require('@/assets/images/taylor_swift.png'), stream: 109792 },
      {id: 4, name: 'Imagine Dragons', avatar: require('@/assets/images/imagine_dragons.png'), stream: 192792 },
      {id: 5, name: 'James Arthur', avatar: require('@/assets/images/james_arthur.png'), stream: 825730 },
      {id: 6, name: 'Black Sherif', avatar: require('@/assets/images/black_sherif.png'), stream: 9738310 },
    ],
    discover: [
      {id: 1, title: 'for you', category: 'music', playlist: []},
      {id: 2, title: 'new releases', category: 'podcast', playlist: []},
      {id: 3, title: 'rise and shine', category: 'music', playlist: []},

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
    toggleMediaPlayer(state) {
      if (state.currentPlayer.max) {
        state.currentPlayer.max = false
        document.body.classList.remove('max')
        document.body.classList.add('min')
      }else {
        state.currentPlayer.max = true
        document.body.classList.remove('min')
        document.body.classList.add('max')
      }
    }
  },
  actions: {
  },
  getters: {
    getiPhone: (state) => state.iphone,
    getCurrentPlayer: (state) => state.currentPlayer,
    getArtists: (state) => state.artists,
    getDiscover: (state) => state.discover,
    getCategories: (state) => state.categories
  },
  modules: {
  }
})
