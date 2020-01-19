<template>
    <div>
        <div class="text">Количество глаголов -
            <select v-model="amount">
                <option v-for="opt of options" :value="opt">{{ opt }}</option>
            </select>
        </div>
        <button @click="start" class="btn btn-success m">Начать тест</button>
    </div>
</template>

<script>
    export default {
        name: "Start",
        data: () => ({
            amount: 10,
            options: [5, 6, 7, 8, 9, 10]
        }),
        methods: {
            async start() {
                await this.$store.dispatch('getTestVerbs', this.amount)
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
            cursor: pointer;
            font-weight: bold;
            color: #0084FF;
        }
    }

    .m {
        margin: 20px auto 0;
    }
</style>