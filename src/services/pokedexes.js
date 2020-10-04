import api from './pokeApi'

function list(pokedexName) {
  return api.get(`/pokedex/${pokedexName}`)
}

export default {
  list
}
