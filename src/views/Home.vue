<template>
  <teleport to="#page_title">
    Good morning
  </teleport>
  <teleport to="#top_nav">
    <home-top-nav />
  </teleport>
  <div class="home">
    <nav class="flx gap-8 ai-c sticky-top blur p-l-r-16">
      <button v-for="category in getCategories" :key="category.id" class="flx ai-c scale-2 capitalize">{{ category.name }}</button>
    </nav>
    <main class="p-l-r-16">
      <home-section-1 />
      <home-section-2 />
    </main>
  </div>
</template>

<script>
import WinTopMixin from '../mixins/WinTopMixin';
import HomeSection1 from '../components/includes/HomeSection1.vue'
import HomeTopNav from '../components/includes/HomeTopNav.vue'
import HomeSection2 from '../components/includes/HomeSection2.vue';
import { mapGetters } from 'vuex';
// @ is an alias to /src
export default {
  components: { HomeTopNav, HomeSection1, HomeSection2 },
  name: 'Home',
  mixins: [WinTopMixin],
  computed: mapGetters(['getCategories'])
}
</script>
<style lang="scss" scoped>
nav{
  height: 50px;
  background-color: rgba(10, 11, 13, 0.7);
}
button{
  background-color: $secondary-bg;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(69, 70, 75, 0.5);
  color: $white;
  height: 40px;
  font-size: inherit;
}
</style>
