<template>
    <div>
        <div class="count">{{ counter + 1 }}/{{ allQuestions }}</div>
        <div v-if="!ok" class="task">Напишите <span>{{ selectForm.short }}</span> форму глагола <span :title="currentVerb.translate">{{ currentVerb[selectWord] }}</span></div>
        <div v-else-if="success" class="task">Правильно!</div>
        <div v-else class="task">
            <p>Ваш ответ - <span>{{ text }}</span></p>
            <p>Правильный ответ - <span>{{ currentVerb[selectForm.long] }}</span></p>
        </div>
        <div class="form">
            <input v-if="!ok" v-model="text" class="input" type="text">
            <button v-if="!ok" @click="isOK" class="btn btn-success m">Ок</button>
            <button v-else @click="next" class="btn btn-success m">{{ IsEnd ? 'Закончить тест' : 'Следующий' }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Verb",
        data: () => ({
            text: '',
            ok: false,
            success: false,
            selectForm: null,
            selectWord: '',
            forms: [
                {short: 'v1', long: 'infinitive'},
                {short: 'v2', long: 'past_simple'},
                {short: 'v3', long: 'past_participle'},
            ]
        }),
        computed: {
            currentVerb() {
                return this.$store.getters.currentVerb
            },
            IsEnd() {
                const length = this.$store.getters.testVerbs.length
                const current = this.$store.getters.counterVerb
                return (current + 1 === length)
            },
            counter() {
                return this.$store.getters.counterVerb
            },
            allQuestions() {
                return this.$store.getters.testVerbs.length
            }
        },
        methods: {
            next() {
              this.text = ''
              this.ok = false
              this.success = false
              this.selectForm = null
              this.selectWord = ''
              this.forms = [
                  {short: 'v1', long: 'infinitive'},
                  {short: 'v2', long: 'past_simple'},
                  {short: 'v3', long: 'past_participle'},
              ]
              this.setVerb()
              this.$store.commit('incrementCounterVerb')
            },
            isOK () {
               if (!this.text.trim()) {
                   return
               }
               this.ok = true
                if (this.currentVerb[this.selectForm.long] === this.text.trim().toLowerCase())  {
                   this.success = true
                   this.$store.commit('correctAnswers')
                }
            },
          setVerb () {
              const idx = Math.floor(Math.random() * this.forms.length)
              this.selectForm = this.forms[idx]
              this.forms.splice(idx, 1)
              const randomSecond = Math.floor(Math.random() * this.forms.length)
              this.selectWord = this.forms[randomSecond].long
          }
        },
        created(){
          this.setVerb()
        },
        mounted() {
            const verbs = this.$store.getters.testVerbs
            if (!verbs.length) {
                this.$store.dispatch('getTestVerbs')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .count {
        margin-top: 1em;
        text-align: center;
    }

        .form {
        display: flex;
        justify-content: center;
        margin-top: 3em;
    }

    .task {
        margin-top: 7em;
        text-align: center;
    }

    span {
        cursor: pointer;
        font-weight: bold;
        color: #0084FF;
    }

    .input {
        text-align: center;
        padding: 0 1em;
        line-height: 2em;
        border: 1px solid #0084FF;
        border-radius: 0.25em;
        &:focus {
            outline: none;
        }
    }
</style>