<template>
    <section class="flx gap-24 column">
        <home-section-2-list v-for="discover in getDiscover" :key="discover.id" v-bind:discover="discover" />
    </section>
</template>
<script>
import HomeSection2List from './HomeSection2List.vue'
import { mapGetters } from 'vuex';
export default {
    components: { HomeSection2List },
    name: 'HomeSection2',
    computed: mapGetters(['getDiscover'])

}
</script>
<style lang="scss" scoped>
section {
    margin: 24px 0 180px 0;
}
</style>