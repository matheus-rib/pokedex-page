<template lang="pug">
.container.grid-xl(v-if="!loading")
  .filter-field
    .d-flex
      go-back-button(:to="{name: 'home'}" tooltip="Back to home")
      .regions-count.text-size Regions: {{countRegions}}
    filter-field.filter(@search="filterList" placeholder="Search regions")
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
import GoBackButton from '@/components/GoBackButton'

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

  components: { RegionRow, FilterField, EmptyContainer, GoBackButton },
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