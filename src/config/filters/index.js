import capitalize from './capitalize'
import normalize from './normalize'
import pokedexEntry from './pokedexEntry'

export default {
  install: (Vue, option = {}) => {
    Vue.filter('capitalize', capitalize)
    Vue.filter('normalize', normalize)
    Vue.filter('pokedexEntry', pokedexEntry)
  }
}
