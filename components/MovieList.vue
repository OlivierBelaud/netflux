<template>
  <div>
    <div
      v-if="movies.length > 0"
      class="grid max-w-lg gap-5 mx-auto my-12 lg:grid-cols-3 lg:max-w-none"
    >
      <MovieCard
        v-for="(movie, index) in movies"
        :id="movie.id"
        :key="movie.id + index"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// @ts-ignore
import { Movie } from '@/types'

import MovieCard from '@/components/MovieCard.vue'

export default Vue.extend({
  name: 'MovieList',
  components: {
    MovieCard,
  },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },
})
</script>
