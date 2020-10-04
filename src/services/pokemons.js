import api from './pokeApi'
import PaginationOffsetHelper from '@/lib/PaginationOffsetHelper'

function list(page) {
  const offset = PaginationOffsetHelper(page)
  return api.get(`/pokemon?offset=${offset}`)
}

export default {
  list,
}
