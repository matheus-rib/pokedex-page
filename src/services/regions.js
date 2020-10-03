import api from './pokeApi'

function list() {
  return api.get('/region')
}

function listPokedexesInRegion(regionName) {
  return api.get(`/region/${regionName}`)
}

export default {
  list,
  listPokedexesInRegion,
}
