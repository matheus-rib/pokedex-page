<template lang="pug">
.container.grid-xl(v-if="!loading")
  pokedex-list(:pokedexesList="filteredPokedexesList" :allowFilter="true" @filterList="filterList")
    empty-container(slot="empty-pokedexes" :subtitle="emptyContainerSubtitle")
      button.btn.btn-primary(slot="action" @click="filterList('')") Clean search
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
      textFilter: '',
    }
  },

  computed: {
    ...mapState('pokedexes', ['filteredPokedexesList']),

    pokedexesCount() {
      return this.filteredPokedexesList.length
    },

    emptyContainerSubtitle() {
      return `No results matching "${this.textFilter}".`
    },
  },

  methods: {
    ...mapActions('pokedexes', ['fetchPokedexesList', 'filterPokedexesList']),

    filterList(textTofilter) {
      this.textFilter = textTofilter
      this.filterPokedexesList(textTofilter)
    },
  },

  async created() {
    try {
      this.loading = true
      await this.fetchPokedexesList()
    } catch(e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  },

  components: { EmptyContainer, PokedexList }
}
</script>
