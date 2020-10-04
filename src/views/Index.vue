<template lang="pug">
.container.grid-xl(v-if="!loading")
  .filter-field
    .regions-count Regions: {{countRegions}}
    filter-field(@search="filterList" placeholder="Search regions")
  .columns(v-if="countRegions")
    .column.col-3.col-lg-4.col-md-6.col-sm-12(v-for="region in filteredRegionsList.results" :key="region.name")
      region-row(:region="region")
  empty-container(v-else :subtitle="emptyMessage")
    button.btn.btn-primary(slot="action" @click="filterList('')") Clean search
.loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RegionRow from './components/RegionRow'
import FilterField from '@/components/FilterField'
import EmptyContainer from '@/components/EmptyContainer'

export default {
  data() {
    return {
      textFilter: '',
      loading: false,
    }
  },

  computed: {
    ...mapState('regions', ['filteredRegionsList']),

    countRegions() {
      return this.filteredRegionsList.results.length
    },

    emptyMessage() {
      return `No results matching "${this.textFilter}"`
    },
  },

  methods: {
    ...mapActions('regions', ['fetchRegionsList', 'filterRegionsList']),

    filterList(textToFilter) {
      this.textFilter = textToFilter
      this.filterRegionsList(textToFilter)
    },
  },

  async created() {
    try {
      this.loading = true
      await this.fetchRegionsList()
    } catch(e) {
      this.$toaster.error(e.message)
    } finally {
      this.loading = false
    }
  },

  components: { RegionRow, FilterField, EmptyContainer },
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