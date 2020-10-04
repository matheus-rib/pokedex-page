import pokedexesServices from '@/services/pokedexes'
import pokemonsServices from '@/services/pokemons'
import TotalPagesCount from '@/lib/TotalPagesCount'
import { deepClone } from 'paliari-js-utils'

const state = { pokemonsList: [], filteredPokemonsList: [], pokemonsListPages: 0, totalPokemonsEntries: 0 }

const actions = {
  async fetchPokemonsList({ commit }, page = 1) {
    const { data } = await pokemonsServices.list(page)
    const totalPages = TotalPagesCount(data.count)
    commit('setPokemonsList', data.results)
    commit('setPokemonsListPages', totalPages)
    commit('setTotalPokemonsEntries', data.count)
  },

  async fetchPokemonsListInPokedex({ commit }, pokedexName) {
    const { data } = await pokedexesServices.listInPokedex(pokedexName)

    commit('setPokemonsList', data.pokemon_entries)
  },

  filterPokemonsList({ commit }, textToFilter) {
    commit('filterPokemonsList', textToFilter)
  },
}

const mutations = {
  setPokemonsList(state, payload) {
    state.pokemonsList = payload
    state.filteredPokemonsList = deepClone(state.pokemonsList)
  },

  filterPokemonsList(state, payload) {
    const originalList = deepClone(state.pokemonsList)
    if (payload) {
      const regExp = new RegExp(payload.toLowerCase(), 'g')
      state.filteredPokemonsList = originalList.filter(pokemon => !regExp[Symbol.search](pokemon.pokemon_species.name.toLowerCase()))
      return
    }

    state.filteredPokemonsList = originalList
  },

  setPokemonsListPages(state, payload) {
    state.pokemonsListPages = payload
  },

  setTotalPokemonsEntries(state, payload) {
    state.totalPokemonsEntries = payload
  }
}

export default { namespaced: true, state, actions, mutations }
