<template lang="pug">
.card
  .card-header {{region.name}}
</template>

<script>
export default {
  props: { 
    region: {
      type: Object,
      default: null,
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  margin-top 10px
  margin-bottom 10px
</style>