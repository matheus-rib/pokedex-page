import pokemonsServices from '@/services/pokemons'

const state = { pokemonsList: {} }

const actions = {
  async fetchPokemonsList({ commit }) {
    const { data } = await pokemonsServices.list()

    commit('setPokemonsList', data)
  }
}

const mutations = {
  setPokemonsList(state, payload) {
    state.pokemonsList = payload
  },
}

export default { namespaced: true, state, actions, mutations }
