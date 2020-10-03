import capitalize from './capitalize'
import normalize from './normalize'

export default {
  install: (Vue, option = {}) => {
    Vue.filter('capitalize', capitalize)
    Vue.filter('normalize', normalize)
  }
}
