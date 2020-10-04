import pokedexes from './pokedexes'

export default componentImport => [
  {
    path: '/regions',
    component: componentImport('regions/Base'),
    children: [
      {
        path: '/',
        name: 'regions.index',
        component: componentImport('regions/Index'),
        meta: {
          title: 'Regions',
        }
      },
      {
        path: '/:regionName',
        name: 'regions.pokedexesList',
        component: componentImport('regions/PokedexList'),
        meta: {
          title: 'Pokedexes',
        }
      },
      {
        path: '/pokedex/:pokedexName',
        component: componentImport('regions/pokedex/Base'),
        children: [
          {
            path: '/',
            name: 'regions.pokedex.pokemonsList',
            component: componentImport('regions/pokedex/PokemonsList'),
            meta: {
              title: 'Pokemons',
            }
          },
        ],
      }
    ],
  }
]