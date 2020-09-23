<template>
  <div>
    <div v-if="$fetchState.pending">
      <AlertMessage :alert="alertPending" />
    </div>
    <div v-else-if="$fetchState.error">
      <AlertMessage :alert="alertFetchError" />
    </div>
    <div v-else>
      <MovieDetails :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieDetails from '@/components/MovieDetails.vue'
import AlertMessage from '@/components/AlertMessage.vue'

// @ts-ignore
import MovieDBApi from '@/http/http-requests-moviedb'
// @ts-ignore
import { Movie, Alert } from '@/types'

export default Vue.extend({
  components: {
    MovieDetails,
    AlertMessage,
  },
  // @ts-ignore
  validate({ params }) {
    return !isNaN(+params.id.split('-')[0])
  },
  async fetch(): Promise<void> {
    const instance = new MovieDBApi()
    this.movie = await instance.getMovieDetails(
      Number(this.$route.params.id.split('-')[0])
    )
  },
  data() {
    return {
      movie: {} as Movie,
      alertFetchError: {
        categorie: 'Erreur',
        title: "Il semblerait que nous n'ayons pas ce film en base.",
        emoji: '🤔',
      } as Alert,
      alertPending: {
        emoji: '🤗',
      } as Alert,
    }
  },
})
</script>

<style></style>
