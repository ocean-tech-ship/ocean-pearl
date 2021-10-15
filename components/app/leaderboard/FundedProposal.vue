<template>
  <div class="bg-white rounded shadow flex items-stretch divide-x divide-darkgrey">
    <div class="p-2 px-5 flex items-center w-3/5">
      <!-- logo -->
      <div class="pr-3">
        <app-logo
          :src="proposal.logo && proposal.logo.url"
          :alt="proposal.title"
        />
      </div>

      <!-- details -->
      <div class="flex-grow">
        <span>
          <span
            :class="{ 'text-primary': index === 1 }"
            class="font-bold pr-1"
          >
            {{ `#${index}` }}
          </span>
          {{ proposal.title }}
        </span>

        <div class="space-y-1 py-2">
          <app-progressbar :level="(100 / maxVotes) * proposal.yesVotes" />
          <app-progressbar secondary :level="(100 / maxVotes) * proposal.noVotes" />
        </div>

        <proposal-tags :proposal="proposal" />
      </div>
    </div>

    <!-- votes -->
    <div class="p-2 px-5 flex items-center">
      <table>
        <tbody>
        <tr class="text-primary">
          <td class="text-right">{{ addPunctuation(proposal.yesVotes) }}</td>
          <td class="pl-2">{{ $t('leaderboard.proposal.votes.yes') }}</td>
        </tr>
        <tr>
          <td class="text-right">{{ addPunctuation(proposal.noVotes) }}</td>
          <td class="pl-2">{{ $t('leaderboard.proposal.votes.no') }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- completed proposals gamification -->
    <div class="p-2 px-5 flex items-center justify-center flex-grow">
      <proposal-badge background :proposal="proposal" />
    </div>

    <!-- vote action -->
    <div class="p-2 px-5 flex items-center justify-center flex-grow">
      <proposal-vote background :proposal="proposal" />
    </div>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal} from '@/models/Leaderboard.model';
import AppLogo from '@/components/common/AppLogo.vue';
import AppProgressbar from '@/components/common/AppProgressbar.vue';
import Numbers from '@/mixins/Numbers';
import ProposalBadge from '@/components/app/leaderboard/ProposalBadge.vue';
import ProposalTags from '@/components/app/leaderboard/ProposalTags.vue';
import ProposalVote from '~/components/app/leaderboard/ProposalVote.vue';

export default {
  name: 'FundedProposal',

  components: { ProposalVote, ProposalTags, ProposalBadge, AppProgressbar, AppLogo },

  mixins: [Numbers],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    maxVotes: {
      type: Number,
      required: true,
    }
  },
};
</script>
