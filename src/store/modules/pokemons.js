import pokedexesServices from '@/services/pokedexes'

const state = { pokemonsList: [] }

const actions = {
  async fetchPokemonsListInPokedex({ commit }, pokedexName) {
    const { data } = await pokedexesServices.list(pokedexName)

    commit('setPokemonsList', data.pokemon_entries)
  }
}

const mutations = {
  setPokemonsList(state, payload) {
    state.pokemonsList = payload
  },
}

export default { namespaced: true, state, actions, mutations }
