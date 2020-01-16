<template>
    <div class="wrap">
        <div class="cards">
            <div class="card" :class="{upend: l.upend}" v-for="l of list" @click="upend(l.id, $event)">
                <div class="front">
                    <div class="card-img-top" :style="{background: `url(${l.img ? `http://localhost:3000/img/${l.img}.jpg` :  'http://placehold.it/286x180'}) center center/cover no-repeat`}"></div>
                    <div class="card-body">
                        <div class="card-forms">{{ l.infinitive }} - {{ l.past_simple }} - {{ l.past_participle }}</div>
                        <div class="card-translate">{{ l.translate }}</div>
                        <p class="card-text">- {{ l.example }}</p>
                        <p class="card-text">- {{ l.example_translate }}</p>
                        <div @click="listen(l.example)" class="btn" :style="iconSound"></div>
                    </div>
                </div>
                <div class="back">
                    <span>{{ l.infinitive }} - {{ l.past_simple }} - {{ l.past_participle }}</span>
                    <span>{{ l.translate }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import listenMix from '@/mixins/listen.mixin'
    export default {
        name: "Study",
        mixins: [listenMix],
        data: () => ({

        }),
        methods: {
            upend(id, e) {
                const isBtn = e.target.classList.contains('btn')
                if (!isBtn) {
                    this.$store.dispatch('setUpend', id)
                    const idx = this.list.findIndex(card => card.id === id)
                    this.list[idx].upend = !this.list[idx].upend
                }
            }
        },
        computed: {
            iconSound() {
                return {background: `url(${require('../assets/sound_btn.png')}) center center/contain no-repeat`}
            },
            list () {
                return this.$store.getters.getList
            }
        },
        mounted () {
            this.$store.dispatch('getStudyList')
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        width: 90%;
        margin: 0 auto;
        padding-top: 3em;
        padding-bottom: 3em;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .card {
        height: 400px;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-clip: border-box;
        perspective: 1000px;
        cursor: pointer;
        &.upend {
            .front {
                transform: rotateY(180deg);
            }

            .back {
                transform: rotateY(360deg);
            }
        }
    }

    .card-img-top {
        height: 50%;
        border-top-left-radius: calc(.25em - 1px);
        border-top-right-radius: calc(.25em - 1px);
    }

    .card-body {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.75em;
        padding-top: 1.25em;
    }
    .card-text {
        margin: 0;
        font-size: 1em;
    }
    .card-forms {
        font-weight: bold;
    }

    .card-translate {
        font-size: 0.75em;
    }

    .front, .back {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25em;
        transition: transform 0.75s;
        backface-visibility: hidden;
    }

    .back {
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        transform: rotateY(180deg);
        color: white;
        background-color: rgba(0, 132, 255, 0.81);
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
            font-size: 1em;
        }
    }

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
</style>