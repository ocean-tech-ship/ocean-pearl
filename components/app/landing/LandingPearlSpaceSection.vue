<template>
  <div>
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
      class="grid gap-16px md:gap-31px lg:gap-62px grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        class="card bg-base-200 shadow flex flex-col items-center rounded"
      >
        <div class="h-275px pt-42px px-42px pb-62px flex items-center">
          <img class="w-full" :src="card.imageURL" :alt="card.title" />
        </div>
        <span class="font-poppins-bold text-lg px-2 pb-31px text-center">
          {{ card.title }}
        </span>
        <app-button
          as="link"
          :to="card.buttonTarget"
          class="btn-gradient-primary-variant border-0 mb-70px mt-auto"
          >{{ card.buttonText }}</app-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/common/AppLink';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'LandingPearlSpaceSection',
  components: {
    AppButton,
    AppLink,
  },
  data() {
    return {
      cards: [
        {
          title: 'Find DAO Proposals',
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
