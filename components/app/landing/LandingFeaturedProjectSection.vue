<template>
  <LandingSectionContainer class="my-32">
    <!-- Headline ------------------------------------------------------------------>
    <h2>Featured <span class="text-primary">projects</span></h2>
    <p>A handpicked collection of our favourite projects at the moment.</p>

    <!-- Listed project illustration ------------------------------------------------------------------>
    <div class="w-full pt-6 grid grid-cols-3 md:grid-flow-col gap-4">

      <div class="listed-project-container shadow rounded-md pb-12 pt-6 px-4 col-span-1">
        <img class="self-center align-center" src="@/assets/images/illustrations/listed-illustration.png"
          alt="kraken" />
        <h4 class="content-center text-center my-12">2021 listed <span class="text-primary">projects</span></h4>
      </div>

      <!-- projects ------------------------------------------------------------------>
      <div class="grid grid-flow-col col-span-2 grid-cols-2 grid-rows-2 gap-4">
        <div class="shadow p-8 grid">
          <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
            </div>
            <div>
              <h4 class="text-primary">Parsiq</h4>
              <p class="text-sm mt-2">category</p>
            </div>
          </div>
          <div>
            <p class="text-sm mt-4">
              This is a nice project. It does so nice things. And this
              so leave some love and like this description.
            </p>
          </div>
          <div class="justify-self-end flex items-center mt-8">
            <p class="text-sm mr-2 text-primary">check out</p>
            <img src="@/assets/images/icons/check-out.png" alt="">
          </div>
        </div>

        <div class="shadow p-8 grid">
          <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
            </div>
            <div>
              <h4 class="text-primary">Parsiq</h4>
              <p class="text-sm mt-2">category</p>
            </div>
          </div>
          <div>
            <p class="text-sm mt-4">
              This is a nice project. It does so nice things. And this
              so leave some love and like this description.
            </p>
          </div>
          <div class="justify-self-end flex items-center mt-8">
            <p class="text-sm mr-2 text-primary">check out</p>
            <img src="@/assets/images/icons/check-out.png" alt="">
          </div>
        </div>

        <div class="shadow p-8 grid">
          <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
            </div>
            <div>
              <h4 class="text-primary">Parsiq</h4>
              <p class="text-sm mt-2">category</p>
            </div>
          </div>
          <div>
            <p class="text-sm mt-4">
              This is a nice project. It does so nice things. And this
              so leave some love and like this description.
            </p>
          </div>
          <div class="justify-self-end flex items-center mt-8">
            <p class="text-sm mr-2 text-primary">check out</p>
            <img src="@/assets/images/icons/check-out.png" alt="">
          </div>
        </div>

        <div class="shadow p-8 grid">
          <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="@/assets/images/project-logos/poseidon-network.png" alt="poseidon-network" />
            </div>
            <div>
              <h4 class="text-primary">Parsiq</h4>
              <p class="text-sm mt-2">category</p>
            </div>
          </div>
          <div>
            <p class="text-sm mt-4">
              This is a nice project. It does so nice things. And this
              so leave some love and like this description.
            </p>
          </div>
          <div class="justify-self-end flex items-center mt-8">
            <p class="text-sm mr-2 text-primary">check out</p>
            <img src="@/assets/images/icons/check-out.png" alt="">
          </div>
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
  import AppButton from '@/components/common/AppButton.vue'
  import LandingSectionContainer from './LandingSectionContainer'

  export default {
    name: 'LandingFeaturedProjectSection',

    components: {
      AppButton,
      LandingSectionContainer,
    },

  }
</script>

<style scoped>
  .listed-project-container {
    background: linear-gradient(180deg, #E183B3 0%, rgba(255, 255, 255, 0.77) 100%);
  }
</style>