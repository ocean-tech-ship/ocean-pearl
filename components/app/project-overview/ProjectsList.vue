<template>
  <LandingSectionContainer>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-12">
    <div v-for="project in projects" :key="project.title">
      <div class="shadow p-2 pb-12 text-center relative">
        <div class="absolute top-0 right-0 mr-3 flex space-x-2">
          <img v-if="project.badgeJob" src="@/assets/images/icons/hiring-badge.svg" alt="hiring job">
          <img v-if="project.badgeFund" src="@/assets/images/icons/bitcoin-badge.svg" alt="looking for funding">
          <img v-if="project.badgeFeatured" src="@/assets/images/icons/featured-badge.svg" alt="featured project">
        </div>
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white" :src="project.imageURL"
            :alt="project.title" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">{{project.title}}</p>
          <p class="small-text">{{project.category}}</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
            {{project.description}}
          </p>
        </div>
        </NuxtLink>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer'
import { getProjects } from '@/api.js'

export default {
  name: 'ProjectsList',
  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      projects: [],
    }
  },
  async created() {
    this.projects = await getProjects()
  },
}
</script>
