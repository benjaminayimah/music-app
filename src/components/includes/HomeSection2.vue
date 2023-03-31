<template>
    <section class="flx gap-16">
        <home-section-2-list />
    </section>
</template>
<script>
import HomeSection2List from './HomeSection2List.vue'
export default {
  components: { HomeSection2List },
    name: 'HomeSection2',
}
</script>
<style lang="scss" scoped>
section {
    margin-bottom: 180px;
}
</style>