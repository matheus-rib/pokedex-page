export default componentImport => [
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
]