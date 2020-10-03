<template lang="pug">
.d-flex
  section.navbar-section
    router-link.header-button.mr-1(:to="{name: 'home'}")
      figure.avatar.avatar-lg
        img(src="../../assets/pokeball.png" alt="Pokeball image")
      .h5 Home
  section.navbar-section
    router-link(:to="{name: 'home'}")
      img.title-img(src="../../assets/app-title.png")
  section.navbar-section
    router-link.header-button.mr-1(:to="{name: 'home'}")
      figure.avatar.avatar-lg.avatar-transparent
        img(src="../../assets/pikachu.png" alt="Pikachu image")
      .h5 About
    a.header-button.mr-1(href="https://github.com/matheus-rib/pokedex-page" target="_blank")
      figure.avatar.avatar-lg.avatar-transparent
        img(src="../../assets/pokedex.png" alt="Pokedex image")
      .h5 Repo
</template>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl'
.d-flex
  justify-content space-between

 .navbar-app
    display flex
    justify-content space-between

    .navbar-section
      display flex

    a:visited, a:link, a:active
      text-decoration none
      outline none
      box-shadow none

    .header-button
      display flex
      flex-direction column
      align-items center
      padding 0 10px

      &:hover
        color darken($primary-color, 20%)

      .avatar-transparent
        background rgba(0, 0, 0, 0)
        border 1px solid rgba(0, 0, 0, .4)

    .title-img
      height 58px
</style>