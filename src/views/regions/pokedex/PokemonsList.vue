<template lang="pug">
.container.grid-xl(v-if="!loading")
  .columns
    .column.col-3.col-lg-4.col-md-6.col-sm-12(v-for="pokemon in pokemonsList" :key="pokemon.entry_number")
      row(:pokemon="pokemon")
.loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/Row'

export default {
  data() {
    return {
      loading: false,
    }
  },

  components: { Row },

  computed: {
    ...mapState('pokemons', ['pokemonsList']),
  },
  
  methods: {
    ...mapActions('pokemons', ['fetchPokemonsListInPokedex']),
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
