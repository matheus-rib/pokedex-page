import pokedexesServices from "@/services/pokedexes"
import { deepClone } from "paliari-js-utils"

const state = { pokedexesList: [], filteredPokedexesList: [] }

const actions = {
  async fetchPokedexesList({ commit }) {
    const { data } = await pokedexesServices.list()
    commit('setPokedexesList', data.results)
  },

  filterPokedexesList({ commit }, textToFilter) {
    commit('filterPokedexesList', textToFilter)
  },
}

const mutations = {
  setPokedexesList(state, payload) {
    state.pokedexesList = payload
    state.filteredPokedexesList = deepClone(state.pokedexesList)
  },

  filterPokedexesList(state, payload) {
    const originalList = deepClone(state.pokedexesList)
    if (payload) {
      const regExp = new RegExp(payload.toLowerCase(), 'g')
      state.filteredPokedexesList = originalList.filter(pokemon => !regExp[Symbol.search](pokemon.name.toLowerCase()))
      return
    }

    state.filteredPokedexesList = originalList
  },
}

export default { namespaced: true, state, actions, mutations }
