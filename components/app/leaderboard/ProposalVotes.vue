<template>
  <div class="flex flex-col text-right items-right justify-center flex-grow w-52 px-2">
    <div class="text-primary">
      <span>{{addPunctuation(proposal.yesVotes)}}</span>
      <span class="inline-block w-20">{{$t('leaderboard.proposal.votes.yes')}}</span>
    </div>
    <div>
      <span>{{addPunctuation(proposal.noVotes)}}</span>
      <span class="inline-block w-20">{{$t('leaderboard.proposal.votes.no')}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/LeaderboardProposal.model';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'ProposalVotes',

  mixins: [Numbers],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },
  },
};
</script>
