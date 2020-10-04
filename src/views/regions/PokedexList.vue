<template lang="pug">
.container.grid-xl(v-if="!loading")
  .pokedex-header
    .pokedexes-counter Available Pokedexes: {{pokedexesCount}}
  div(v-if="pokedexesCount")
    .columns
      .column.col-3.col-lg-4.col-md-6.col-sm-12(v-for="pokedex in pokedexesList" :key="pokedex.name")
        row(:pokedex="pokedex")
  div(v-else) 
    empty-container(subtitle="This region has no available pokedex.")
      router-link.btn.btn-primary(slot="action" :to="{ name: 'home' }") Back to home
.loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from './components/Row'
import EmptyContainer from '@/components/EmptyContainer'

export default {
  data() {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapState('regions', ['pokedexesList']),

    pokedexesCount() {
      return this.pokedexesList.length
    }
  },

  methods: {
    ...mapActions('regions', ['fetchPokedexesInRegionList'])
  },

  async created() {
    try {
      this.loading = true
      await this.fetchPokedexesInRegionList(this.$route.params.regionName)
    } finally {
      this.loading = false
    }
  },

  components: { Row, EmptyContainer }
}
</script>
