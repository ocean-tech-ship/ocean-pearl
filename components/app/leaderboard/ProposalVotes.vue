<template>
  <div class="flex flex-row justify-center flex-grow w-52 px-2">
    <div class="flex flex-col text-right justify-center">
      <span class="text-primary">{{addPunctuation(proposal.yesVotes)}}</span>
      <span>{{addPunctuation(proposal.noVotes)}}</span>
    </div>
    <div class="flex flex-col inline-block w-22 text-left items-center justify-center">
      <span class="text-primary">&nbsp;{{$t('leaderboard.proposal.votes.yes')}}</span>
      <span>&nbsp;{{$t('leaderboard.proposal.votes.no')}}</span>
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
