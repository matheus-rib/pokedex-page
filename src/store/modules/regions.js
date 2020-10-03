import regionsServices from '@/services/regions'
import { deepClone } from 'paliari-js-utils'

const state = { regionsList: {}, filteredRegionsList: {} }

const actions = {
  async fetchRegionsList({ commit }) {
    const { data } = await regionsServices.list()

    commit('setRegionsList', data)
  },

  filterRegionsList({ commit }, textToFilter) {
    commit('filterRegionsList', textToFilter)
  },
}

const mutations = {
  setRegionsList(state, payload) {
    state.regionsList = payload
    state.filteredRegionsList = deepClone(state.regionsList)
  },

  filterRegionsList(state, payload) {
    if (payload) {
      const regExp = new RegExp(payload.toLowerCase(), 'g')
      const originalList = deepClone(state.regionsList)
      state.filteredRegionsList.results = originalList.results.filter(region => !regExp[Symbol.search](region.name.toLowerCase()))
      return
    }

    state.filteredRegionsList.results = state.regionsList.results
  },
}

export default { namespaced: true, state, actions, mutations }
