<template>
  <div class="w-10 h-10">
    <div
      v-if="displayPulser"
      class="absolute w-10 h-10 bg-red-500 rounded-full opacity-75 circle animate-pulser"
    ></div>
    <div
      v-if="displayValidator"
      class="absolute w-10 h-10 bg-red-500 rounded-full opacity-75 circle animate-validator"
    ></div>
    <div class="absolute z-0 w-10 h-10 bg-white rounded-full circle"></div>
    <div class="absolute w-10 h-10 p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="z-10 inline-block w-6 h-6 text-red-500 cursor-pointer fill-current"
        viewBox="0 0 28 28"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click.prevent="switchWish"
      >
        <path
          v-if="displayFilledIcon"
          d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"
        ></path>
        <path
          v-else
          d="M26 9.312c0-4.391-2.969-5.313-5.469-5.313-2.328 0-4.953 2.516-5.766 3.484-0.375 0.453-1.156 0.453-1.531 0-0.812-0.969-3.437-3.484-5.766-3.484-2.5 0-5.469 0.922-5.469 5.313 0 2.859 2.891 5.516 2.922 5.547l9.078 8.75 9.063-8.734c0.047-0.047 2.938-2.703 2.938-5.563zM28 9.312c0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281s-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import { MoviesState } from '@/store/movies'

export default Vue.extend({
  name: 'MovieDetails',
  props: {
    movieId: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      hover: false as Boolean,
      justRemoved: false as Boolean,
      justAdded: false as Boolean,
    }
  },
  computed: {
    wishlisted() {
      const wishlist = (this.$store.state.movies as MoviesState).wishlistIds
      return wishlist.includes((this as any).movieId)
    },
    displayFilledIcon() {
      return (
        !(this as any).justRemoved &&
        ((this as any).wishlisted || (this as any).hover)
      )
    },
    displayPulser() {
      return (
        !(this as any).justRemoved &&
        (this as any).hover &&
        !(this as any).wishlisted
      )
    },
    displayValidator() {
      return (this as any).justAdded
    },
  },
  methods: {
    switchWish() {
      ;(this as any).wishlisted
        ? (this as any).removeWish()
        : (this as any).addWish()
    },
    addWish() {
      ;(this as any).justAddedInit()
      this.$store.commit('movies/ADD_WISH_LIST', (this as any).movieId)
    },
    removeWish() {
      ;(this as any).justRemovedInit()
      this.$store.commit('movies/REMOVE_WISH_LIST', (this as any).movieId)
    },
    justAddedInit() {
      const that = this
      ;(that as any).justAdded = true
      setTimeout(() => {
        ;(that as any).justAdded = false
      }, 1000)
    },
    justRemovedInit() {
      const that = this
      ;(that as any).justRemoved = true
      setTimeout(() => {
        ;(that as any).justRemoved = false
      }, 1000)
    },
  },
})
</script>

<style>
.animate-pulser {
  animation: pulser 1.4s ease-out infinite;
}

.animate-validator {
  animation: validator 1s cubic-bezier(0, 0, 0.2, 1);
}

@keyframes pulser {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  33% {
    transform: scale(1.2);
    opacity: 0.2;
  }
  66% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes validator {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
