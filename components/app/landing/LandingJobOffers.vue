<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.job_offers.title') }}
      <span class="text-primary"
        >{{ $t('landing.job_offers.titleHighlight') }}
      </span>
    </h2>
    <p>{{ $t('landing.job_offers.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10"
    >
      <div v-for="job in jobs" :key="job._id">
        <NuxtLink to="/jobs">
          <div class="shadow p-12">
            <div class="flex">
              <div class="mr-3">
                <app-logo
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :project="job.project"
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
    <NuxtLink to="/jobs">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">
          {{ $t('landing.job_offers.link_text') }}
        </p>
        <img src="@/assets/images/landing/check-out.svg" alt="" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer';
import AppLogo from '@/components/common/AppLogo';
import { getJobs } from '@/api.js';

export default {
  name: 'LandingJobOffers',

  components: {
    AppLogo,
    LandingSectionContainer,
  },
  data() {
    return {
      jobs: [],
    };
  },
  async fetch() {
    await getJobs(this.$axios)
      .then((jobs) => {
        this.jobs =
          process.env.useMirage === 'true'
            ? jobs.jobs.slice(0, 4)
            : jobs.slice(0, 4);
      })
      .catch(() => {
        this.jobs = [];
      });
  },
};
</script>
