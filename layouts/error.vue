<template>
  <div class="min-w-full min-h-screen pt-48 overflow-hidden bg-error">
    <ErrorAnimation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ErrorAnimation from '@/components/ErrorAnimation.vue'

export default Vue.extend({
  components: {
    ErrorAnimation,
  },
  // @ts-ignore
  layout: 'empty',
})
</script>

<style scoped>
.bg-error {
  background: radial-gradient(#fff, #aaa);
}
</style>
