<template>
  <LandingSectionContainer class="md:mb-32 xl:mb-64">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="pt-6">
        <h1>
          We are on track with the newest
          <span class="text-primary">projects</span> powered by the ocean
          protocol.
        </h1>
        <p class="pt-6">
          An absolute random example of some text being randomly put together to
          make it look like someone has written something meaningful already.
        </p>
       <NuxtLink to="/project-overview"> 
        <AppButton :icon="require('@/assets/images/icons/sailing_ship.svg')" text="Explore" class="pt-8" />
       </NuxtLink>
      </div>
      <div class="hidden md:flex">
        <img
          class="self-center w-full pt-8 lg:pt-0"
          src="@/assets/images/kraken.webp"
          alt="kraken"
        />
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue'
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingHeroSection',
  components: {
    AppButton,
    LandingSectionContainer,
  },
}
</script>

<style scoped></style>
