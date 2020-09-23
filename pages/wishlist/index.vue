<template>
  <div v-if="displayWishlist.length > 0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <MovieList :movies="displayWishlist" />
    </div>
  </div>
  <div v-else>
    <AlertMessage :alert="alertEmptyWishlist" />
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
  data() {
    return {
      alertEmptyWishlist: {
        title: "Vous n'avez aucun film dans votre Wishlist",
        emoji: '😕',
      } as Alert,
    }
  },
  computed: {
    displayWishlist(): Array<Movie> {
      return (this.$store.state.movies as MoviesState).wishlist
    },
  },
})
</script>

<style></style>
