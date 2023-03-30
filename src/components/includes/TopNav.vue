<template>
    <header class="flx ai-c gap-8 jc-sb">
        <h2 id="page_title"></h2>
        <nav class="flx gap-4" id="top_nav"></nav>
    </header>
</template>
<script>
export default {
    name: 'TopNav',
}
</script>
<style lang="scss" scoped>
h2{
    text-transform: capitalize;
}
header{
    height: var(--topnav-height);
    margin-top: 32px;
}
nav{
    margin-right: -8px;
}
</style>