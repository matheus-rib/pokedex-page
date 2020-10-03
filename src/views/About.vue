<template lang="pug">
.container.grid-xl
  .hero.bg-gray
    .header-about
      figure.img-container
        img(src="../assets/detective-pikachu.png")
      h1 About
    p Simple Pokedex page to list Pokemon's regions, pokedexes and pokemons using &nbsp;
      a(href="https://pokeapi.co" target="_blank") PokeAPI
      span .
    .dependencies-container
      p.dependencies-paragraph Project made in &nbsp;
        a(href="https://vuejs.org" target="_blank") Vue.JS
        span &nbsp; and it's bundle (
        a(href="https://vuex.vuejs.org" target="_blank") Vuex 
        span and 
        a(href="https://router.vuejs.org" target="_blank") Vue Router
        span ), and the following dependencies:
      dl
        dd 
          a(href="https://www.npmjs.com/package/axios" target="_blank") Axios
        dd 
          a(href="https://fontawesome.com" target="_blank") Font Awesome
        dd 
          a(href="https://www.npmjs.com/package/paliari-js-utils" target="_blank") Paliari JS Utils
        dd 
          a(href="https://picturepan2.github.io/spectre/index.html" target="_blank") Spectre.css
      p Developed with the following Pre-Processors:
      dl
        dd 
          a(href="https://pugjs.org/api/getting-started.html" target="_blank") Pug
        dd 
          a(href="https://sass-lang.com" target="_blank") SCSS
        dd 
          a(href="https://stylus-lang.com" target="_blank") Stylus

</template>

<style lang="stylus" scoped>
.container.grid-xl
  .hero.bg-gray
    padding-top 0
    display flex
    align-items center

    .header-about
      display flex
      justify-content center
      align-items center
      flex-direction column

      .img-container
        height 14rem
        width 14rem

        img
          position relative
          height 100%
          width 100%
          border 10px solid black
          border-radius 50%
    .dependencies-container
      dl
        dd
          margin-bottom 10px
    
</style>