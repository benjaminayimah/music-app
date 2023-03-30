<template>
  <top-nav />
  <router-view/>
  <bottom-nav/>
</template>
<script>
import BottomNav from './components/includes/BottomNav.vue'
import TopNav from './components/includes/TopNav.vue'
export default {
  components: { BottomNav, TopNav },
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
