<template lang="pug">
router-link.card.card-text-color(:to="{ name: 'regions.pokedexesList', params: { regionName: region.name } }")
  .card-header.text-size {{region.name | capitalize}}
</template>

<script>
export default {
  props: { 
    region: {
      type: Object,
      default: null,
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  margin-top 10px
  margin-bottom 10px
  text-decoration none
</style>