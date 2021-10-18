<template>
  <div>
    <table>
      <tbody>
      <tr class="text-primary">
        <td class="w-24 text-right">{{ addPunctuation(proposal.yesVotes) }}</td>
        <td class="pl-2">{{ $t('leaderboard.proposal.votes.yes') }}</td>
        <td></td>
      </tr>
      <tr>
        <td class="w-24 text-right">{{ addPunctuation(proposal.noVotes) }}</td>
        <td class="w-24 pl-2">{{ $t('leaderboard.proposal.votes.no') }}</td>
      </tr>
      </tbody>
    </table>
  </div>
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
