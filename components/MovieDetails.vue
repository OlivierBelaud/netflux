<template>
  <main class="flex flex-col lg:relative lg:min-h-screen">
    <div
      class="order-last w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:order-none lg:py-32 lg:text-left"
    >
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <div class="mb-6">
          <BtnWish :movie-id="movie.id" />
        </div>
        <h2
          class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
        >
          {{ movie.title }}
        </h2>
        <p
          class="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
        >
          {{ movie.synopsis }}
        </p>
        <p
          v-if="displayDirectors"
          class="max-w-md mx-auto mt-3 text-base text-gray-700 sm:text-lg md:mt-5 md:max-w-3xl"
        >
          <span class="font-semibold"
            >Réalisateur<span v-if="movie.directors.length > 1">s</span>:</span
          >
          <span>{{ displayDirectors }}</span>
        </p>
        <div v-if="movie.imgPoster" class="mt-6">
          <img
            class="w-24 h-auto bg-gray-200 border border-gray-200 rounded"
            :src="movie.imgPoster"
            :alt="'Affiche' + movie.title"
          />
        </div>
      </div>
    </div>
    <div
      class="relative order-first w-full h-64 bg-gray-200 sm:h-72 md:h-96 lg:absolute lg:order-none lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
    >
      <img
        v-if="movie.imgHero"
        class="absolute inset-0 object-cover w-full h-full"
        :src="movie.imgHero"
        :alt="'Illustration' + movie.title"
      />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import { Movie } from '@/types'

import BtnWish from '@/components/BtnWish.vue'

export default Vue.extend({
  name: 'MovieDetails',
  components: {
    BtnWish,
  },
  props: {
    movie: {
      type: Object as Vue.PropType<Movie>,
      required: true,
    },
  },
  computed: {
    displayDirectors(): string {
      return this.movie.directors
        ? this.movie.directors.reduce(
            (acc, director, i) => acc + (i !== 0 ? ', ' : ' ') + director.name,
            ''
          )
        : ''
    },
  },
})
</script>

<style></style>
