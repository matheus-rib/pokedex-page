<template lang="pug">
form.has-icon-right(@submit.prevent="search")
  input.form-input.input-sm(:placeholder="placeholder" v-model="searchInputModel")
  i.form-icon.fas.fa-search.c-hand(@click="search")
</template>

<script>
export default {
  data() {
    return {
      searchInputModel: ''
    }
  },

  props: {
    placeholder: {
      type: String,
      default: 'Pesquisar'
    }
  },

  methods: {
    search() {
      this.$emit('search', this.searchInputModel)
    },
  },
}
</script>

<style lang="stylus" scoped>
input.form-input.input-sm
  border-radius 100px
  padding-left 10px

i.form-icon.fas.fa-search
  right .3rem
</style>