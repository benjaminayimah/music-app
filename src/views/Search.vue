<template>
  <teleport to="#page_title">
    Search
  </teleport>
  <div class="search">
    <div class="sticky-top ai-c flx">
      <button class="flx grow ai-c gap-8 br-6 jc-fs" data-type="toggle">
        <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 28.13 29.233">
          <path d="M26.19,28.848l-6.316-7.367a12.134,12.134,0,1,1,1.568-1.561l6.422,7.493a1.1,1.1,0,1,1-1.675,1.436ZM2.206,12.135a9.928,9.928,0,1,0,9.928-9.928A9.94,9.94,0,0,0,2.206,12.135Z"/>
        </svg>
        <span>What do you want to listen to?</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style lang="scss" scoped>
.search{
  height: 1000px;
}
button[data-type="toggle"]{
  height: 52px;
  background-color: $white;
  padding: 0 12px;
  transition: 0.1s all;
  span{
    color: $dark-gray;
    font-size: 1.1rem;
    font-weight: 700;
  }
}
svg {
  path {
    fill: $dark-gray;
  }
}
.sticky-top{
  height: 68px;
}
</style>
