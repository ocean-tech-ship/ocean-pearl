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
        <AppLink class="mt-8" to="/project-overview">
          <AppButtonStyle
            :icon="require('@/assets/images/icons/sailing_ship.svg')"
            text="Explore"
          />
        </AppLink>
        <AppButton
          :icon="require('@/assets/images/icons/sailing_ship.svg')"
          text="Explore"
        />
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
import AppLink from '@/components/common/AppLink.vue'
import LandingSectionContainer from './LandingSectionContainer'
import AppButtonStyle from '~/components/common/AppButtonStyle.vue'

export default {
  name: 'LandingHeroSection',
  components: {
    AppButtonStyle,
    AppLink,
    LandingSectionContainer,
  },
}
</script>

<style scoped></style>
