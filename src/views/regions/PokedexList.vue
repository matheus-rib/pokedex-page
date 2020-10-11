<template lang="pug">
.container.grid-xl(v-if="!loading")
  pokedex-list(:pokedexesList="pokedexesList" :goBackRoute="goBackRoute")
    empty-container(slot="empty-pokedexes" subtitle="This region has no available pokedex.")
      router-link.btn.btn-primary(slot="action" :to="{ name: 'regions.index' }") Back to regions
.loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EmptyContainer from '@/components/EmptyContainer'
import PokedexList from '@/components/pokedexList/Index'

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
    },

    goBackRoute() {
      return { route: { name: 'regions.index' }, tooltip: 'Back to regions list' }
    },
  },

  methods: {
    ...mapActions('regions', ['fetchPokedexesInRegionList'])
  },

  async created() {
    try {
      this.loading = true
      await this.fetchPokedexesInRegionList(this.$route.params.regionName)
    } catch(e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  },

  components: { EmptyContainer, PokedexList }
}
</script>
