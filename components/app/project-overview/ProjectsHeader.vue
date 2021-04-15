<template>
  <LandingSectionContainer>
    <h2>{{ $t('projects.titleBlack') }} <span class="text-primary">{{ $t('projects.titlePink') }}</span></h2>
    <p>{{ $t('projects.text') }}</p>
    <div class="flex items-center justify-between my-8">
      <div class="text-primary">
        <div class="flex border py-1 px-2">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-3">Category</p>
        </div>
      </div>
      <div class="space-x-4 flex">
        <NuxtLink to="/project-overview">
        <div class="border text-primary py-1 px-2 flex">
          <p class="small-text">All</p>
        </div>
        </NuxtLink>

        <NuxtLink to="/project-overview">
        <div class="border text-primary py-1 px-2 flex">
          <p class="small-text">Latest</p>
        </div>
        </NuxtLink>

        <NuxtLink to="/project-overview">
        <div class="border text-primary py-1 px-2 flex">
          <p class="small-text">Hiring</p>
        </div>
        </NuxtLink>

        <NuxtLink to="/project-overview">
        <div class="border text-primary py-1 px-2 flex">
          <p class="small-text">Featured</p>
        </div>
        </NuxtLink>

        <NuxtLink to="/project-overview">
        <div class="border text-primary py-1 px-2 flex">
          <p class="small-text">Awaiting Fund</p>
        </div>
        </NuxtLink>
      </div>

      <div class="grid space-y-1">
        <div class="justify-self-end flex items-center">
            <p class="small-text mr-2 text-primary">Featured</p>
            <img src="@/assets/images/icons/featured-badge.png" alt="featured-projects">
        </div>
        <div class="justify-self-end flex items-center">
            <p class="small-text mr-2 text-primary">Need Funding</p>
            <img src="@/assets/images/icons/bitcoin-badge.png" alt="funding project">
        </div>
        <div class="justify-self-end flex items-center">
            <p class="small-text mr-2 text-primary">Hiring</p>
            <img src="@/assets/images/icons/hiring-badge.png" alt="hiring job">
        </div>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'
  import AppButton from '@/components/common/AppButton'

  export default {
    name: 'ProjectsHeader',

    components: {
      LandingSectionContainer,
      AppButton
    },
  }
</script>

<style scoped>
  .p-line-head {
    line-height: 20px;
  }
</style>
