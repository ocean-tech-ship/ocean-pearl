<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.featured_projects.title') }}
      <span class="text-primary">{{
        $t('landing.featured_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.featured_projects.text') }}</p>
    <div
      class="w-full pt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        class="flex items-center flex-col lg:flex-row xl:flex-col shadow rounded-md pb-12 pt-16 px-4 col-span-1 lg:col-span-2 xl:col-span-1 row-span-1 xl:row-span-2 listed-project-container"
      >
        <img
          class="max-h-260px lg:max-h-none hidden sm:block"
          src="@/assets/images/landing/listed-illustration.svg"
          alt="kraken"
        />
        <h3 class="content-center text-center sm:my-12 sm:pt-8">
          {{ $t('landing.featured_projects.secondTitle') }}
          <span class="text-primary">{{
            $t('landing.featured_projects.secondTitleHighlight')
          }}</span>
        </h3>
      </div>

      <div v-for="project in projects" :key="project.title">
        <AppLink :to="`/project-overview/${project._id}`">
          <div class="shadow p-8 grid h-275px overflow-hidden">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="project.logo"
                  :alt="project.title"
                />
              </div>
              <div>
                <p class="text-primary p-line-head truncate">{{ project.title | truncate(18) }}</p>
              </div>
              
            </div>
            <p class="small-text mt-2 text-primary">{{ project.category }}</p>
            <div>
              <p class="small-text mt-4">
                {{ project.description | truncate(90)}}
              </p>
            </div>
            <div class="justify-self-end flex items-center mt-8">
              <p class="small-text mr-2 text-primary">
                {{ $t('landing.featured_projects.checkOut') }}
              </p>
              <img src="@/assets/images/landing/check-out.svg" alt="" />
            </div>
          </div>
        </AppLink>
      </div>
    </div>
    <NuxtLink to="/project-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">
          {{ $t('landing.featured_projects.link_text') }}
        </p>
        <img src="@/assets/images/landing/check-out.svg" alt="" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer'
import AppLink from '@/components/common/AppLink'
import { getFeaturedProjects } from '@/api.js'

export default {
  name: 'LandingFeaturedProjectSection',

  components: {
    LandingSectionContainer,
    AppLink
  },
  data() {
    return {
      projects: [],
    }
  },
 async fetch() {
    const projects = await getFeaturedProjects(this.$axios)
    this.projects = projects
  },
}
</script>

<style scoped>
.listed-project-container {
  background: linear-gradient(
    180deg,
    #e183b3 0%,
    rgba(255, 255, 255, 0.77) 100%
  );
}
</style>
