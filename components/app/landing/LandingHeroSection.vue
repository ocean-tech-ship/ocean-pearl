<template>
  <LandingSectionContainer>
    <div class="w-full grid grid-cols-2 md:grid-flow-col gap-4">
      <div class="pt-6">
        <h1>
          yessssur
          We are on track with the newest
          <span class="text-primary">projects</span> powered by the ocean
          protocol.
        </h1>
        <p class="pt-6">
          An absolute random example of some text being randomly put together to
          make it look like someone has written something meaningful already.
        </p>
        <AppButton class="pt-8" />
      </div>
      <div class="flex">
        <img
          class="self-center"
          src="../../../assets/images/kraken.webp"
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
