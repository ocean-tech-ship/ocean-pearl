<template>
  <LandingSectionContainer>
    <!-- Headline ------------------------------------------------------------------>
    <h2>Job <span class="text-primary">offers</span></h2>
    <p>Find out which companys are currently looking for your support.</p>

    <!-- Header ------------------------------------------------------------------>
    <div class="flex items-center justify-between my-8">
      <!-- Categories -->
      <div class="text-primary">
        <div class="flex border py-1 px-2">
          <img
            class="mr-1 p-1"
            src="@/assets/images/icons/dropdown.png"
            alt="dropdown"
          />
          <p class="small-text pr-8">Latest</p>
        </div>
      </div>

      <!-- Status -->
      <div class="space-x-4 flex flex-wrap mx-64">
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

      <!-- Badges -->
      <div class="grid w-64 space-y-1">
        <div class="justify-self-end flex items-center">
          <p class="small-text text-right mr-2 text-primary">Featured</p>
          <img
            src="@/assets/images/icons/featured-badge.png"
            alt="featured-projects"
          />
        </div>
        <div class="justify-self-end flex items-center">
          <p class="text-right small-text mr-2 text-primary">Needs funding</p>
          <img
            src="@/assets/images/icons/bitcoin-badge.png"
            alt="funding project"
          />
        </div>
      </div>
    </div>

    <JobOfferList />
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer'
import JobOfferList from './JobOfferList'

export default {
  name: 'JobOverviewHeader',

  components: {
    LandingSectionContainer,
    JobOfferList,
  },
}
</script>

<style scoped></style>
