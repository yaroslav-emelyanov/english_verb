import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        correctAnswers: 0,
        list: [],
        step: 'start',
        testVerbs: [{
            id: '12312',
            translate: 'быть',
            infinitive: 'be',
            past_simple: 'was, were',
            past_participle: 'been'
        },
            {
                id: 'wqe',
                translate: 'быxzfzasddть',
                infinitive: 'besdfs',
                past_simple: 'wasdfs',
                past_participle: 'Asdsaa'
            }],
        counterVerb: 0
    },
    mutations: {
        setList(state, list) {
            state.list = list
        },
        setStep(state, step) {
            state.step = step
        },
        setTestVerbs(state, verbs) {
            state.testVerbs = verbs
        },
        incrementCounterVerb(state) {
            if (state.counterVerb + 1 === state.testVerbs.length) {
                state.counterVerb = 0
                state.step = 'result'
            } else {
                state.counterVerb++
            }
        },
        correctAnswers(state){
            state.correctAnswers++
        },
        restartTest(state) {
            state.step = 'start'
            state.testVerbs = []
            state.correctAnswers = 0
            state.counterVerb = 0
        }
    },
    actions: {
        async getList({commit}) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(url + '/api/getVerbsList')
                const json = await res.json()
                commit('setList', json)
            } catch (e) {
                console.log(e)
            }
        },
        async getTestVerbs({commit} , amount) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(`${url}/api/getTestVerbs?amount=${amount}`)
                const json = await res.json()
                commit('setTestVerbs', json)
            } catch (e) {
                console.log(e)
            }
        },
        async getStudyList({commit}) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(url + '/api/getVerbsStudy')
                const json = await res.json()
                commit('testVerbs', json)
            } catch (e) {
                console.log(e)
            }
        },
        async setUpend({commit}, id) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(`${url}/api/setUpend/${id}`)
                const json = await res.json()
                console.log('message: ', json.message)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        getList: s => s.list,
        step: s => s.step,
        testVerbs: s => s.testVerbs,
        currentVerb: s => s.testVerbs[s.counterVerb],
        counterVerb: s => s.counterVerb,
        getCorrectAnswers: s => s.correctAnswers
    }
})
