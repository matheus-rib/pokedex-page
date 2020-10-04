<template lang="pug">
.text-ellipsis
  .divider
  footer.text-dark
    a(href="https://github.com/matheus-rib/pokedex-page" target="_blank") Pokedex-page
    code
      small (v{{version}})
</template>

<script>
import { version } from '../../../package'
export default {
  data() {
    return {
      version,
    }
  },
}
</script>

<style lang="stylus" scoped>
.text-ellipsis
  background-color #fff
  .text-dark
    text-align right
</style>
