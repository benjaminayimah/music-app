<template>
    <section id="media_player_max" v-if="getCurrentPlayer.active" class="fixed flx blur">
        <div class="media-wrapper flx column grow-1 jc-sb">
            <div>
                <div class="flx jc-sb max-media-head">
                    <div class="flx ai-c">
                        <button class="br-50 scale-1" data-type="top-menu" @click="$store.commit('toggleMediaPlayer')">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 19.402 19.402">
                                <path d="M-10084.576-5985.635v11.906h11.533" transform="translate(11364.77 -2888.82) rotate(-45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                    <div class="flx jc-c column ai-c">
                        <div class="text-overflow-ellipsis gray uppercase fs-14">Playing from playlist</div>
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
                <div class="flx grow-1 img-wrap jc-c">
                    <img class="br-16" :src="getCurrentPlayer.player.image" :alt="getCurrentPlayer.player.trackname">
                </div>
            </div>
            <div class="flx column gap-16">
                <div class="flx jc-sb">
                    <div class="flx column">
                        <h3>{{ getCurrentPlayer.player.trackname }}</h3>
                        <span class="gray">{{ getCurrentPlayer.player.artist }}</span>
                    </div>
                    <button class="scale-1" @click="$store.commit('toggleLike')" data-type="media">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24.766 22.163" :class="{'liked': getCurrentPlayer.player.liked}">
                            <path d="M22.946,7.819a6.206,6.206,0,0,0-9.565.96A6.209,6.209,0,1,0,3.816,16.6l9.565,9.564L22.946,16.6A6.209,6.209,0,0,0,22.946,7.819Z" transform="translate(-0.998 -5.001)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
                <audio id="myAudio">
                    <source src="../../assets/audio/Zoe_Wees_-_Control.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div class="flx jc-sb">
                    <button class="scale-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18.19 18.545">
                            <path d="M10122.7,6042.185a.956.956,0,0,1,.152-1.345l2.029-1.614c-.092,0-.2.005-.32.005a6.7,6.7,0,0,1-4.985-2.158c-.17-.183-.325-.356-.46-.511l1.07-1.713c.229.295.485.592.785.91a4.822,4.822,0,0,0,3.564,1.561l-1.467-1.393a.964.964,0,0,1-.031-1.357.959.959,0,0,1,1.353-.031l3.508,3.337a.959.959,0,0,1-.063,1.441l-3.79,3.02a.941.941,0,0,1-.595.208A.954.954,0,0,1,10122.7,6042.185Zm-11.764-2.639a.957.957,0,0,1,.023-1.914h.038a6.214,6.214,0,0,0,4.293-1.9,11.567,11.567,0,0,0,1.813-2.7,14.7,14.7,0,0,1,2.473-3.561,6.712,6.712,0,0,1,4.985-2.158c.111,0,.218,0,.32.007l-2.029-1.617a.955.955,0,0,1-.152-1.344.965.965,0,0,1,.75-.361.934.934,0,0,1,.595.208l3.79,3.02a.959.959,0,0,1,.063,1.441l-3.508,3.337a.957.957,0,1,1-1.321-1.385l1.467-1.4a4.838,4.838,0,0,0-3.564,1.561,12.536,12.536,0,0,0-2.176,3.144,13.425,13.425,0,0,1-2.092,3.091,8.052,8.052,0,0,1-5.7,2.524Zm5.209-7.668a10.626,10.626,0,0,0-.854-1.065,6.277,6.277,0,0,0-4.293-1.9h-.038a.954.954,0,0,1-.956-.93.934.934,0,0,1,.262-.681.949.949,0,0,1,.671-.3h.066a8.014,8.014,0,0,1,5.7,2.527c.186.2.358.4.529.615l-1.086,1.736,0,0Z" transform="translate(-10110 -6024)" fill="#fff"/>
                        </svg>
                        <i></i>
                    </button>
                    <button class="scale-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 22.592 21.246">
                            <path d="M10140.658,6048.259l.076-17.24a2,2,0,0,0-3.009-1.736l-14.582,8.506v-6.73c0-1.1-.221-1.986-2-2h-1c-1.808-.007-2,.9-2,2v17c0,1.1.307,2,2,2h1c1.7,0,2-.9,2-2V6041.6l14.514,8.38a2,2,0,0,0,3-1.723Z" transform="translate(-10118.143 -6029.007)" fill="#fff"/>
                        </svg>
                    </button>
                    <button class="scale-1" @click="$store.commit('playPause')">
                        <svg xmlns="http://www.w3.org/2000/svg" height="66" viewBox="0 0 66 66">
                            <g id="pause" transform="translate(2 2)">
                                <circle cx="33" cy="33" r="33" transform="translate(-2 -2)" fill="#fff"/>
                                <path v-if="getCurrentPlayer.play" d="M10859.463,5352.107a1,1,0,0,1-1-1v-23a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v23a1,1,0,0,1-1,1Zm-13,0a1,1,0,0,1-1-1v-23a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v23a1,1,0,0,1-1,1Z" transform="translate(-10824 -5309)"/>
                                <path v-else d="M9,7.416V31.8a.643.643,0,0,0,.964.578l19.8-12.189a.677.677,0,0,0,0-1.149L9.964,6.845A.636.636,0,0,0,9,7.416Z" transform="translate(12.975 11.024)"/>
                            </g>
                        </svg>
                    </button>
                    <button class="scale-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 22.592 21.246">
                            <path d="M10118.219,6048.259l-.076-17.24a2,2,0,0,1,3.009-1.736l14.582,8.506v-6.73c0-1.1.221-1.986,2-2h1c1.808-.007,2,.9,2,2v17c0,1.1-.307,2-2,2h-1c-1.7,0-2-.9-2-2V6041.6l-14.514,8.38a2,2,0,0,1-3-1.723Z" transform="translate(-10118.143 -6029.007)" fill="#fff"/>
                        </svg>
                    </button>
                    <button class="scale-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.001" height="19.476" viewBox="0 0 21.001 19.476">
                            <path d="M10122.7,6093.408l-3-2.5a1,1,0,0,1,.008-1.544l3-2.446a1,1,0,0,1,1.264,1.551l-.854.694H10127a3.006,3.006,0,0,0,3-3v-7a3,3,0,0,0-3-3h-11a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3v2h0a5.005,5.005,0,0,1-5-5v-7a5,5,0,0,1,5-5h11a5.008,5.008,0,0,1,5,5v7a5.008,5.008,0,0,1-5,5h-3.868l.853.709a1,1,0,0,1-1.282,1.536Z" transform="translate(-10111.001 -6074.164)" fill="#fff"/>
                        </svg>
                        <i></i>
                    </button>
                </div>
                <div class="flx jc-sb">
                    <button class="scale-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 18.794 16.587">
                            <path d="M11044.173,6040.587a.88.88,0,1,1,0-1.759h.563a.88.88,0,1,1,0,1.759Zm5.506-1.329a1.519,1.519,0,0,1-1.52-1.513v-12.15a1.525,1.525,0,0,1,1.52-1.52h7.594a1.524,1.524,0,0,1,1.52,1.52v12.15a1.524,1.524,0,0,1-1.52,1.52Zm0-1.513h7.594v-12.15h-7.594Zm.76-3.8a3.037,3.037,0,1,1,3.038,3.04A3.036,3.036,0,0,1,11050.438,6033.948Zm1.518,0a1.52,1.52,0,1,0,1.521-1.517A1.524,1.524,0,0,0,11051.956,6033.948Zm-11.078,2.285a.881.881,0,0,1-.88-.882v-10.472a.881.881,0,0,1,.88-.879h4.589a.881.881,0,0,1,0,1.762h-3.706v8.71h3.706a.881.881,0,0,1,0,1.762Zm11.078-8.361a1.52,1.52,0,1,1,1.521,1.52A1.519,1.519,0,0,1,11051.956,6027.872Z" transform="translate(-11039.998 -6024)" fill="#fff"/>
                        </svg>
                        <i></i>
                    </button>
                    <div class="flx gap-8">
                        <button class="scale-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 16.017 15.982">
                                <path d="M10575.779,6039.107a2.843,2.843,0,0,1-.013-3.875l6.737-7.739a4.747,4.747,0,0,1,4.439-3.494,4.183,4.183,0,0,1,4.074,4.2,4.775,4.775,0,0,1-3.678,4.36l-.307.267-7.274,6.353a3.469,3.469,0,0,1-2.079.805A2.54,2.54,0,0,1,10575.779,6039.107Zm1.266-2.756a1.687,1.687,0,0,0-.3.59,1.012,1.012,0,0,0,.287,1.015.829.829,0,0,0,.648.325,1.79,1.79,0,0,0,.968-.391l6.385-5.576-.107-.072a4.637,4.637,0,0,1-2.192-2.255l-.061-.1Zm9.55-5.417a3.044,3.044,0,0,0,2.722-2.738,2.581,2.581,0,0,0-.72-1.765,2.29,2.29,0,0,0-1.653-.731,3.012,3.012,0,0,0-2.853,2.6,2.114,2.114,0,0,0,.15.892,5.093,5.093,0,0,0,1.514,1.558A2.134,2.134,0,0,0,10586.595,6030.934Z" transform="translate(-10575.001 -6023.999)" fill="#fff"/>
                            </svg>
                            <i></i>
                        </button>
                        <button class="scale-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 14.988 16.587">
                                <path d="M15.49,13.724a2.425,2.425,0,0,0-1.632.641L7.921,10.91A2.726,2.726,0,0,0,8,10.327a2.726,2.726,0,0,0-.075-.583l5.87-3.422a2.492,2.492,0,1,0-.8-1.824,2.726,2.726,0,0,0,.075.583L7.2,8.5a2.5,2.5,0,1,0,0,3.647l5.929,3.464a2.349,2.349,0,0,0-.067.541,2.431,2.431,0,1,0,2.431-2.431Zm0-10.059a.833.833,0,1,1-.833.833A.835.835,0,0,1,15.49,3.665ZM5.5,11.16a.833.833,0,1,1,.833-.833A.835.835,0,0,1,5.5,11.16ZM15.49,17a.833.833,0,1,1,.833-.833A.835.835,0,0,1,15.49,17Z" transform="translate(-3 -2)" fill="#fff"/>
                            </svg>
                        </button>
                        <button class="scale-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 15.425 14.739">
                                <path d="M8754.888,5814.738a1,1,0,0,1,0-2h13.425a1,1,0,1,1,0,2Zm0-4a1,1,0,0,1,0-2h13.425a1,1,0,1,1,0,2Zm2.079-5a2.87,2.87,0,0,1,0-5.74h9.266a2.87,2.87,0,1,1,0,5.74Zm-.869-2.87a.869.869,0,0,0,.869.869h9.266a.869.869,0,0,0,0-1.738h-9.266A.869.869,0,0,0,8756.1,5802.869Z" transform="translate(-8753.889 -5799.999)" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="lyrics" class="p-16 br-10 w-100">

                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MediaPlayerMax',
    computed: {
        ...mapGetters(['getCurrentPlayer']),
    },
}
</script>
<style lang="scss" scoped>
$height: 50px;
section{
    background-color: $primary-bg;
    width: 100%;
    height: 100%;
    transition: 0.4s all ease-in-out;
    background-image: linear-gradient(to bottom, rgba(2, 15, 102, 0.9), rgba(10, 11, 13, 1));
}

.media-wrapper{
    padding: 16px;
}
.max-media-head{
    height: $height;
}
button{
    background-color: transparent;
}
button[data-type=top-menu]{
    height: $height;
    width: $height;
    background-color: transparent;
}
button[data-type=media] {
    height: var(--mini-media-img-height);
    width: 42px;
    padding: 0;
}
.text-overflow-ellipsis{
    max-width: 150px;
    text-align: center;
}
.img-wrap{
    padding: 40px 0;
}
img{
    // height: 300px;
    max-width: 330px;
    -webkit-box-shadow: 0px -30px 61px 2px rgba(4, 14, 137, 1);
    -moz-box-shadow: 0px -30px 61px 2px rgba(4, 14, 137, 1);
    box-shadow: 0px -30px 61px 2px rgba(4, 14, 137, 1);
}

//lyrics

#lyrics{
    background-color: #0058B0;
    height: 80px;
}
</style>