<template>
  <teleport to="#page_title">
    Good morning
  </teleport>
  <teleport to="#top_nav">
    <home-top-nav />
  </teleport>
  <div class="home">
    <nav class="flx gap-8 ai-c sticky-top blur p-l-r-16">
      <li><router-link to="/" class="flx ai-c">Music</router-link></li>
      <li><router-link to="/" class="flx ai-c">Podcasts</router-link></li>
      <li><router-link to="/" class="flx ai-c">Shows</router-link></li>
    </nav>
    <main class="p-l-r-16">
      <home-section-1 />
    </main>
  </div>
</template>

<script>
import WinTopMixin from '../mixins/WinTopMixin';
import HomeSection1 from '../components/includes/HomeSection1.vue'
import HomeTopNav from '../components/includes/HomeTopNav.vue'
// @ is an alias to /src
export default {
  components: { HomeTopNav, HomeSection1 },
  name: 'Home',
  mixins: [WinTopMixin]
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
