<template>
  <div>
    <section-container>
      <leaderboard-header />
    </section-container>

    <app-gradient-background>
      <section-container class="py-5">
        <div class="flex justify-between">
          <div>
            <round-indicator primary :leaderboard="leaderboard" />
          </div>

          <div class="flex-grow px-24">
            <voting-countdown primary :leaderboard="leaderboard" />
          </div>

          <div>
            <tier-legend primary />
          </div>
        </div>

        <div class="flex items-center py-4">
          <h4 class="text-white">{{ $t('leaderboard.funded') }}</h4>

          <live-indicator
            class="pl-4"
            @click="$fetch"
          />
        </div>

        <div class="space-y-4">
          <proposal-header primary class="hidden lg:flex" />

          <leaderboard-proposal
            v-for="(prop, index) in leaderboard.fundedProposals"
            :key="prop.id"
            :proposal="prop"
            :index="index"
            :index-offset="0"
            :max-votes="leaderboard.maxVotes"
            primary
            class="rounded shadow"
          />
        </div>
      </section-container>
    </app-gradient-background>

    <section-container class="py-5">
      <div class="flex justify-between">
        <div>
          <round-indicator :leaderboard="leaderboard" />
        </div>

        <div class="flex-grow px-24">
          <voting-countdown :leaderboard="leaderboard" />
        </div>

        <div>
          <tier-legend />
        </div>
      </div>

      <div class="py-4">
        <h4 class="text-primary">{{ $t('leaderboard.pending') }}</h4>
      </div>

      <div class="space-y-4">
        <proposal-header class="hidden lg:flex" />

        <div class="lg:hidden space-y-2">
          <leaderboard-proposal
            v-for="(prop, index) in leaderboard.notFundedProposals"
            :key="prop.id"
            :proposal="prop"
            :index="index"
            :index-offset="leaderboard.fundedProposals.length"
            :max-votes="leaderboard.maxVotes"
            class="rounded border border-primary"
          />
        </div>

        <div class="hidden lg:block rounded border border-primary divide-y divide-darkgrey">
          <leaderboard-proposal
            v-for="(prop, index) in leaderboard.notFundedProposals"
            :key="prop.id"
            :proposal="prop"
            :index="index"
            :index-offset="leaderboard.fundedProposals.length"
            :max-votes="leaderboard.maxVotes"
            :class="{ 'rounded-t': index === 0, 'rounded-b': index === leaderboard.notFundedProposals.length - 1 }"
          />
        </div>
      </div>
    </section-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getLeaderboard } from '@/api';
import getExampleResult from '@/pages/leaderboard/ExampleResult';
import createHead from '@/pages/leaderboard/index.head';
import { Leaderboard } from '@/models/Leaderboard.model';
import SectionContainer from '@/components/common/SectionContainer.vue';
import LeaderboardHeader from '@/components/app/leaderboard/LeaderboardHeader.vue';
import AppGradientBackground from '@/components/common/AppPrimaryGradientBackground.vue';
import LeaderboardProposal from '@/components/app/leaderboard/LeaderboardProposal.vue';
import ProposalHeader from '@/components/app/leaderboard/ProposalHeader.vue';
import LiveIndicator from '@/components/app/leaderboard/LiveIndicator.vue';
import RoundIndicator from '@/components/app/leaderboard/RoundIndicator.vue';
import TierLegend from '@/components/app/leaderboard/TierLegend.vue';
import VotingCountdown from '~/components/app/leaderboard/VotingCountdown.vue';

export default Vue.extend({
  components: { VotingCountdown, TierLegend, RoundIndicator, LiveIndicator, ProposalHeader, LeaderboardProposal, AppGradientBackground, LeaderboardHeader, SectionContainer },

  data() {
    return {
      leaderboard: {} as Leaderboard,
    };
  },

  async fetch() {
    // this.$data.leaderboard = await getLeaderboard(this.$axios);
    // Faked leaderboard results for easy build
    this.$data.leaderboard = await getExampleResult();
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },
});
</script>
