export const state = () => ({
    egresados: [],
    heroEgresados: []
})

export const getters = {
    getEgresados(state) {
        return state.egresados
    },
    getHeroEgresados(state) {
        return state.heroEgresados
    }
}

export const mutations = {
    addEgresados(state, payload) {
        state.egresados = payload
    },
    addHeroEgresados(state, payload) {
        state.heroEgresados = payload
    }
}

export const actions = {

    async cargaEgresados({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/cpt/egresados.gql')
        }
        await client.query(query)
            .then(resp => {
                commit('addEgresados', resp.data.egresados.nodes)
            })
            .catch(e => {
                console.log(e)
            })
    },
    async cargaHeroEgresados({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/cpt/egresados.gql')
        }
        await client.query(query)
            .then(resp => {
                const { pages: { edges: [{ node: { template: { heroPaginas } } }] } } = resp.data;
                commit('addHeroEgresados', heroPaginas)
            })
            .catch(e => {
                console.log(e)
            })
    }
}