<template>
    <div>
        <h3 class="result">Результат - <span>{{ correctAnswers }}</span> из <span>{{ amount }}</span></h3>
        <button @click="restart" class="btn btn-success m">Начать новый тест</button>
    </div>
</template>

<script>
    export default {
        name: "Result",
        methods: {
            restart () {
                this.$store.commit('restartTest')
            }
        },
        computed: {
            amount() {
                return this.$store.getters.testVerbs.length
            },
            correctAnswers() {
                return this.$store.getters.getCorrectAnswers
            }
        }
    }
</script>

<style lang="scss" scoped>
    .result {
        margin-top: 8em;
        text-align: center;
    }
    .m {
        display: block;
        margin: 0 auto;
    }
    span {
        cursor: pointer;
        font-weight: bold;
        color: #0084FF;
    }
</style>