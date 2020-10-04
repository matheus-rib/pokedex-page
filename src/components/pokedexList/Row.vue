<template lang="pug">
router-link.card.card-text-color(:to="{ name: 'pokedex.pokemonsList', params: { pokedexName: pokedex.name } }")
  .card-header.text-size {{pokedex.name | normalize}}
</template>

<script>
export default {
  props: {
    pokedex: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="stylus" scoped>
.card
  margin-top 10px
  margin-bottom 10px
  text-decoration none
</style>