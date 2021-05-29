<template>
  <LandingSectionContainer>
    <p v-if="$fetchState.pending">{{ $t('general.fetchingLoading') }}</p>
    <p v-else-if="$fetchState.error">{{ $t('general.fetchingError') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-12"
    >
      <div v-for="job in jobs" :key="job._id">
        <NuxtLink :prefetch="false" to="/project-detail">
          <div class="shadow p-12">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="job.imageURL"
                  :alt="job.title"
                />
              </div>
              <div class="mt-5">
                <p class="small-text">
                  {{ job.description }}
                </p>
              </div>
              <div class="mt-8">
                <p class="small-text text-primary">{{ job.salary }} a year</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer'
import { getJobs } from '@/api.js'

export default {
  name: 'JobOfferList',
  components: {
    LandingSectionContainer,
  },

  data() {
    return {
      jobs: [],
    }
  },
  async fetch() {
    await getJobs(this.$axios)
      .then((jobs) => {
        this.jobs = process.env.useMirage === 'true' ? jobs.jobs : jobs
      })
      .catch(() => {
        this.jobs = []
      })
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>
