<template lang="pug">
.container.grid-xl(ref="header")
  div(v-if="!loading")
    .filter-field
      .d-flex
        go-back-button(:to="{name: 'pokedexes.index'}" tooltip="Back to pokedexes list")
        .pokemons-count.text-size Pokemons: {{pokemonsCount}}
      filter-field.filter(@search="filterList" placeholder="Search pokemons")
    .columns(v-if="pokemonsCount")
      .column.col-3.col-lg-4.col-md-6.col-sm-12(v-for="pokemon in filteredPokemonsList" :key="pokemon.entry_number")
        row(:pokemon="pokemon")
      scroll-to-top-button(v-if="showScrollToTopButton" :element="$refs.header" :offset="-200")
    empty-container(v-else :subtitle="emptyMessage")
      button.btn.btn-primary(slot="action" @click="filterList('')") Clean search
  .loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/Row'
import FilterField from '@/components/FilterField'
import EmptyContainer from '@/components/EmptyContainer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import GoBackButton from '@/components/GoBackButton'

export default {
  data() {
    return {
      loading: false,
      textFilter: '',
      pageYScroll: 0,
    }
  },

  components: { Row, FilterField, EmptyContainer, ScrollToTopButton, GoBackButton },

  computed: {
    ...mapState('pokemons', ['filteredPokemonsList']),

    pokemonsCount() {
      return this.filteredPokemonsList.length
    },

    emptyMessage() {
      return `No results matching "${this.textFilter}".`
    },

    showScrollToTopButton() {
      return this.pageYScroll > 130
    },
  },
  
  methods: {
    ...mapActions('pokemons', ['fetchPokemonsListInPokedex', 'filterPokemonsList']),

    filterList(textToFilter) {
      this.textFilter = textToFilter
      this.filterPokemonsList(textToFilter)      
    },

    onScroll() {
      this.pageYScroll = window.scrollY
    }
  },

  async created() {
    try {
      this.loading = true
      await this.fetchPokemonsListInPokedex(this.$route.params.pokedexName)
      window.onscroll = this.onScroll
    } catch (e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  },
}
</script>

<style lang="stylus" scoped>
.filter-field
  display flex
  justify-content space-between

  .d-flex
    align-items center
  form
    width 15rem

@media(max-width: 485px)
  .filter-field
    flex-direction column
    align-items flex-start

    .d-flex
      padding-bottom 5px
    
    .filter
      width 100%

</style>
