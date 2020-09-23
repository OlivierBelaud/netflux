<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div
      class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:order-none lg:py-32 lg:text-left"
    >
      <div
        class="h-8 mb-4 text-sm font-semibold tracking-wide text-center text-gray-500 uppercase sm:text-base lg:text-base xl:text-xl"
      >
        {{ alert.categorie }}
      </div>
      <div
        v-if="alert.title"
        class="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
      >
        {{ alert.title }}
      </div>
      <div
        class="mt-8 text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
      >
        {{ alert.emoji }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import { Alert } from '@/types'

export default Vue.extend({
  name: 'AlertMessage',
  props: {
    alert: {
      type: Object as Vue.PropType<Alert>,
      required: true,
    },
  },
})
</script>
