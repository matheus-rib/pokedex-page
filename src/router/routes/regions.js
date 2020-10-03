export default componentImport => [
  {
    path: '/regions/:regionName',
    name: 'regions.pokemonsList',
    component: componentImport('regions/PokemonList')
  }
]