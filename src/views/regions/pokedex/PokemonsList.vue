<template lang="pug">
.container.grid-xl(v-if="!loading")
  .filter-field
    .pokemons-count Pokemons: {{pokemonsCount}}
    filter-field(@search="filterList" placeholder="Search pokemons")
  .columns(v-if="pokemonsCount")
    .column.col-3.col-lg-4.col-md-6.col-sm-12(v-for="pokemon in filteredPokemonsList" :key="pokemon.entry_number")
      row(:pokemon="pokemon")
  empty-container(v-else :subtitle="emptyMessage")
    button.btn.btn-primary(slot="action" @click="filterList('')") Clean search
.loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/Row'
import FilterField from '@/components/FilterField'
import EmptyContainer from '@/components/EmptyContainer'

export default {
  data() {
    return {
      loading: false,
      textFilter: '',
    }
  },

  components: { Row, FilterField, EmptyContainer },

  computed: {
    ...mapState('pokemons', ['filteredPokemonsList']),

    pokemonsCount() {
      return this.filteredPokemonsList.length
    },

    emptyMessage() {
      return `No results matching "${this.textFilter}"`
    },
  },
  
  methods: {
    ...mapActions('pokemons', ['fetchPokemonsListInPokedex', 'filterPokemonsList']),

    filterList(textToFilter) {
      this.textFilter = textToFilter
      this.filterPokemonsList(textToFilter)      
    },
  },

  async created() {
    try {
      this.loading = true
      await this.fetchPokemonsListInPokedex(this.$route.params.pokedexName)
    } catch (e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.filter-field
  display flex
  justify-content space-between
  form
    width 15rem
</style>
