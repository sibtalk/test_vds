export const state = () => ({
  loading: false,
  error: null,
  success: null,
  testVDS: ''
})

export const mutations = {
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error = null
  },
  setSuccess (state, payload) {
    state.success = payload
  },
  clearSuccess (state) {
    state.success = null
  },
  settestVDS (state, payload) {
    state.testVDS = payload
  },
}

export const actions = {
  setLoading ({commit}, payload) {
    commit('setLoading', payload)
  },
  setError ({commit}, payload) {
    commit('setError', payload)
  },
  clearError ({commit}) {
    commit('clearError')
  },
  setSuccess ({commit}, payload) {
    commit('setSuccess', payload)
  },
  clearSuccess ({commit}) {
    commit('clearSuccess')
  },
  async testVDS({commit}){
    const treeShow = await this.$axios.$post('https://api.fermka.ru/vds/',{
      request: "test"
    })
    console.log(treeShow)
    commit('settestVDS', treeShow)
  },
}

export const getters = {
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  },
  success (state) {
    return state.success
  },
  testVDS (state) {
    return state.testVDS
  }
}
