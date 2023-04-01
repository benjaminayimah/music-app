<template>
    <div class="flx column grow-1 gap-8">
        <span class="flx gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 19.272 21">
                <path d="M8627,5716.5a1,1,0,0,1-1-1,9.636,9.636,0,0,1,19.272,0,1,1,0,0,1-1,1Zm1.065-2h15.142a7.636,7.636,0,0,0-15.142,0ZM8631,5700a4.5,4.5,0,1,1,4.5,4.5A4.5,4.5,0,0,1,8631,5700Zm2,0a2.5,2.5,0,1,0,2.5-2.5A2.5,2.5,0,0,0,8633,5700Z" transform="translate(-8626 -5695.5)" fill="#b3b6b9"/>
            </svg>
            <span class="fs-14 capitalize">{{ discover.title }}</span>
        </span>
        <router-link to="/" class="scale-3 flx column">
            <div class="flx jc-c ai-c img-wrapper">
                <img class="br-8" :src="discover.image" :alt="discover.caption" data-type="cover">
            </div>
            <div class="flx column bt-c gap-16">
                <div class="flx column gap-8">
                    <div class="flx gap-8 ai-c">
                        <img class="br-6" :src="discover.image" :alt="discover.caption" data-type="sub">
                        <div class="flx column">
                            <h3>{{ discover.caption }}</h3>
                            <span class="fs-14">{{ discover.type }}</span>
                        </div>
                    </div>
                    <div class="fs-14">Artist name, Chris Brown, Black Sherif, Wizkid</div>
                </div>
                <div class="flx jc-sb">
                    <div class="flx gap-16">
                        <button class="scale-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 29.251 29.251">
                                <path d="M7643.75,5304.625a14.625,14.625,0,1,1,14.625,14.625A14.624,14.624,0,0,1,7643.75,5304.625Zm5.675-8.951a12.663,12.663,0,1,0,8.951-3.705A12.575,12.575,0,0,0,7649.424,5295.674Zm7.826,15.315v-5.24h-5.238a1.09,1.09,0,0,1-1.126-1.125,1.077,1.077,0,0,1,1.126-1.125h5.238v-5.238a1.125,1.125,0,1,1,2.25,0v5.238h5.24a1.125,1.125,0,0,1,0,2.249h-5.24v5.24a1.119,1.119,0,0,1-1.125,1.125A1.09,1.09,0,0,1,7657.25,5310.989Z" transform="translate(-7643.75 -5290)" fill="#fff"/>
                            </svg>
                        </button>
                        <button class="scale-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 4 22">
                                <path d="M7976.863,5326a2,2,0,1,1,2,2A2,2,0,0,1,7976.863,5326Zm0-9a2,2,0,1,1,2,2A2,2,0,0,1,7976.863,5317Zm0-9a2,2,0,1,1,2,2A2,2,0,0,1,7976.863,5308Z" transform="translate(-7976.863 -5306)" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                    <div class="flx gap-16 ai-c">
                        <span class="fw-500">50 songs</span>
                        <button class="scale-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 40.055 40.055">
                                <path id="Icon_ionic-ios-play-circle" data-name="Icon ionic-ios-play-circle" d="M23.4,3.375A20.027,20.027,0,1,0,43.43,23.4,20.024,20.024,0,0,0,23.4,3.375Zm8.069,20.4L18.261,31.77a.428.428,0,0,1-.645-.376V15.411a.427.427,0,0,1,.645-.376l13.21,7.992A.441.441,0,0,1,31.471,23.778Z" transform="translate(-3.375 -3.375)" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'HomeSection2List',
    props: ['discover'],
}
</script>
<style lang="scss" scoped>
a {
    background-color: $secondary-bg;
    width: 100%;
    border-radius: 24px;
}
.capitalize {
    color: $icon-gray;
}
.img-wrapper{
    height: 350px;
}
img[data-type=cover]{
    max-width: 200px;
}
img[data-type=sub]{
    width: 50px;
    height: 50px;
}
.bt-c{
    padding: 0 24px 24px 24px;
}
button{
    background-color: transparent;
}
</style>