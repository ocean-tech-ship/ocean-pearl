<template>
  <div
    class="bg-white flex items-stretch divide-x divide-darkgrey"
  >
    <div
      :class="{ 'w-1/2': primary, 'w-2/5': !primary }"
      class="p-2 px-5 flex items-center"
    >
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
            :class="{ 'text-primary': primary && index === 0 }"
            class="font-bold pr-1"
          >
            {{ `#${index + indexOffset + 1}` }}
          </span>
          {{ proposal.title }}
        </span>

        <div v-if="primary" class="space-y-1 py-2">
          <app-progressbar :level="calcPct(maxVotes, proposal.yesVotes)" />
          <app-progressbar secondary :level="calcPct(maxVotes, proposal.noVotes)" />
        </div>

        <proposal-tags :proposal="proposal" />
      </div>
    </div>

    <!-- votes -->
    <div
      :class="{ 'w-3/12': primary, 'w-1/5': !primary }"
      class="p-2 px-5 flex items-center justify-center"
    >
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

    <!-- votes needed (non primary!) -->
    <div v-if="!primary" class="p-2 px-5 flex items-center justify-center w-1/5">
      <span>{{ addPunctuation(proposal.neededVotes) }}</span>
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
  name: 'LeaderboardProposal',

  components: { ProposalVote, ProposalTags, ProposalBadge, AppProgressbar, AppLogo },

  mixins: [Numbers],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    indexOffset: {
      type: Number,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    maxVotes: {
      type: Number,
      required: true,
    },

    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    calcPct(maxVotes: number, votes: number): number {
      const pct = (100 / maxVotes) * votes;
      return pct < 0.5 ? 0.5 : pct;
    }
  }
};
</script>
