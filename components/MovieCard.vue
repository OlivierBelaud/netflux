<template>
  <div
    class="z-0 flex flex-col overflow-hidden transition duration-500 ease-in-out rounded-lg shadow-lg"
  >
    <n-link :to="'/movies/' + movie.id + '-' + movie.slug" class="block">
      <div class="flex-shrink-0 bg-gray-200">
        <img class="object-cover w-full h-48" :src="movie.imgHeroCard" alt="" />
      </div>
      <div class="flex flex-col justify-between flex-1 p-6 bg-white">
        <div class="relative flex-1">
          <div class="absolute top-0 right-0 z-10">
            <BtnWish :movie-id="movie.id" />
          </div>
          <h3 class="mt-2 mr-8 text-xl font-semibold leading-7 text-gray-900">
            {{ movie.title }}
          </h3>
          <p class="mt-3 text-sm leading-6 text-gray-500">
            {{ movie.releaseDate.toLocaleDateString('fr-FR') }}
          </p>
        </div>
      </div>
    </n-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import { Movie } from '@/types'

import BtnWish from '@/components/BtnWish.vue'

export default Vue.extend({
  name: 'MovieCard',
  components: {
    BtnWish,
  },
  props: {
    movie: {
      type: Object as Vue.PropType<Movie>,
      required: true,
    },
  },
})
</script>

<style></style>
