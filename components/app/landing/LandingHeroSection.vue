<template>
  <LandingSectionContainer>
    <div class="w-full h-64 grid grid-cols-2 gap-4">
      <div>
        <h1>
          We are on track with the newest <span class="text-primary">projects</span> powered by the ocean
          protocol.
        </h1>
        <p>
          An absolute random example of some text being randomly put together to
          make it look like someone has written something meaningful already.
        </p>
        <AppButton />
      </div>
      <div>
        <img
          class="w-full"
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
