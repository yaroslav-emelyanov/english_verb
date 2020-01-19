<template>
    <div>
        <div class="text">Количество глаголов - <span>10</span></div>
        <button @click="start" class="btn btn-success m">Начать тест</button>
    </div>
</template>

<script>
    export default {
        name: "Start",
        methods: {
           start () {
               this.$store.dispatch('getTestVerbs', 10)
               this.$store.commit('setStep', 'Verb')
           }
        }
    }
</script>

<style lang="scss" scoped>
    .text {
        margin-top: 160px;
        text-align: center;
        span {
            font-weight: bold;
            color: #0084FF;
        }
    }

    .m {
        margin: 20px auto 0;
    }
</style>