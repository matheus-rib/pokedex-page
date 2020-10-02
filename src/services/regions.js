import api from './pokeApi'

function list() {
  return api.get('/region')
}

export default {
  list
}
