<template lang="pug">
div
  ul.pagination
    li.page-item.c-hand(:class="{ disabled: firstPage }" @click="previousPage")
      .nav-button
        i.fas.fa-chevron-left
    li.page-item.c-hand(:class="{ active: firstPage }")
      a(@click="toPage(1)") 1
    li.page-item(v-if="(currentPage - limitPages) > 1")
      a ...
    div(v-for="page in pages" :key="page")
      li.page-item.c-hand(:class="{ active: page === currentPage }" v-if="page > 1 && page < pages && (page - currentPage) < limitPages && (currentPage - page) < limitPages")
        a(@click="toPage(page)") {{ page }}
    li.page-item(v-if="(pages - currentPage) > limitPages")
      a ...
    li.page-item.c-hand(:class="{ active: lastPage }" v-if="pages > 1")
      a(@click="toPage(pages)") {{ pages }}
    li.page-item.c-hand(:class="{ disabled: lastPage }" @click="nextPage")
      .nav-button
        i.fas.fa-chevron-right
</template>

<script>
export default {
  props: {
    page: { type: [Number, String], required: true },
    totalPages: { type: [Number, String], required: true },
    limitPages: { type: Number, default: 3 },
  },

  computed: {
    currentPage() {
      return Number(this.page)
    },
    pages() {
      return Number(this.totalPages)
    },

    firstPage() {
      return Boolean(this.currentPage <= 1)
    },

    lastPage() {
      return Boolean(this.currentPage >= this.pages)
    },
  },

  methods: {
    previousPage() {
      if (!this.firstPage) {
        this.navigateToPage(this.currentPage - 1)
      }
    },

    toPage(pageToNavigate) {
      if (pageToNavigate !== this.currentPage) {
        this.navigateToPage(pageToNavigate)
      }
    },

    nextPage() {
      if (!this.lastPage) {
        this.navigateToPage(this.currentPage + 1)
      }
    },

    async navigateToPage(page) {
      await this.$router.push({
        to: this.$route,
        query: { ...this.$route.query, page },
      })
      this.$emit('change-page', page)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/_variables.styl'
.pagination
  align-items center

  .disabled
    opacity 0.6
    cursor not-allowed

  .nav-button
    display flex
    align-items center
    i
      color $primary
      font-size 18px
      padding 0 10px
</style>
