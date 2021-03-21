<template>
  <div>
    <job-overview-header />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import JobOverviewHeader from '@/components/app/job-overview/JobOverviewHeader.vue'



export default Vue.extend({

  name: "JobOverview",
  components: {
    JobOverviewHeader
  },
})
</script>

<style>
</style>
