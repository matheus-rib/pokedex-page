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
      default: 'Sem resultados',
    },

    subtitle: {
      type: String,
      default: 'Não encontrado resultados para essa busca.',
    },
  },
}
</script>

<style lang="stylus" scoped>
.color-danger
  color #ff0000
</style>