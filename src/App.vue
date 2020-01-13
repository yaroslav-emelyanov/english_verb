<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
  import CommonLayout from '@/layouts/CommonLayout.vue'
  import EmptyLayout from '@/layouts/EmptyLayout.vue'
  export default {
      computed: {
          layout () {
              return (this.$route.meta.layout || 'empty') + '-layout'
          }
      },
      components: {
          CommonLayout, EmptyLayout
      }
  }
</script>

<style lang="scss">

</style>
