<template>
  <LandingSectionContainer class="my-32">
    <div class="mb-42px">
      <h2>
        {{ $t('landing.pearl_space.title') }}
        <span class="text-primary">
          {{ $t('landing.pearl_space.titleHighlight') }}</span
        >
      </h2>
      <p>{{ $t('landing.pearl_space.text') }}</p>
    </div>
    <div
      class="
        grid
        gap-16px
        md:gap-31px
        lg:gap-62px
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      <div
        v-for="card in cards"
        :key="card.title"
        class="card shadow flex flex-col items-center rounded"
      >
        <div class="h-275px pt-42px px-42px pb-62px flex items-center">
          <img class="w-full" :src="card.imageURL" :alt="card.title" />
        </div>
        <span class="font-poppins-bold text-lg px-48px pb-31px text-center">
          {{ card.title }}
        </span>
        <AppLink :to="card.buttonTarget" class="mb-70px">
          <AppButtonStyle :text="card.buttonText" />
        </AppLink>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer';
import AppButtonStyle from '@/components/common/AppButtonStyle';
import AppLink from '@/components/common/AppLink';

export default {
  name: 'LandingPearlSpaceSection',
  components: {
    AppButtonStyle,
    LandingSectionContainer,
    AppLink,
  },
  data() {
    return {
      cards: [
        {
          title: 'Find DAO Projects',
          buttonTarget: '/dao-proposals',
          imageURL: require('@/assets/images/landing/track-projects.svg'),
          buttonText: 'Find',
        },
        {
          title: 'Submit Proposal',
          buttonTarget:
            'https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template',
          imageURL: require('@/assets/images/landing/submit-projects.svg'),
          buttonText: 'Submit',
        },
        {
          title: 'Explore Projects',
          buttonTarget: '/projects',
          imageURL: require('@/assets/images/landing/find-jobs.svg'),
          buttonText: 'Explore',
        },
      ],
    };
  },
};
</script>
