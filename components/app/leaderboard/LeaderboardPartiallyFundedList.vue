<template>
  <section-container>
    <h4 class="text-primary py-4">{{ $t('leaderboard.partiallyFunded') }}</h4>
    <proposal-header
      :displayNeededVotes="leaderboard.status === roundStatusEnum.VotingInProgress"
      class="hidden lg:flex"
    />
    <div class="space-y-2 lg:space-y-4">
      <leaderboard-proposal
        class="rounded border border-primary"
        v-for="(proposal, index) in leaderboard.partiallyFundedProposals"
        :key="proposal.id"
        :proposal="proposal"
        :payment-option="leaderboard.paymentOption"
        :startIndex="index + leaderboard.fundedProposals.length"
        :max-votes="leaderboard.maxVotes"
        :primary="leaderboard.status !== roundStatusEnum.VotingInProgress"
      />
    </div>
  </section-container>
</template>

<script lang="ts">
import { Leaderboard } from '@/models/Leaderboard.model';
import LeaderboardProposalSkeleton from './LeaderboardProposalSkeleton.vue';
import SectionContainer from '../../common/SectionContainer.vue';
import LeaderboardProposal from './LeaderboardProposal.vue';
import ProposalHeader from './ProposalHeader.vue';
import RoundStatusEnum from '~/enums/RoundStatus.enum';

export default {
  name: 'PartiallyFundedList',

  components: {
    SectionContainer,
    LeaderboardProposal,
    LeaderboardProposalSkeleton,
    ProposalHeader,
  },

  props: {
    leaderboard: {
      type: Object as () => Leaderboard,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      roundStatusEnum: RoundStatusEnum,
    };
  },
};
</script>
