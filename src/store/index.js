import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [
            {
                id: '213',
                translate: 'быть, являться',
                infinitive: 'be',
                past_simple: 'was, were',
                past_participle: 'been',
                img: '86280ac8a7f8881407ba060c76d72d6a',
                example: 'i was at school',
                example_translate: 'я был в школе',
                upend: true
            }
        ]
    },
    mutations: {
        setList(state, list) {
            state.list = list
        }
    },
    actions: {
        async getList({commit}) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(url + '/api/getVerbs')
                const json = await res.json()
                commit('setList', json)
            } catch (e) {
                console.log(e)
            }
        },
        async setUpend({commit}, hash) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(`${url}/api/setUpend/${hash}`)
                const json = await res.json()
                console.log('message: ', json.message)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        getList: s => s.list
    }
})
