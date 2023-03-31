<template>
  <top-nav />
  <router-view/>
  <bottom-nav/>
  <media-player-max />
</template>
<script>
import BottomNav from './components/includes/BottomNav.vue'
import TopNav from './components/includes/TopNav.vue'
import MediaPlayerMax from './components/layouts/MediaPlayerMax.vue'
export default {
  components: { BottomNav, TopNav, MediaPlayerMax },
  name: 'app',
  created() {
    this.$store.commit('computeInit')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
