<template lang="pug">
#app
  header-component
  router-view
</template>

<script>
import HeaderComponent from '@/components/layouts/Header'

export default {
  components: { HeaderComponent }
}
</script>