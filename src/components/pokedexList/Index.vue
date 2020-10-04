<template lang="pug">
.container.grid-xl
  .pokedex-header
    .pokedexes-counter Available Pokedexes: {{pokedexesCount}}
  div(v-if="pokedexesCount")
    .columns
      .column.col-3.col-lg-4.col-md-6.col-sm-12(v-for="pokedex in pokedexesList" :key="pokedex.name")
        row(:pokedex="pokedex")
  slot(v-else name="empty-pokedexes") 
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './Row'
import EmptyContainer from '@/components/EmptyContainer'

export default {
  props: {
    pokedexesList: {
      type: Array,
      required: true,
    }
  },

  components: { Row, EmptyContainer },

  computed: {
    pokedexesCount() {
      return this.pokedexesList.length
    }
  },
}
</script>
