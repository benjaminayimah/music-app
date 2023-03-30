<template>
  <teleport to="#page_title">
    Good morning
  </teleport>
  <teleport to="#top_nav">
    <home-top-nav />
  </teleport>
  <div class="home">
    <nav class="flx gap-8 ai-c sticky-top blur">
      <li><router-link to="/" class="flx ai-c">Music</router-link></li>
      <li><router-link to="/" class="flx ai-c">Podcasts</router-link></li>
      <li><router-link to="/" class="flx ai-c">Shows</router-link></li>
    </nav>
    <main>
      <home-section-1 />
    </main>
  </div>
</template>

<script>
import HomeSection1 from '../components/includes/HomeSection1.vue'
import HomeTopNav from '../components/includes/HomeTopNav.vue'
// @ is an alias to /src
export default {
  components: { HomeTopNav, HomeSection1 },
  name: 'Home',
}
</script>
<style lang="scss" scoped>
.home{
  height: 1000px;
}
nav{
  height: 50px;
  background-color: rgba(10, 11, 13, 0.7);
}
a{
  background-color: $secondary-bg;
  padding: 8px 16px;
  border-radius: 20px;
}
</style>
