<template>
  <LandingSectionContainer>
    <h2>{{ $t('jobs.title') }} <span class="text-primary">{{ $t('jobs.titleHighlight') }}</span></h2>
    <p>{{ $t('jobs.text') }}</p>
    <div class="flex items-center justify-between my-8">
      <div class="flex flex-wrap text-primary">
        <div class="flex border py-1 px-2 mt-1">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-8">Latest</p>
        </div>
        <div class="flex border py-1 px-2 mt-1 xl:hidden">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-4">Category</p>
        </div>
      </div>
      <div class="space-x-4 flex flex-wrap mx-56 hidden xl:flex">
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">All</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">DeFi</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Marketplace</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Enviroment</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Identity</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Trading</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Usage</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Big Data</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">AI</p>
        </div>
        </NuxtLink>
        <NuxtLink to="/job-overview">
        <div class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">Token</p>
        </div>
        </NuxtLink>
      </div>

      <div class="grid w-64 space-y-1">
        <div class="justify-self-end flex items-center">
            <p class="small-text  text-right mr-2 text-primary">Featured</p>
            <img src="@/assets/images/icons/featured-badge.png" alt="featured-projects">
        </div>
        <div class="justify-self-end flex items-center">
            <p class="text-right small-text mr-2 text-primary">Needs funding</p>
            <img src="@/assets/images/icons/bitcoin-badge.png" alt="funding project">
        </div>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'
  import AppButton from '@/components/common/AppButton'

  export default {
    name: 'JobOverviewHeader',

    components: {
      LandingSectionContainer,
      AppButton
    },
  }
</script>

<style scoped>
</style>
