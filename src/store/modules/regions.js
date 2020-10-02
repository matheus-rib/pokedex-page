import regionsServices from '@/services/regions'

const state = { regionsList: {} }

const actions = {
  async fetchRegionsList({ commit }) {
    const { data } = await regionsServices.list()

    commit('setRegionsList', data)
  }
}

const mutations = {
  setRegionsList(state, payload) {
    state.regionsList = payload
  },
}

export default { namespaced: true, state, actions, mutations }
