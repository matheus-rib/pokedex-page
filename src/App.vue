<template lang="pug">
#app
  header-component
  router-view
  .footer
    footer-component
</template>

<script>
import HeaderComponent from '@/components/layouts/header/Index'
import FooterComponent from '@/components/layouts/Footer';

export default {
  components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="stylus" scoped>
#app
  background-image url('./assets/grey-pokeball.png')
  background-repeat no-repeat
  background-position center
  background-attachment fixed
  background-size auto
  min-height 100vh
  padding-bottom 41px
  position relative

  .footer
    position fixed
    bottom 0
    width 100%

@media(max-width: 600px)
  #app
    background none
</style>