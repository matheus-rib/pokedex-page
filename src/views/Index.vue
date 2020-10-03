<template lang="pug">
.container.grid-lg
  filter-field(@search="filterList")
  .columns
    .column.col-4.col-md-6.col-sm-12(v-for="region in filteredRegionsList.results" :key="region.name")
      region-row(:region="region")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RegionRow from './components/RegionRow'
import FilterField from '@/components/FilterField'

export default {
  computed: {
    ...mapState('regions', ['filteredRegionsList']),
  },

  methods: {
    ...mapActions('regions', ['fetchRegionsList', 'filterRegionsList']),

    filterList(textToFilter) {
      this.filterRegionsList(textToFilter)
    },
  },

  async created() {
    await this.fetchRegionsList()
  },

  components: { RegionRow, FilterField },
}
</script>
