<template lang="pug">
.card
  .card-header {{pokedex.name}}
</template>

<script>
export default {
  props: {
    pokedex: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="stylus" scoped>
.card
  margin-top 10px
  margin-bottom 10px
</style>