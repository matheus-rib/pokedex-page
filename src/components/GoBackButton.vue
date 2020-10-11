<template lang="pug">
router-link.tooltip.tooltip-right(:to="to" :data-tooltip="tooltip")
  i.fas.fa-chevron-left
</template>

<script>
export default {
  props: {
    to: { type: Object, required: true },
    tooltip: {type: String, required: true },
  },
}
</script>

<style lang="stylus" scoped>
i
  padding-right 10px
</style>