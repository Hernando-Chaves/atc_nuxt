export const state = () => ({
    cursos: [],
    heroProgramas: []
})

export const getters = {
    getCursos(state) {
        return state.cursos
    },
    getHeroPrograms(state) {
        return state.heroProgramas
    }
}

export const mutations = {
    addCursos(state, payload) {
        state.cursos = payload
    },
    addHeroProgramas(state, payload) {
        state.heroProgramas = payload
    }
}

export const actions = {

    async cargaCursos({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/paginas/programas.gql')
        }
        await client.query(query)
            .then(resp => {
                commit('addCursos', resp.data.cPTCursosATC.nodes)
            })
            .catch(e => {
                console.log(e)
            })
    },
    async cargaHeroProgramas({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/paginas/programas.gql')
        }
        await client.query(query)
            .then(resp => {
                const { pages: { edges: [{ node: { template: { heroPaginas } } }] } } = resp.data
                commit('addHeroProgramas', heroPaginas)
            })
            .catch(e => {
                console.log(e)
            })
    }
}