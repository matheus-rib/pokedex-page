<template lang="pug">
.abilities-container
  .abilities-header.text-center 
    .h5 Pokemon Abilities
  .content
    .columns
      .col-6.col-xs-12.abilities-row(v-for="ability in abilities")
        row(:ability="ability")
</template>

<script>
import Row from './Row'

export default {
  props: {
    abilities: { type: Array, required: true },
  },

  components: { Row },
}
</script>

<style lang="stylus" scoped>
.abilities-container
  background-color #EAEAEA
  padding 20px

  .abilities-header
    width 100%

  .abilities-row
    padding 10px
</style>