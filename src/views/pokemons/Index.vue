<template lang="pug">
.container.grid-xl(ref="header")
  div(v-if="!loading")
    .filter-field
      .pokemons-count.text-size Total pokemons count: {{totalPokemonsEntries}}
    .columns
      .column.col-3.col-lg-6.col-sm-12(v-for="pokemon in pokemonsList" :key="pokemon.entry_number")
        row(:pokemon="pokemon")
      scroll-to-top-button(v-if="showScrollToTopButton" :element="$refs.header" :offset="-200")
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
      page: 0,
      pageYScroll: 0,
    }
  },

  components: { Row, FilterField, EmptyContainer, ScrollToTopButton },

  computed: {
    ...mapState('pokemons', ['pokemonsList', 'pokemonsListPages', 'totalPokemonsEntries']),


    showScrollToTopButton() {
      return this.pageYScroll > 130
    },
  },
  
  methods: {
    ...mapActions('pokemons', ['fetchPokemonsList']),

    onScroll() {
      this.pageYScroll = window.scrollY
    }
  },

  async created() {
    try {
      this.loading = true
      this.page = this.$route.query.page || 1
      await this.fetchPokemonsList(this.page)
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
