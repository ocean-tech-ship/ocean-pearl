<template>
  <LandingSectionContainer class="my-32">
    <!-- Headline ------------------------------------------------------------------>
    <h2>
      {{ $t('landing.job_offers.title') }}
      <span class="text-primary">{{
        $t('landing.job_offers.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.job_offers.text') }}</p>

    <!-- projects ------------------------------------------------------------------>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10"
    >
      <div v-for="job in jobs" :key="job.id">
        <!-- single ------------------------------------------------------------------>
        <NuxtLink to="/job-overview">
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
    <NuxtLink to="/job-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">{{ $t('landing.job_offers.link_text') }}</p>
        <img src="@/assets/images/landing/check-out.svg" alt="">
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer'
import { getJobs } from '@/api.js'

export default {
  name: 'LandingJobOffers',

  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      jobs: [],
    }
  },
  async fetch() {
    this.jobs = (await getJobs()).slice(0, 4)
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>
