<template>
  <LandingSectionContainer>
    <p v-if="$fetchState.pending">{{ $t('general.fetchingLoading') }}</p>
    <p v-else-if="$fetchState.error">{{ $t('general.fetchingError') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-12"
    >
      <div v-for="project in projects" :key="project._id">
        <NuxtLink :prefetch="false" :to="`/projects/${project._id}`">
          <div class="shadow rounded h-330px p-2 text-center">
            <!--
        <div class="absolute top-0 right-0 mr-3 flex space-x-2">
          <img v-if="project.badgeJob" src="@/assets/images/icons/hiring-badge.svg" alt="hiring job">
          <img v-if="project.badgeFund" src="@/assets/images/icons/bitcoin-badge.svg" alt="looking for funding">
          <img v-if="project.badgeFeatured" src="@/assets/images/icons/featured-badge.svg" alt="featured project">
        </div>
        -->
            <div class="mt-3">
              <app-logo
                class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                :src="project.imageURL"
                :alt="project.title"
              />
            </div>
            <div class="mt-4">
              <p class="text-primary p-head line-clamp-1 break-all">
                {{ project.title }}
              </p>
              <p class="small-text text-quad">
                {{ project.category }}
              </p>
            </div>
            <div class="mt-6 px-3 flex place-content-center">
              <p class="small-text line-clamp-3">
                {{ project.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import { getProjects } from '@/api.js'
import LandingSectionContainer from '../landing/LandingSectionContainer'
import AppLogo from '~/components/common/AppLogo'

export default {
  name: 'ProjectsList',
  components: {
    AppLogo,
    LandingSectionContainer,
  },
  data() {
    return {
      projects: [],
    }
  },

  async fetch() {
    await getProjects(this.$axios)
      .then((projects) => {
        this.projects =
          process.env.useMirage === 'true' ? projects.projects : projects
      })
      .catch(() => {
        this.projects = []
      })
  },
}
</script>
