<template lang="pug">
router-link.card.card-text-color(:to="{ name: item.link }")
  .card-header.text-size
    i.mr-3(:class="item.icon")
    span {{item.title}}
</template>


<script>
export default {
  props: {
    item: {
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
  text-decoration none

  .card-header
    .mr-3
      margin-right 20px
</style>