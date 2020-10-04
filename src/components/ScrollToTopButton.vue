<template lang="pug">
button.btn.btn-action.btn-primary.s-circle.fab(@click="scrollToElement")
  i.fas.fa-chevron-up.fa-2x
</template>

<script>
export default {
  props: {
    element: {
      default: null,
    },
    offset: {
      type: Number,
      default: 0
    },
  },

  methods: {
    scrollToElement() {
      this.$smoothScroll({
        scrollTo: this.element,
        offset: this.offset,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.fab
  position fixed
  bottom 60px
  right 30px
  padding 25px
  display flex
  align-items center
  justify-content center
</style>