<template>
  <landing-section-container>
    <h2>
      {{ $t('dao-projects.header.title') }}
      <span class="text-primary">
        {{ $t('dao-projects.header.titleHighlight') }}
      </span>
    </h2>
    <p>{{ $t('dao-projects.header.text') }}</p>
  </landing-section-container>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';

export default {
  components: { LandingSectionContainer },
};
</script>
