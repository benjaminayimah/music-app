<template>
    <nav>
        <media-player-mini />
        <div class="flx hold" :class="[{ 'mb-16' : getiPhone}, { 'is-phone' : getPhone}]">
            <li>
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 25.452 27.783">
                        <path class="path-nofill" data-stroke="stroke" d="M-7915.228-5106.3v-18.392l12.111-7.391,11.341,7.391v18.392h-8.878v-9.333h-5.977v9.333Z" transform="translate(7916.228 5133.086)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                    <span>Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 25.5 26.5">
                    <g  transform="translate(7787 5132)">
                        <path class="path-fill" data-stroke="nostroke" d="M23.741,26.15l-5.725-6.679a11,11,0,1,1,1.422-1.415l5.822,6.792a1,1,0,1,1-1.518,1.3ZM2,11a9,9,0,1,0,9-9A9.01,9.01,0,0,0,2,11Z" transform="translate(-7787 -5132)"/>
                        <circle cx="4" cy="4" r="6" transform="translate(-7780 -5125)" fill="#fff"/>
                    </g>
                    </svg>
                    <span>Search</span>
                </router-link>
            </li>
            <li>
                <router-link to="/library">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 25 25">
                        <path class="library-icon path-fill" data-stroke="nostroke" d="M8,24V1a1,1,0,1,1,2,0V24a1,1,0,0,1-2,0ZM0,24V1A1,1,0,0,1,2,1V24a1,1,0,0,1-2,0Zm23.09-.587-10-22A1,1,0,0,1,14.91.586l10,22a1,1,0,1,1-1.821.827Z"/>
                    </svg>
                    <span>library</span>
                </router-link>
            </li>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';
import MediaPlayerMini from '../layouts/MediaPlayerMini.vue';
export default {
  components: { MediaPlayerMini },
    name: 'BottomNav',
    computed: mapGetters(['getiPhone', 'getPhone'])
}
</script>
<style lang="scss" scoped>
nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    
    .hold{
        height: 58px;
        padding: 0 8%;
    }
    li {
        max-width: 33.33%;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        height: inherit;
        a {
            display: inherit;
            flex-grow: inherit;
            justify-content: inherit;
            align-items: inherit;
            height: inherit;
            flex-direction: column;
            gap: 4px;
        }
        &:hover {
            span {
                color: $white;
            }
            path[data-stroke="stroke"]  {
                stroke: $white;
            }
            .path-fill{
                fill: $white;
            }
        }
  }
  span{
    color: $icon-gray;
    font-size: 0.76rem;
    text-transform: capitalize;
  }
  svg {
    path[data-stroke="stroke"]  {
        stroke: $icon-gray;
    }
    .path-fill{
        fill: $icon-gray;
    }
    circle {
        display: none;
    }
  }
  .router-link-exact-active{
    & span{
        font-weight: 500;
        color: $white;
    }
    & svg {
        path {
            fill: $white;
            }
        }
        .path-nofill {
            stroke: $white;
        }
        .library-icon{
            stroke-width: 2px;
            stroke: $white;
        }
        circle{
            display: block;
        }
    }
}
svg{
    flex-shrink: 0;
}
</style>