export const state = () => ({
    posts: []
})

export const getters = {
    getPosts(state) {
        return state.posts
    }
}

export const mutations = {
    addPosts(state, payload) {
        state.posts = payload
    }
}

export const actions = {

    async cargarPosts({ commit }) {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require('~/queries/posts/posts.gql')
        }
        await client.query(query)
            .then(resp => {
                commit('addPosts', resp.data.posts.nodes)

            })
            .catch(e => {
                console.log(e)
            })
    }
}