<template lang="pug">
.modal.active
  a.modal-overlay(@click="close" aria-label="Close")
  .modal-container
    .modal-header
      a.btn.btn-clear.float-right(@click="close" aria-label="Close")
      .modal-title.h5 Version Group Details
    .modal-body
      .content
        table.table.table-striped.table-hover
          thead
            tr
              th Version
              th Method
              th Level
          tbody
            tr(v-for="detail in details")
              td {{versionGroup[detail.version_group.name]}}
              td {{moveLearnMethods[detail.move_learn_method.name]}}
              td {{detail.level_learned_at}}
    .modal-footer
</template>

<script>
import moveLearnMethods from '@/lib/MoveLearnMethods'
import versionGroup from '@/lib/VersionGroup'

export default {
  data() {
    return {
      moveLearnMethods,
      versionGroup,
    }
  },

  props: {
    details: { type: Array, required: true },
  },

  methods: {
    close() {
      this.$emit('close')
    },

    onKeyUp(e) {
      if (e.key === 'Escape') {
        this.close()
      }
    },
  },

  mounted() {
    window.addEventListener('keyup', this.onKeyUp)
  },

  destroyed() {
    window.removeEventListener('keyup', this.onKeyUp)
  },
}
</script>