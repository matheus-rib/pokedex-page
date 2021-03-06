import pokedexes from './pokedexes'
import pokemons from './pokemons'
import regions from './regions'

const componentImport = view => () => import(`@/views/${view}.vue`)

export default [
  {
    path: '/',
    name: 'home',
    component: componentImport('Index'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: componentImport('About'),
    meta: {
      title: 'About',
    },
  },
  ...pokedexes(componentImport),
  ...pokemons(componentImport),
  ...regions(componentImport),
]