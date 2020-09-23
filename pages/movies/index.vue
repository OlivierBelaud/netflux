<template>
  <div>
    <div>Redirection</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // @ts-ignore
  middleware: ['redirectHome'],
})
</script>

<style></style>
