<template lang="pug">
router-link.card.card-text-color(:to="{ name: 'pokemons.show', params: { pokemonName: pokemon.name } }")
  .card-header.text-size {{pokemon.name | normalize}}
</template>

<script>
export default {
  props: {
    pokemon: {
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