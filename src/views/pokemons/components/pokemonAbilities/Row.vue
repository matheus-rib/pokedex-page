<template lang="pug">
.card
  .card-body
    | {{ ability.ability.name | normalize }}
    span.hidden(v-if="ability.is_hidden")  - Hidden Ability
</template>

<script>
export default {
  props: {
    ability: { type: Object, required: true }
  },
}
</script>

<style lang="stylus" scoped>
.card
  cursor default
  .hidden
    font-style italic
    opacity .5
</style>