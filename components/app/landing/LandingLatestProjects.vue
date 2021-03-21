<template>
  <LandingSectionContainer class="my-32">
    <!-- Headline ------------------------------------------------------------------>
    <h2>Latest <span class="text-primary">projects</span></h2>
    <p>The listed projects shown were added by members of the community.</p>

    <!-- projects ------------------------------------------------------------------>
    <div class="grid grid-flow-col grid-cols-6 gap-4 mt-10">

      <!-- #1 ------------------------------------------------------------------>
      <div class="shadow p-4 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">poseidon</p>
          <p class="text-sm">DeFi</p>
        </div>
        <div class="mt-4 flex place-content-center">
          <p class="border text-sm text-primary w-24">2h ago</p>
        </div>
      </div>

      <!-- #2 ------------------------------------------------------------------>
     <div class="shadow p-4 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">poseidon</p>
          <p class="text-sm">DeFi</p>
        </div>
        <div class="mt-4 flex place-content-center">
          <p class="border text-sm text-primary w-24">2h ago</p>
        </div>
      </div>

      <!-- #3 ------------------------------------------------------------------>
      <div class="shadow p-4 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">poseidon</p>
          <p class="text-sm">DeFi</p>
        </div>
        <div class="mt-4 flex place-content-center">
          <p class="border text-sm text-primary w-24">2h ago</p>
        </div>
      </div>

      <!-- #4 ------------------------------------------------------------------>
      <div class="shadow p-4 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">poseidon</p>
          <p class="text-sm">DeFi</p>
        </div>
        <div class="mt-4 flex place-content-center">
          <p class="border text-sm text-primary w-24">2h ago</p>
        </div>
      </div>

      <!-- #5 ------------------------------------------------------------------>
      <div class="shadow p-4 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">poseidon</p>
          <p class="text-sm">DeFi</p>
        </div>
        <div class="mt-4 flex place-content-center">
          <p class="border text-sm text-primary w-24">2h ago</p>
        </div>
      </div>

      <!-- #6 ------------------------------------------------------------------>
      <div class="shadow p-4 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">poseidon</p>
          <p class="text-sm">DeFi</p>
        </div>
        <div class="mt-4 flex place-content-center">
          <p class="border text-sm text-primary w-24">2h ago</p>
        </div>
      </div>
    </div>
    <NuxtLink to="/">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">See all listed projects</p>
        <img src="@/assets/images/icons/check-out.png" alt="">
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from './LandingSectionContainer'

  export default {
    name: 'LandingDaoProposal',

    components: {
      LandingSectionContainer,
    },
  }
</script>

<style scoped>
  .p-line-head {
    line-height: 20px !important;
  }
</style>
