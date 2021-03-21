<template>
  <LandingSectionContainer>
    <!-- Headline ------------------------------------------------------------------>
    <h2>Project <span class="text-primary">overview</span></h2>
    <p>See what the community has to offer.</p>

    <!-- Header ------------------------------------------------------------------>
    <div class="flex items-center justify-between my-8">

      <!-- Categories -->
      <div class="text-primary">
        <div class="flex border py-1 px-2">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-3">Category</p>
        </div>
      </div>

      <!-- Status -->
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

      <!-- Badges -->
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

    <!-- projects ------------------------------------------------------------------>
    <div class="grid grid-cols-5 gap-4 mt-12">

      <!-- #1 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center relative">
          <div class="absolute top-0 right-0 mr-3 flex space-x-2">
            <img src="@/assets/images/icons/hiring-badge.png" alt="hiring job">
            <img src="@/assets/images/icons/bitcoin-badge.png" alt="hiring job">
          </div>
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>


      <!-- #2 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #3 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>



      <!-- #4 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #5 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #6 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>


      <!-- #7 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #8 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>


      <!-- #9 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #10 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>


      <!-- #11 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>


      <!-- #12 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #13 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>



      <!-- #14 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>

      <!-- #15 ------------------------------------------------------------------>
      <div class="shadow p-2 pb-12 text-center">
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            src="@/assets/images/project-logos/jellyfish.png" alt="poseidon-network" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">jellyfish</p>
          <p class="small-text">DeFi</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
              This text describes the project
              in one pretty cool sentence.
          </p>
        </div>
      </div>


    </div>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'
  import AppButton from '@/components/common/AppButton'

  export default {
    name: 'LandingDaoProposal',

    components: {
      LandingSectionContainer,
      AppButton
    },
  }
</script>

<style scoped>
  .p-line-head {
    line-height: 20px !important;
  }
</style>
