<template>
  <div class="home">
    <nav class="flx gap-8 ai-c">
      <li><router-link to="/me" class="flx ai-c">Music</router-link></li>
      <li><router-link to="/me" class="flx ai-c">Podcasts</router-link></li>
      <li><router-link to="/me" class="flx ai-c">Shows</router-link></li>

    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
.home{
  height: 1000px;
}
nav{
  height: 50px;
  position: sticky;
  top: 0;
}
a{
  background-color: #35373B;
  padding: 8px 16px;
  border-radius: 20px;
}
</style>
