import api from './pokeApi'

function list() {
  return api.get('/pokemon')
}

export default {
  list
}
