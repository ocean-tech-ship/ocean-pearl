<template>
  <div class="flex justify-between sm:justify-around">
    <div
      class="
        flex flex-col
        text-right
        items-right
        justify-center
        w-52
        px-2
        rounded
        border border-darkgrey
        p-1
        px-2
      "
    >
      <div
        class="
          flex flex-col
          text-right
          items-right
          justify-center
          flex-grow
          w-52
          px-4
        "
      >
        <div class="text-primary">
          <span>{{ addPunctuation(proposal.yesVotes) }}</span>
          <span class="inline-block w-20">{{
            $t('leaderboard.proposal.votes.yes')
          }}</span>
        </div>
        <div>
          <span>{{ addPunctuation(proposal.noVotes) }}</span>
          <span class="inline-block w-20">{{
            $t('leaderboard.proposal.votes.no')
          }}</span>
        </div>
      </div>
    </div>

    <div class="self-center border border-darkgrey rounded p-1 px-2">
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
</template>

<script lang="ts">
import Numbers from '@/mixins/Numbers';
import { LeaderboardProposal } from '~/models/LeaderboardProposal.model';
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
