<template>
    <section v-if="computePlayer" class="fixed flx">
        <div class="media-wrapper flx column grow-1 jc-sb">
            <div class="flx jc-sb max-media-head">
                <div class="flx ai-c">
                    <button class="br-50 scale-1" data-type="top-menu" @click="$store.commit('toggleMediaPlayer')">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 19.402 19.402">
                            <path d="M-10084.576-5985.635v11.906h11.533" transform="translate(11364.77 -2888.82) rotate(-45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
                <div class="flx jc-c column ai-c">
                    <div class="text-overflow-ellipsis pf uppercase fs-14">Playing from playlist</div>
                    <div class="text-overflow-ellipsis fw-500">My Playlist 1</div>
                </div>
                <div class="flx ai-c">
                    <button data-type="top-menu" class="br-50 scale-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 3.999 18">
                            <path d="M10069.163,6023a2,2,0,1,1,2,2A2,2,0,0,1,10069.163,6023Zm0-7a2,2,0,1,1,2,2A2,2,0,0,1,10069.163,6016Zm0-7a2,2,0,1,1,2,2A2,2,0,0,1,10069.163,6009Z" transform="translate(-10069.163 -6007.001)" fill="#fff"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div>dfd</div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MediaPlayerMax',
    computed: {
        ...mapGetters(['getCurrentPlayer']),
        computePlayer() {
            if (this.getCurrentPlayer.active && this.getCurrentPlayer.max) {
                return true
            }else {
                return false
            }
        }
    },
}
</script>
<style lang="scss" scoped>
$height: 50px;
section{
    background-color: $primary-bg;
    bottom: 0;
    width: 100%;
    height: 100%;
}
.media-wrapper{
    padding: 24px 16px;
}
.max-media-head{
    height: $height;
}
button[data-type="top-menu"]{
    height: $height;
    width: $height;
    background-color: transparent;
}
.text-overflow-ellipsis{
    max-width: 150px;
    text-align: center;
}
.pf{
    color: $icon-gray;
}
.pt{

}
</style>