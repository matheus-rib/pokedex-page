<template lang="pug">
.text-ellipsis
  .divider
  footer.text-dark
    a(href="https://github.com/matheus-rib/pokedex-page") Pokedex-page
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
.text-dark
  text-align right
</style>
