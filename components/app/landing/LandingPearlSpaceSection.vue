<template>
  <LandingSectionContainer>
    <h1>Pearl <span class="text-primary">space</span></h1>
    <p>These are the main features of ocean pearl.</p>
    <div class="flex flex-wrap">
      <div v-for="card in cards" :key="card.title" class="card shadow">
        <img>
        {{ card.title }}
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
          imageURL: '../../../assets/images/illustrations/track-projects.png',
        },
        { title: 'Submit Project', buttonTarget: '', imageURL: '' },
        { title: 'Find Jobs', buttonTarget: '', imageURL: '' },
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
