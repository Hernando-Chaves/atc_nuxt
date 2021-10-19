export const state = () => ({
    heroPorqueAtc: []
})

export const getters = {
    getheroPorqueAtc(state) {
        return state.heroPorqueAtc
    }
}

export const mutations = {
    addheroPorqueAtc(state, payload) {
        state.heroPorqueAtc = payload
    }
}

export const actions = {

    async cargaPorqueAtc({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require("~/queries/paginas/porque-atc.gql")
        };

        await client
            .query(query)
            .then(resp => {
                const { pages: { edges: [{ node: { template: { heroPaginas } } }] } } = resp.data
                commit('addheroPorqueAtc', heroPaginas)
            })
            .catch(console.log);
    }
}
