export default componentImport => [
  {
    path: '/pokemons',
    component: componentImport('pokemons/Base'),
    children: [
      {
        path: '/',
        name: 'pokemons.index',
        component: componentImport('pokemons/Index')
      },
      {
        path: ':pokemonName',
        name: 'pokemons.show',
        component: componentImport('pokemons/Show')
      },
    ],
  },
]