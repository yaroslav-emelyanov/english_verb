import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
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
                let res = await fetch(url + '/api/getVerbsList')
                const json = await res.json()
                commit('setList', json)
            } catch (e) {
                console.log(e)
            }
        },
        async getStudyList({commit}) {
            try {
                const url = 'http://localhost:3000'
                let res = await fetch(url + '/api/getVerbsStudy')
                const json = await res.json()
                commit('setList', json)
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
        getList: s => s.list
    }
})
