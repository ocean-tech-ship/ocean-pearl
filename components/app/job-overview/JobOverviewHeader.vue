<template>
  <LandingSectionContainer>
    <h2>{{ $t('jobs.title') }} <span class="text-primary">{{ $t('jobs.titleHighlight') }}</span></h2>
    <p>{{ $t('jobs.text') }}</p>
    <div class="flex items-center justify-between my-8">
      <JobStatus />
      <JobCategories />
      <JobBadges />  
    </div>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'
  import AppButton from '@/components/common/AppButton'
  import JobStatus from './JobStatus'
  import JobCategories from './JobCategories'
  import JobBadges from './JobBadges'

  export default {
    name: 'JobOverviewHeader',

    components: {
      LandingSectionContainer,
      AppButton,
      JobStatus,
      JobCategories,
      JobBadges
    },
  }
</script>

<style scoped>
</style>
