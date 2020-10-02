<template lang="pug">
.container.grid-lg
  .columns
    .column.col-4.col-md-6.col-sm-12(v-for="region in regionsList.results")
      .card
        .card-header {{region.name}}
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState('regions', ['regionsList']),
  },

  methods: {
    ...mapActions('regions', ['fetchRegionsList']),
  },

  async created() {
    await this.fetchRegionsList()
  },
}
</script>
