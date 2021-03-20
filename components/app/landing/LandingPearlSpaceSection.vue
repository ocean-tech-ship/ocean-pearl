<template>
  <LandingSectionContainer>
    <div class="mb-42px">
      <h1>Pearl <span class="text-primary">space</span></h1>
      <p>These are the main features of ocean pearl.</p>
    </div>
    <div class="flex flex-wrap justify-between">
      <div v-for="card in cards" :key="card.title" class="card shadow flex flex-col items-center">
        <div class="h-275 pt-42px px-42px pb-62px flex items-center">
        <img class="" :src="card.imageURL" :alt="card.title" />
        </div>
        <span class="font-poppins-bold text-lg pb-31px"> {{ card.title }} </span>
        <app-button/>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue'
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingPearlSpaceSection',

  components: {
    AppButton,
    LandingSectionContainer,
  },
  data() {
    return {
      cards: [
        {
          title: 'Track Projects',
          buttonTarget: '',
          imageURL: require('@/assets/images/illustrations/track-projects.png'),
        },
        {
          title: 'Submit Project',
          buttonTarget: '',
          imageURL: require('@/assets/images/illustrations/submit-projects.png'),
        },
        {
          title: 'Find Jobs',
          buttonTarget: '',
          imageURL: require('@/assets/images/illustrations/find-jobs.png'),
        },
      ],
    }
  },
}
</script>

<style lang='scss' scoped>
.card {
  height: 525px;
  width: 362px;
}
</style>
