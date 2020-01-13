<template>
    <div class="common">
        <h1>Common</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Common"
    }
</script>

<style lang="scss" scoped>
    .common {
        background-color: blue;
    }
</style>