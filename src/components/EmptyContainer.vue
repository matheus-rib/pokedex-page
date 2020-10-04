<template lang="pug">
.empty
  .empty-icon(v-if="icon")
    i(:class="icon")
  p.empty-title.h5 {{title}}
  p.empty-subtitle {{subtitle}}
  slot(name="action")
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fas fa-times fa-5x color-danger',
    },

    title: {
      type: String,
      default: 'No results',
    },

    subtitle: {
      type: String,
      default: 'No matching results for your search.',
    },
  },
}
</script>

<style lang="stylus" scoped>
.empty
  background #f7f8f9aa
.color-danger
  color #ff0000
</style>