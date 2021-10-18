<template>
  <table class="w-full">
    <tbody>
    <tr class="text-primary">
      <td class="text-right w-1/2">{{ addPunctuation(proposal.yesVotes) }}</td>
      <td class="pl-2 w-1/2">{{ $t('leaderboard.proposal.votes.yes') }}</td>
      <td></td>
    </tr>
    <tr>
      <td class="text-right w-1/2">{{ addPunctuation(proposal.noVotes) }}</td>
      <td class="pl-2 w-1/2">{{ $t('leaderboard.proposal.votes.no') }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/Leaderboard.model';
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
