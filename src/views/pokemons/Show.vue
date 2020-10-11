<template lang="pug">
.container.grid-xl(v-if="!loading")
  .pokemon-data(v-if="!error")
    img.pokemon-portrait(v-if="currentPokemon.sprites.front_default" :src="currentPokemon.sprites.front_default")
    .pokemon-portrait.empty(v-else)
      i.fas.fa-camera.fa-4x.fa-fw
    .pokemon-info
      .text-size Id: {{currentPokemon.id | pokedexEntry}}
      .text-size Name: {{currentPokemon.name | capitalize}}
      .text-size Type(s): 
        span.chip(v-for="type in currentPokemon.types" :key="type.slot" :style="{background: pokemonTypes[type.type.name].color}") {{pokemonTypes[type.type.name].name}}
  div(v-else)
    empty-container(:title="errorMessage" :subtitle="error")
      button.btn.btn-primary(slot="action" @click="goBack") Go back
.loading.loading-lg(v-else)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pokemonTypes from '@/lib/PokemonTypes'
import EmptyContainer from '@/components/EmptyContainer'
import { ucfirst } from 'paliari-js-utils';
export default {
  data() {
    return {
      loading: false,
      pokemonTypes,
      error: null,
    }
  },

  components: { EmptyContainer },

  computed: {
    ...mapState('pokemons', ['currentPokemon']),

    errorMessage() {
      return `Error fetching: ${ucfirst(this.$route.params.pokemonName)}`
    },
  },

  methods: {
    ...mapActions('pokemons', ['fetchPokemon']),

    goBack() {
      this.$router.go(-1)
    },
  },

  async created () {
    try {
      this.loading = true
      await this.fetchPokemon(this.$route.params.pokemonName)
    } catch (e) {
      this.$toaster.error(e.message)
      this.error = e.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.pokemon-data
  background-color #CACACA66
  padding 20px
  display flex
  align-items center

  .pokemon-portrait
    min-width 150px
    min-height 150px
    border 3px solid #CACACA
    border-radius 50%
    background-color #FFF

  .empty
    width 150px
    height 150px
    display flex
    justify-content center
    align-items center
    color #CACACA
  
  .pokemon-info
    padding-left 20px
    .chip
      color #FFF

@media(max-width: 485px)
  .pokemon-data
    flex-direction column

    .pokemon-info
      padding-left 0
      padding-top 20px
      align-self baseline
</style>