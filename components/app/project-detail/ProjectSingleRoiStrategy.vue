<template>
  <landing-section-container>
    <h4>ROI <span class="text-primary">strategy</span></h4>

    <p class="small-text text-primary pt-4">{{ $t('project.roi.title') }}</p>
    <p class="small-text">{{ description }}</p>

    <p class="small-text text-primary pt-4">{{ $t('project.roi.bang') }}</p>
    <p class="small-text">{{ bang }}</p>

    <p class="small-text text-primary pt-4">{{ $t('project.roi.buck') }}</p>
    <p class="small-text">{{ buck }}</p>

    <p class="small-text text-primary pt-4">
      {{ $t('project.roi.success-chance') }}
    </p>
    <p class="small-text">{{ chance }}</p>

    <p class="small-text text-primary pt-4">
      {{ $t('project.roi.calculation') }}
    </p>
    <p class="small-text">{{ calculation }}</p>
  </landing-section-container>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'

export default {
  name: 'ProjectSingleRoiStrategy',

  components: {
    LandingSectionContainer,
  },

  props: {
    description: {
      type: String,
      required: true,
      default: '/',
    },

    bang: {
      type: String,
      required: true,
      default: '/',
    },

    buck: {
      type: String,
      required: true,
      default: '/',
    },

    chance: {
      type: String,
      required: true,
      default: '/',
    },

    calculation: {
      type: String,
      required: true,
      default: '/',
    },
  },
}
</script>

<style scoped></style>
