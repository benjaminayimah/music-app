<template>
    <section v-if="getCurrentPlayer.active">
        <div class="wrapper flx ai-c gap-8 grow">
            <div class="img-wraper bg-img" :style="{ backgroundImage: 'url('+getCurrentPlayer.player.image+')'}"></div>
            <div class="title-wrapper flx jc-sb ai-c grow fw-500">
                <div class="flx column">
                    <h4>{{ getCurrentPlayer.player.trackname }}</h4>
                    <span>{{ getCurrentPlayer.player.artist }}</span>
                </div>
                <div class="flx">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 22.844 20.163">
                            <path d="M11045.072,6044.162a1.069,1.069,0,1,1,0-2.139h.684a1.069,1.069,0,1,1,0,2.139Zm6.693-1.615a1.846,1.846,0,0,1-1.848-1.839v-14.77a1.854,1.854,0,0,1,1.848-1.848h9.23a1.852,1.852,0,0,1,1.846,1.848v14.77a1.852,1.852,0,0,1-1.846,1.848Zm0-1.839h9.23v-14.77h-9.23Zm.922-4.615a3.692,3.692,0,1,1,3.693,3.7A3.691,3.691,0,0,1,11052.688,6036.093Zm1.846,0a1.848,1.848,0,1,0,1.848-1.844A1.852,1.852,0,0,0,11054.533,6036.093Zm-13.467,2.777a1.071,1.071,0,0,1-1.068-1.072v-12.729a1.071,1.071,0,0,1,1.068-1.069h5.578a1.071,1.071,0,0,1,0,2.142h-4.5v10.588h4.5a1.071,1.071,0,0,1,0,2.142Zm13.467-10.164a1.848,1.848,0,1,1,1.848,1.848A1.845,1.845,0,0,1,11054.533,6028.706Z" transform="translate(-11039.998 -6023.999)" fill="#fff"/>
                        </svg>
                    </button>
                    <button @click="$store.commit('toggleLike')">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24.766 22.163" :class="{'liked': getCurrentPlayer.player.liked}">
                            <path d="M22.946,7.819a6.206,6.206,0,0,0-9.565.96A6.209,6.209,0,1,0,3.816,16.6l9.565,9.564L22.946,16.6A6.209,6.209,0,0,0,22.946,7.819Z" transform="translate(-0.998 -5.001)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                    </button>
                    <button @click="$store.commit('playPause')">
                        <svg v-if="!getCurrentPlayer.play" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 15.2 18.999">
                            <path d="M8249.53,5247.25a.477.477,0,0,1-.481-.474v-18.051a.477.477,0,0,1,.481-.474h3.788a.477.477,0,0,1,.48.474v18.051a.477.477,0,0,1-.48.474Zm-10.451,0a.478.478,0,0,1-.48-.474v-18.051a.478.478,0,0,1,.48-.474h3.789a.477.477,0,0,1,.48.474v18.051a.477.477,0,0,1-.48.474Z" transform="translate(-8238.599 -5228.25)" fill="#fff"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 15.574 18.999">
                            <path d="M9,7.243V25.256a.475.475,0,0,0,.712.427l14.629-9.006a.5.5,0,0,0,0-.849L9.712,6.821A.47.47,0,0,0,9,7.243Z" transform="translate(-9 -6.751)" fill="#fff"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MediaPlayerMini',
    computed: {
        ...mapGetters(['getCurrentPlayer']),
        bgColor() {
            return this.getCurrentPlayer.player.bgColor
        }
    },
}
</script>
<style lang="scss" scoped>
section {
    padding: 8px;
    border-radius: 8px;
    background-color: v-bind(bgColor);
    margin: 8px;
}
.wrapper {
    height: var(--mini-media-img-height);
}
.img-wraper{
    height: var(--mini-media-img-height);
    width: var(--mini-media-img-height);
    border-radius: 6px;
    background-color: #666;
}
.title-wrapper{
    height: inherit;
    span{
        font-size: 0.9rem;
        color: $icon-gray;
    }
}
button {
    height: var(--mini-media-img-height);
    width: 42px;
    background-color: transparent;
    padding: 0;
}

</style>