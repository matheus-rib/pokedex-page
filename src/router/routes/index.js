import regions from './regions'

const componentImport = view => () => import(`@/views/${view}.vue`)

export default [
  {
    path: '/',
    name: 'home',
    component: componentImport('Index'),
  },
  ...regions(componentImport),
]