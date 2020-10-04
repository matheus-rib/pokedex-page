<template lang="pug">
.container.grid-xl(ref="header")
  div(v-if="!loading")
    .filter-field
      .pokemons-count.text-size Pokemons: {{pokemonsCount}}
      filter-field(@search="filterList" placeholder="Search pokemons")
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

export default {
  data() {
    return {
      loading: false,
      textFilter: '',
      pageYScroll: 0,
    }
  },

  components: { Row, FilterField, EmptyContainer, ScrollToTopButton },

  computed: {
    ...mapState('pokemons', ['filteredPokemonsList']),

    pokemonsCount() {
      return this.filteredPokemonsList.length
    },

    emptyMessage() {
      return `No results matching "${this.textFilter}"`
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

  form
    width 15rem

@media(max-width: 485px)
  .filter-field
    flex-direction column
    align-items center
</style>
