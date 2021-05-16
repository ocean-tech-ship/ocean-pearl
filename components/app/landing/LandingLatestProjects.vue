<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.latest_projects.title') }}
      <span class="text-primary">{{
        $t('landing.latest_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.latest_projects.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-10"
    >
      <div v-for="project in projects" :key="project._id">
        <NuxtLink to="/project-overview">
          <div class="shadow p-4 pb-12 h-275px text-center">
            <div class="mt-3">
              <img
                class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                :src="project.logo"
                :alt="project.title"
              />
            </div>
            <div class="mt-4">
              <p class="text-primary p-line-head">
                {{ project.title | truncate(14) }}
              </p>
              <p class="small-text">{{ project.category }}</p>
            </div>
            <div class="mt-4 flex place-content-center">
              <p class="border small-text text-primary w-32">
                {{ project.createdAt }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/project-overview">
      <div class="flex items-center mt-6 mb-32">
        <p class="mr-2 text-primary">
          {{ $t('landing.latest_projects.link_text') }}
        </p>
        <img src="@/assets/images/landing/check-out.svg" alt="arrow" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer'
import { getProjects } from '@/api.js'

export default {
  name: 'LandingDaoProposal',

  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      projects: [],
    }
  },
 async fetch() {
    const projects = (await getProjects(this.$axios)).slice(0, 5)
    this.projects = projects
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>
