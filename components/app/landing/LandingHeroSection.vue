<template>
  <LandingSectionContainer class="md:mb-32 xl:mb-64">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="pt-6">
        <h1>
          {{ $t('landing.hero.titlePart1') }} 
          <span class="text-primary"> {{ $t('landing.hero.titleHighlight') }} </span> 
          {{ $t('landing.hero.titlePart2') }}
        </h1>
        <p class="pt-6 mb-8">
          {{ $t('landing.hero.text') }}
        </p>
        <AppLink to="/project-overview">
          <AppButtonStyle
            :icon="require('@/assets/images/icons/sailing_ship.svg')"
            :text="$t('landing.hero.buttonText')"
          />
        </AppLink>
      </div>
      <div class="hidden md:flex">
        <img
          class="self-center w-full pt-8 lg:pt-0"
          src="@/assets/images/landing/kraken.webp"
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

