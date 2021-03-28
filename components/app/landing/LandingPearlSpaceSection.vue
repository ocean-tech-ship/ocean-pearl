<template>
  <LandingSectionContainer>
    <div class="mb-42px">
      <h2>Pearl <span class="text-primary">space</span></h2>
      <p>These are the main features of ocean pearl.</p>
    </div>
    <div
      class="grid gap-16px md:gap-31px lg:gap-62px grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        class="card shadow flex flex-col items-center rounded"
      >
        <div class="h-275px pt-42px px-42px pb-62px flex items-center">
          <img class="w-full" :src="card.imageURL" :alt="card.title" />
        </div>
        <span class="font-poppins-bold text-lg px-42px pb-31px text-center">
          {{ card.title }}
        </span>
        <AppButtonStyle :text="card.buttonText" class="mb-70px" />
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer'
import AppButtonStyle from '~/components/common/AppButtonStyle.vue'

export default {
  name: 'LandingPearlSpaceSection',

  components: {
    AppButtonStyle,
    LandingSectionContainer,
  },
  data() {
    return {
      cards: [
        {
          title: 'Track Projects',
          buttonTarget: '',
          imageURL: require('@/assets/images/illustrations/track-projects.png'),
          buttonText: 'Track',
        },
        {
          title: 'Submit Project',
          buttonTarget: '',
          imageURL: require('@/assets/images/illustrations/submit-projects.png'),
          buttonText: 'Submit',
        },
        {
          title: 'Find Jobs',
          buttonTarget: '',
          imageURL: require('@/assets/images/illustrations/find-jobs.png'),
          buttonText: 'Find',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
