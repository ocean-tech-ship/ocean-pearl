<template>
  <LandingSectionContainer>
    <div class="mb-42px">
      <h2>Pearl <span class="text-primary">space</span></h2>
      <p>These are the main features of ocean pearl.</p>
    </div>
    <div class="grid gap-16px md:gap-31px lg:gap-62px grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="card in cards"
        :key="card.title"
        class="card shadow flex flex-col items-center rounded">
        <div class="h-275px pt-42px px-42px pb-62px flex items-center">
          <img class="w-full" :src="card.imageURL" :alt="card.title" />
        </div>
        <span class="font-poppins-bold text-lg px-42px pb-31px text-center">
          {{ card.title }}
        </span>
        <app-button class="mb-70px" />
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
          imageURL: require('@/assets/images/landing/track-projects.svg'),
        },
        {
          title: 'Submit Project',
          buttonTarget: '',
          imageURL: require('@/assets/images/landing/submit-projects.svg'),
        },
        {
          title: 'Find Jobs',
          buttonTarget: '',
          imageURL: require('@/assets/images/landing/find-jobs.svg'),
        },
      ],
    }
  },
}
</script>

