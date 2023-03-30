<template>
    <teleport to="#page_title">
        Your library
    </teleport>
    <teleport to="#top_nav">
        <library-top-nav />
    </teleport>
    <div class="library p-l-r-16">
      <h1>This is library page</h1>
    </div>
  </template>
  <script>
import LibraryTopNav from '../components/includes/LibraryTopNav.vue'
  export default {
  components: { LibraryTopNav },
    name: 'Library'
  }
  </script>
  