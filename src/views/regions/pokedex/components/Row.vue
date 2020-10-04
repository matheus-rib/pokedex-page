<template lang="pug">
.card.card-text-color
  .card-header.text-size {{pokemon.entry_number | pokedexEntry}} - {{pokemon.pokemon_species.name | normalize}}
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