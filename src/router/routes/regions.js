export default componentImport => [
  {
    path: '/regions/:regionName',
    component: componentImport('regions/Base'),
    children: [
      {
        path: '/',
        name: 'regions.pokedexesList',
        component: componentImport('regions/PokedexList'),
        meta: {
          title: 'Pokedexes',
        }
      },
    ],
  }
]