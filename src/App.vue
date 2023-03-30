<template>
  <div id="nav">
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <bottom-nav/>
</template>
<script>
import BottomNav from './components/includes/BottomNav.vue'
export default {
  components: { BottomNav },
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
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #1ED760;
    }
  }
}
</style>
