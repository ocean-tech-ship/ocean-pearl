<template>
  <landing-section-container>
    <h4>ROI <span class="text-primary">strategy</span></h4>

    <p class="small-text text-primary pt-4">{{ $t('project.roi.title') }}</p>
    <p class="small-text">{{ project.description }}</p>

    <p class="small-text text-primary pt-4">{{ $t('project.roi.bang') }}</p>
    <p class="small-text">{{ project.bang }}</p>

    <p class="small-text text-primary pt-4">{{ $t('project.roi.buck') }}</p>
    <p class="small-text">{{ project.buck }}</p>

    <p class="small-text text-primary pt-4">
      {{ $t('project.roi.success-chance') }}
    </p>
    <p class="small-text">{{ project.chance }}</p>

    <p class="small-text text-primary pt-4">
      {{ $t('project.roi.calculation') }}
    </p>
    <p class="small-text">{{ project.calculation }}</p>
  </landing-section-container>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer';

export default {
  name: 'ProjectSingleRoiStrategy',

  components: {
    LandingSectionContainer,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        description: '/',
        bang: '/',
        buck: '/',
        chance: '/',
        calculation: '/',
      }),
    },
  },
};
</script>

<style scoped></style>
