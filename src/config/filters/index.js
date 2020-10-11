import capitalize from './capitalize'
import height from './height'
import normalize from './normalize'
import pokedexEntry from './pokedexEntry'
import weight from './weight'

export default {
  install: (Vue, option = {}) => {
    Vue.filter('capitalize', capitalize)
    Vue.filter('height', height)
    Vue.filter('normalize', normalize)
    Vue.filter('pokedexEntry', pokedexEntry)
    Vue.filter('weight', weight)
  }
}
