<template>
  <LandingSectionContainer class="my-32">
    <hr class="text-primary mb-32" />

    <h2>
      {{ $t('landing.pearl_dao.title') }}
      <span class="text-primary">{{
        $t('landing.pearl_dao.titleHighlight')
      }}</span>
    </h2>

    <p>{{ $t('landing.pearl_dao.text') }}</p>

    <round-metrics class="mt-10" :metrics="metrics" />
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics';

export default {
  name: 'LandingPearlDao',

  components: {
    LandingSectionContainer,
    RoundMetrics,
  },

  props: {
    metrics: {
      type: Object,
      required: true,
      default: {
        fundingRound: '',
        totalDaoProposals: '',
        currentRound: {
          startDate: new Date(),
          submissionEndDate: new Date(),
          votingStartDate: new Date(),
          endDate: new Date(),
        },
        nextRound: {
          startDate: new Date(),
          submissionEndDate: new Date(),
          votingStartDate: new Date(),
          endDate: new Date(),
        },
        totalRequestedFundingOcean: '',
        totalVotes: '',
      },
    },
  },
};
</script>
