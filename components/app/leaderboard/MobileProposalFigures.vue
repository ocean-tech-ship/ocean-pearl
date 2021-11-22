<template>
  <div class="flex justify-between sm:justify-around">
    <div class="rounded border border-darkgrey p-1 px-2">
      <table>
        <tbody>
          <tr class="text-primary">
            <td class="text-right sm:w-24">
              {{ addPunctuation(proposal.yesVotes) }}
            </td>
            <td class="pl-1">{{ $t('leaderboard.proposal.votes.yes') }}</td>
          </tr>
          <tr>
            <td class="text-right">{{ addPunctuation(proposal.noVotes) }}</td>
            <td class="pl-1">{{ $t('leaderboard.proposal.votes.no') }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="self-center">
      <div class="border border-darkgrey rounded p-1 px-2">
        <div>
          {{
            $t('leaderboard.proposal.funding[0]', {
              amount: addPunctuation(proposal.requestedFunding),
              paymentOption,
            })
          }}
        </div>
        <div>{{ $t('leaderboard.proposal.funding[1]') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Numbers from '@/mixins/Numbers';
import { LeaderboardProposal } from '~/models/Leaderboard.model';
import PaymentOptionEnum from '~/enums/PaymentOption.enum';

export default {
  name: 'MobileProposalFigures',

  mixins: [Numbers],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    paymentOption: {
      type: String as () => PaymentOptionEnum,
      required: true,
    },
  },
};
</script>
