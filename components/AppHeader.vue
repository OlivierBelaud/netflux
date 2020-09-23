<template>
  <div ref="testHeader" class="relative bg-white border border-b">
    <div
      class="flex items-center justify-between px-4 py-4 sm:px-6 md:justify-start md:space-x-10"
    >
      <div>
        <n-link ref="testHeaderName" to="/">
          <img src="/netflux.png" alt="Logo Netflux" class="h-10" />
        </n-link>
      </div>
      <div class="flex items-center justify-between flex-1 space-x-12">
        <nav class="flex space-x-10">
          <div
            v-show="totalMovies"
            ref="testHeaderMovieNumber"
            class="hidden text-base font-medium leading-6 text-gray-900 md:flex"
          >
            {{ totalMovies }} films !
          </div>
        </nav>
        <div class="flex items-center space-x-8">
          <n-link
            ref="testHeaderWishlistLink"
            to="/wishlist"
            class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Wishlist
          </n-link>
          <n-link
            ref="testHeaderWishlistLink"
            to="/movies/3333333"
            class="hidden text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out md:flex hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Erreur Fetch
          </n-link>
          <n-link
            ref="testHeaderWishlistLink"
            to="/error-404"
            class="hidden text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out md:flex hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            404
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  props: {
    totalMovies: {
      type: Number as PropType<number>,
      required: true,
    },
  },
})
</script>
