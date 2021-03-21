<template>
  <LandingSectionContainer class="my-32">
     <!-- Headline ------------------------------------------------------------------>
    <h2>Job <span class="text-primary">offers</span></h2>
    <p>These ocean projects are currently hiring in the web 3 space</p>

<!-- projects ------------------------------------------------------------------>
<div class="grid grid-flow-col grid-cols-4 gap-4 mt-10">

  <!-- #1 ------------------------------------------------------------------>  
  <div class="shadow p-12">
      <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon.png" alt="poseidon-network" />
            </div>
            <div>
              <p class="text-primary p-line-head">poseidon</p>
              <p class="text-sm">Data analyst</p>
            </div>
       </div>
     <div class="mt-5">
        <p class="text-sm">
            Data analyst who is on track with registring new
            data assets and maintaining them aswell.
        </p>
     </div>
     <div class="mt-8">
        <p class="text-sm text-primary">
            50000€ - 60000€ a year
        </p>
     </div>
  </div>

  <!-- #2 ------------------------------------------------------------------>  
  <div class="shadow p-12">
      <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon.png" alt="poseidon-network" />
            </div>
            <div>
              <p class="text-primary p-line-head">poseidon</p>
              <p class="text-sm">Data analyst</p>
            </div>
       </div>
     <div class="mt-5">
        <p class="text-sm">
            Data analyst who is on track with registring new
            data assets and maintaining them aswell.
        </p>
     </div>
     <div class="mt-8">
        <p class="text-sm text-primary">
            50000€ - 60000€ a year
        </p>
     </div>
  </div>

  <!-- #3 ------------------------------------------------------------------>  
  <div class="shadow p-12">
      <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon.png" alt="poseidon-network" />
            </div>
            <div>
              <p class="text-primary p-line-head">poseidon</p>
              <p class="text-sm">Data analyst</p>
            </div>
       </div>
     <div class="mt-5">
        <p class="text-sm">
            Data analyst who is on track with registring new
            data assets and maintaining them aswell.
        </p>
     </div>
     <div class="mt-8">
        <p class="text-sm text-primary">
            50000€ - 60000€ a year
        </p>
     </div>
  </div>

   <!-- #4 ------------------------------------------------------------------>  
  <div class="shadow p-12">
      <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon.png" alt="poseidon-network" />
            </div>
            <div>
              <p class="text-primary p-line-head">poseidon</p>
              <p class="text-sm">Data analyst</p>
            </div>
       </div>
     <div class="mt-5">
        <p class="text-sm">
            Data analyst who is on track with registring new
            data assets and maintaining them aswell.
        </p>
     </div>
     <div class="mt-8">
        <p class="text-sm text-primary">
            50000€ - 60000€ a year
        </p>
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
