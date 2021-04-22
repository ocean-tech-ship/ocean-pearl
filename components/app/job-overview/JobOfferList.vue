<template>
  <LandingSectionContainer>
    <p v-if="$fetchState.pending">{{ $t('global.fetchingLoading') }}</p>
    <p v-else-if="$fetchState.error">{{ $t('global.fetchingError') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-12"
    >
      <div v-for="job in jobs" :key="job.id">
        <NuxtLink to="/project-detail">
          <div class="shadow p-12">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="job.logo"
                  :alt="job.title"
                />
              </div>
              <div>
                <p class="text-primary p-line-head">{{ job.title }}</p>
                <p class="small-text">{{ job.position }}</p>
              </div>
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
    this.jobs = await getJobs()
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>
