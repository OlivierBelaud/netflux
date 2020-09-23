<template>
  <div>
    <div v-if="$fetchState.pending">
      <AlertMessage :alert="alertPending" />
    </div>
    <div v-else-if="$fetchState.error">
      <AlertMessage :alert="alertFetchError" />
    </div>
    <div v-else-if="displayMovies && displayMovies.length > 0">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <MovieList :movies="displayMovies" />
      </div>
    </div>
    <div v-else>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AlertMessage :alert="alertEndOfTheWorld" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieList from '@/components/MovieList.vue'
import AlertMessage from '@/components/AlertMessage.vue'

// @ts-ignore
import { MoviesState } from '@/store/movies'
// @ts-ignore
import { Movie, Alert } from '@/types'

export default Vue.extend({
  components: {
    MovieList,
    AlertMessage,
  },
  // @ts-ignore
  async fetch(): Promise<void> {
    if (this.displayMovies.length === 0) {
      await this.$store.dispatch('movies/fetchMovies', 2)
    }
  },
  data() {
    return {
      movie: {} as Movie,
      alertFetchError: {
        categorie: 'Erreur',
        title: "Nous n'arrivons pas à récupérer les films de la base.",
        emoji: '🥴',
      } as Alert,
      alertPending: {
        emoji: '🤗',
      } as Alert,
      alertEndOfTheWorld: {
        categorie: '#EndOfTheWorld',
        title:
          'Nous avons été hacké ou nous sommes à quelques minutes de la fin du monde',
        emoji: '🤯',
      } as Alert,
    }
  },
  computed: {
    displayMovies(): Array<Movie> {
      return (this.$store.state.movies as MoviesState).list
    },
  },
})
</script>

<style></style>
