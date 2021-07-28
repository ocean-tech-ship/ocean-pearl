<template>
  <div>
    <job-overview-header />
    <job-offer-list />

  </div>
</template>

<script^lang='ts'>
import Vue from 'vue'
import JobOverviewHeader from '@/components/app/jobs/JobOverviewHeader.vue'
import JobOfferList from '@/components/app/jobs/JobOfferList.vue'

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
