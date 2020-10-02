<template lang="pug">
div {{regionsList}}
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
