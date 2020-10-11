<template lang="pug">
tbody
  tr(v-for="move, index in moves")
    td {{move.move.name | normalize}}
    td.text-right
      i.fas.fa-info-circle.c-hand(@click="openModal(index)")
    version-group-details(v-if="showModal" @close="closeModal" :details="currentVersionGroups")
</template>

<script>
import VersionGroupDetails from './VersionGroupDetails'

export default {
  data() {
    return {
      showModal: false,
      currentVersionGroups: [],
    }
  },

  props: {
    moves: { required: true, type: Array }
  },

  components: { VersionGroupDetails },

  methods: {
    openModal(index) {
      this.currentVersionGroups = this.moves[index].version_group_details
      this.showModal = true
    },

    closeModal() {
      this.currentVersionGroups = []
      this.showModal = false
    },
  },
}
</script>

<style lang="stylus" scoped>
i.fas.fa-info-circle
  padding-right 10px
</style>