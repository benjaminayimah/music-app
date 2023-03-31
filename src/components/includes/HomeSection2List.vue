<template>
    <div class="flx column grow gap-8">
        <span class="flx gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 19.272 21">
                <path d="M8627,5716.5a1,1,0,0,1-1-1,9.636,9.636,0,0,1,19.272,0,1,1,0,0,1-1,1Zm1.065-2h15.142a7.636,7.636,0,0,0-15.142,0ZM8631,5700a4.5,4.5,0,1,1,4.5,4.5A4.5,4.5,0,0,1,8631,5700Zm2,0a2.5,2.5,0,1,0,2.5-2.5A2.5,2.5,0,0,0,8633,5700Z" transform="translate(-8626 -5695.5)" fill="#b3b6b9"/>
            </svg>
            <span class="fs-14 capitalize">{{ discover.title }}</span>
        </span>
        <router-link to="/" class="scale-3">
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'HomeSection2List',
    props: ['discover']
}
</script>
<style lang="scss" scoped>
a {
    background-color: $secondary-bg;
    height: 550px;
    width: 100%;
    border-radius: 24px;
}
.capitalize {
    color: $icon-gray;
}
</style>