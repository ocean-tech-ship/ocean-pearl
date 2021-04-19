<template>
  <div>
    <job-overview-header />
    <job-offer-list />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import JobOverviewHeader from '@/components/app/job-overview/JobOverviewHeader.vue'
import JobOfferList from '@/components/app/job-overview/JobOfferList.vue'

export default Vue.extend({

  name: "JobOverview",
  components: {
    JobOverviewHeader,
    JobOfferList
  },
})
</script>

<style>
</style>
