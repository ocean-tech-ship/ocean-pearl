<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="pt-6">
      <h1>
        {{ $t('landing.hero.titlePart1') }}
        <span class="text-primary">
          {{ $t('landing.hero.titleHighlight') }}
        </span>
        {{ $t('landing.hero.titlePart2') }}
      </h1>
      <p class="pt-6 mb-8 text-base-content">
        {{ $t('landing.hero.text') }}
      </p>
      <app-button
        as="link"
        to="/projects"
        class="btn-gradient-primary-variant border-0 text-primary-content"
        :icon="icons.sailboat"
      >
        {{ $t('landing.hero.buttonText') }}
      </app-button>
    </div>
    <div class="hidden md:flex">
      <img
        class="self-center w-full pt-8 lg:pt-0"
        src="@/assets/images/landing/squid-full.svg"
        alt="kraken"
      />
    </div>
  </div>
</template>

<script>
import sailboat from '@iconify/icons-mdi/sail-boat';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'LandingHeroSection',

  components: {
    AppButton,
  },

  data() {
    return {
      icons: {
        sailboat,
      },
    };
  },
};
</script>
