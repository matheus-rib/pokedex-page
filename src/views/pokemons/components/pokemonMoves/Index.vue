<template lang="pug">
.pokemon-moves
  table.table.table-striped.table-hover
    thead
      tr
        th Move
        th.text-right Details
    row(:moves="moves")
</template>

<script>
import Row from './Row'

export default {
  props: {
    moves: { type: Array, required: true },
  },

  components: { Row },
}
</script>

<style lang="stylus" scoped>
.pokemon-moves
  background-color #EAEAEA
  padding 20px
  display flex
  align-items center
</style>