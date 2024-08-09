<template>
    <NuxtLayout name="model">
        <HomeModelViewer />
    </NuxtLayout>
  </template>
  
  <script>
  import ModelViewer from '~/components/ModelViewer.vue'
  
  export default {
    components: {
      ModelViewer
    }
  }
  </script>
  