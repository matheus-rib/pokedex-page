export default to => {
  if (to.meta.title) {
    document.title = `Pokedex-page - ${to.meta.title}`
  } else {
    document.title = 'Pokedex-page'
  }
}
