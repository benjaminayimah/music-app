<template>
    <router-link to="/" class="flx wrap br-8 gap-8">
        <img :src="list.avatar" :alt="list.name">
        <div class="flx ai-c">
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
a {
    transition: 0.1s all;
}
</style>