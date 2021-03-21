<template>
  <div>
    <app-navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'

export default Vue.extend({
  components: {
    AppNavbar
  },
})
</script>


