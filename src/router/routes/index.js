const componentImport = view => () => import(`@/views/${view}.vue`)

export default [
  {
    path: '/',
    name: 'about',
    component: componentImport('About'),
  },
]