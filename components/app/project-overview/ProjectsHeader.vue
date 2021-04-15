<template>
  <LandingSectionContainer>
    <h2>Project <span class="text-primary">overview</span></h2>
    <p>See what the community has to offer.</p>
    <div class="flex items-center justify-between my-8">
      <ProjectsCategories />
      <ProjectsStatus />
      <ProjectsBadges /> 
    </div>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'
  import ProjectsStatus from './ProjectsStatus'
  import ProjectsBadges from './ProjectsBadges'
  import ProjectsCategories from './ProjectsCategories'
  import AppButton from '@/components/common/AppButton'

  export default {
    name: 'ProjectsHeader',

    components: {
      LandingSectionContainer,
      AppButton,
      ProjectsStatus,
      ProjectsBadges,
      ProjectsCategories
    },
  }
</script>

<style scoped>
  .p-line-head {
    line-height: 20px !important;
  }
</style>
