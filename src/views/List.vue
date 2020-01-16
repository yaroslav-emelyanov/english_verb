<template>
    <div class="wrap">
        <ul class="list-group header">
            <li class="list-group-item">Перевод</li>
            <li class="list-group-item">V1</li>
            <li class="list-group-item">V2</li>
            <li class="list-group-item">V3</li>
        </ul>
        <div class="list">
            <ul class="list-group" v-for="l of list" :key="l.id">
                <li class="list-group-item">
                    <div class="verb">{{ l.translate }}</div>
                    <div class="btn" @click="listen(l.translate, 'RU')"
                         :style="iconSound"></div>
                </li>
                <li class="list-group-item">
                    <div class="verb">{{ l.infinitive }}</div>
                    <div class="btn" @click="listen(l.infinitive)"
                         :style="iconSound"></div>
                </li>
                <li class="list-group-item">
                    <div class="verb">{{ l.past_simple }}</div>
                    <div class="btn" @click="listen(l.past_simple)"
                         :style="iconSound"></div>
                </li>
                <li class="list-group-item">
                    <div class="verb">{{ l.past_participle }}</div>
                    <div class="btn" @click="listen(l.past_participle)"
                         :style="iconSound"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import listenMix from '@/mixins/listen.mixin'
    export default {
        name: 'List',
        mixins: [listenMix],
        data: () => ({
            voiceLoaded: false
        }),
        computed: {
            iconSound() {
                return {background: `url(${require('../assets/sound_btn.png')}) center center/contain no-repeat`}
            },
            list() {
                return this.$store.getters.getList
            }
        },
        mounted() {
            this.$store.dispatch('getList')
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.25rem;
        cursor: pointer;
        &:hover {
            border: 1px solid #0084FF;
        }
        &:active {
            box-shadow: 0 0 4px 1px rgba(0, 132, 255, 0.31);
        }
    }

    .wrap {
        padding-top: 3rem;
    }
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .list-group {
        display: flex;
        padding-left: 0;
        margin: 0;
        width: 60%;
        &:last-child {
            .list-group-item {
                border-top: none;
                &:first-child {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0.75rem;
                }
                &:last-child {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0.75rem;
                }
            }
        }
    }
    .list-group-item {
        position: relative;
        padding: .75rem 1.25rem;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.125);
        border-top: none;
        width: 33.33%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &+.list-group-item {
            border-top-width: 1px;
            border-left-width: 0;
        }
    }

    .header {
        margin: 0 auto;
        .list-group-item {
            background-color: rgba(0, 132, 255, 0.76);
            border-top: 1px solid rgba(0,0,0,.125);
            &:last-child {
                border-top-right-radius: .75rem;
                border-bottom-left-radius: 0;
            }
            &:first-child {
                border-top-left-radius: .75rem;
                border-bottom-right-radius: 0;
            }
        }
    }
</style>