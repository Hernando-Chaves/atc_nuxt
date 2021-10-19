export const state = () => ({
    heroEstudiantes: []
})

export const getters = {
    getHeroEstudiantes(state) {
        return state.heroEstudiantes
    }
}

export const mutations = {
    addHeroEstudiantes(state, payload) {
        state.heroEstudiantes = payload
    }
}

export const actions = {

    async cargaHeroEstudiantes({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/paginas/estudiantes.gql')
        }

        await client.query(query)
            .then(resp => {
                const { pages: { edges: [{ node: { template: { heroPaginas } } }] } } = resp.data
                commit('addHeroEstudiantes', heroPaginas)
            })
    }
}