<template lang="pug">
.container.grid-xl
  .pokedex-header
    .d-flex
      go-back-button(:to="goBackRoute.route" :tooltip="goBackRoute.tooltip")
      .pokedexes-counter.text-size Available Pokedexes: {{pokedexesCount}}
    filter-field.filter(v-if="allowFilter" @search="filterList" placeholder="Search pokedexes")
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
import FilterField from '@/components/FilterField'
import GoBackButton from '@/components/GoBackButton'

export default {
  props: {
    pokedexesList: {
      type: Array,
      required: true,
    },
    allowFilter: {
      type: Boolean,
      default: false,
    },
    goBackRoute: {
      type: Object,
      required: true,
    },
  },

  components: { Row, EmptyContainer, FilterField, GoBackButton },

  computed: {
    pokedexesCount() {
      return this.pokedexesList.length
    },
  },

  methods: {
    filterList(textToFilter) {
      this.$emit('filterList', textToFilter)
    },
  },
}
</script>

<style lang="stylus" scoped>
.pokedex-header
  display flex
  justify-content space-between

  .d-flex
    align-items center
    padding-bottom 5px

  form
    width 15rem

@media(max-width: 600px)
  .pokedex-header
    flex-direction column
    align-items flex-start
  
  .filter
    width 100% !important
</style>