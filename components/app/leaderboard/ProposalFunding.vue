<template>
  <table>
    <tbody>
      <tr>
        <td class="text-right w-14">
          {{ addPunctuation(proposal.requestedFunding) }}
        </td>

        <td class="pl-2">
          {{
            $t(
              paymentOption === options.Usd
                ? 'general.types.usd'
                : 'general.types.ocean',
            )
          }}
        </td>
      </tr>

      <tr
        v-if="primary && proposal.receivedFunding !== proposal.requestedFunding"
      >
        <td class="text-right w-14">
          {{ addPunctuation(proposal.receivedFunding) }}
        </td>

        <td class="pl-2">
          {{
            $t(
              paymentOption === options.Usd
                ? 'general.types.usd'
                : 'general.types.ocean',
            )
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/Leaderboard.model';
import Numbers from '@/mixins/Numbers';
import PaymentOptionEnum from '@/enums/PaymentOption.enum';

export default {
  name: 'ProposalFunding',

  mixins: [Numbers],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    primary: {
      type: Boolean,
      required: false,
      default: false,
    },

    paymentOption: {
      type: String as () => PaymentOptionEnum,
      required: true,
    },
  },

  data() {
    return {
      options: PaymentOptionEnum,
    };
  },
};
</script>
