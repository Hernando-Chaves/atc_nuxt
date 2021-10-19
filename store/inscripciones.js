export const state = () => ({
    heroInscripciones: []
})

export const getters = {
    getHeroInscripciones(state) {
        return state.heroInscripciones
    }
}

export const mutations = {
    addHeroInscripciones(state, payload) {
        state.heroInscripciones = payload
    }
}

export const actions = {

    async cargarHeroInscripciones({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/paginas/inscripciones.gql')
        }
        await client.query(query)
            .then(resp => {
                const { pages: { edges: [{ node: { template: { heroPaginas } } }] } } = resp.data;
                commit('addHeroInscripciones', heroPaginas)
            })
    }
}