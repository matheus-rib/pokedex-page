import api from './pokeApi'
import PaginationOffsetHelper from '@/lib/PaginationOffsetHelper'

function list(page) {
  const offset = PaginationOffsetHelper(page)
  return api.get(`/pokemon?offset=${offset}`)
}

function show(pokemonName) {
  return api.get(`/pokemon/${pokemonName}`)
}

export default {
  list,
  show,
}
