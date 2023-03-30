<template>
    <section class="grid gap-8 grid-col-2">
        <home-section-1-list v-for="list in getArtists.slice(0, 4)" :key="list.id" v-bind:list="list"/>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import HomeSection1List from './HomeSection1List.vue';
export default {
  components: { HomeSection1List },
    name: 'HomeSection1',
    computed: mapGetters(['getArtists'])
}
</script>
<style lang="scss" scoped>
section{
    margin: 16px 0;
}
</style>