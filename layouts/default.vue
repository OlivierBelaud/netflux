<template>
  <div>
    <AppHeader :total-movies="totalMovies" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/AppHeader.vue'

// @ts-ignore
import { MoviesState } from '@/store/movies'

export default Vue.extend({
  components: {
    AppHeader,
  },
  // @ts-ignore
  async fetch(): Promise<void> {
    if (this.totalMovies === 0) {
      await this.$store.dispatch('movies/fetchMovies')
    }
  },
  computed: {
    totalMovies() {
      return (this.$store.state.movies as MoviesState).count
    },
  },
})
</script>

<style></style>
