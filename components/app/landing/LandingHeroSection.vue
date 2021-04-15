<template>
  <LandingSectionContainer class="md:mb-32 xl:mb-64">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="pt-6">
        <h1>
          {{ $t('landing.hero.titleBlack') }} 
          <span class="text-primary">{{ $t('landing.hero.titlePink') }}</span> 
          {{ $t('landing.hero.titleBlack2') }}
        </h1>
        <p class="pt-6">
          {{ $t('landing.hero.text') }}
        </p>
       <NuxtLink to="/project-overview"> 
        <AppButton class="pt-8" />
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

