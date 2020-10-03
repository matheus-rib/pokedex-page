<template lang="pug">
.container.grid-xl
  div(v-if="pokedexesList.length")
    .columns
      .column.col-4.col-md-6.col-sm-12(v-for="pokedex in pokedexesList" :key="pokedex.name")
        row(:pokedex="pokedex")
  div(v-else) 
    empty-container
      router-link.btn.btn-primary(slot="action" :to="{ name: 'home' }") Tela inicial
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/Row'
import EmptyContainer from '@/components/EmptyContainer'

export default {
  computed: {
    ...mapState('regions', ['pokedexesList'])
  },

  methods: {
    ...mapActions('regions', ['fetchPokedexesInRegionList'])
  },

  async created() {
    await this.fetchPokedexesInRegionList(this.$route.params.regionName)
  },

  components: { Row, EmptyContainer }
}
</script>
