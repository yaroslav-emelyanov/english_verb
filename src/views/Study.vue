<template>
    <div class="wrap">
        <div class="cards">
            <div class="card" :class="{upend: l.upend}" v-for="l of list" @click="upend(l.img, $event)">
                <div class="front">
                    <img class="card-img-top" :src="require(`@/assets/${l.img}.jpg`)" alt="image">
                    <div class="card-body">
                        <div class="card-forms">{{ l.infinitive }} - {{ l.past_simple }} - {{ l.past_participle }}</div>
                        <div class="card-translate">{{ l.translate }}</div>
                        <p class="card-text">{{ l.example }} - {{ l.example_translate }}</p>
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
            upend(hash, e) {
                const isBtn = e.target.classList.contains('btn')
                if (!isBtn) {
                    this.$store.dispatch('setUpend', hash)
                    const idx = this.list.findIndex(card => card.img === hash)
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
            if (!this.list.length) {
                this.$store.dispatch('getList')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        width: 60%;
        margin: 0 auto;
        padding-top: 3em;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .card {
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
        width: 100%;
        border-top-left-radius: calc(.25em - 1px);
        border-top-right-radius: calc(.25em - 1px);
    }

    .card-body {
        flex: 1 1 auto;
        padding: 1.25em;
    }

    .card-forms {
        font-weight: bold;
        margin-bottom: .75em;
    }

    .card-translate {
        font-size: 0.75em;
        margin-bottom: .5em;
    }

    .front, .back {
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25em;
        transition: transform 0.75s;
        backface-visibility: hidden;
    }

    .back {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
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