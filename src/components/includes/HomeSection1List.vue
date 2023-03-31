<template>
    <router-link to="/" class="flx wrap br-8 scale-2">
        <img :src="list.avatar" :alt="list.name" class="shrink-0">
        <div class="flx ai-c p-8">
            <h4>{{ list.name }}</h4>
        </div>
    </router-link>
</template>
<script>
export default {
    name: 'HomeSection1List',
    props: ['list'],

}
</script>
<style lang="scss" scoped>
$height: 60px;
.wrap{
    height: $height;
    background-color: $secondary-bg;
}
img{
    height: inherit;
    width: $height;
    background-color: #333;
    border-top-left-radius:  $br-8;
    border-bottom-left-radius:  $br-8;
}
.scale-2{
    transition: 0.1s all;
}
</style>