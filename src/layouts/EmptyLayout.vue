<template>
    <div class="empty">
        <h1>Empty</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Empty"
    }
</script>

<style lang="scss" scoped>
   .empty {
       background-color: red;
   }
</style>