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
        path: ':regionName',
        name: 'regions.pokedexesList',
        component: componentImport('regions/PokedexList'),
        meta: {
          title: 'Pokedexes',
        }
      },
    ],
  }
]