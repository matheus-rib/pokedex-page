import api from './pokeApi'

function list() {
  return api.get('/pokedex')
}

function listInPokedex(pokedexName) {
  return api.get(`/pokedex/${pokedexName}`)
}

export default {
  list,
  listInPokedex,
}
