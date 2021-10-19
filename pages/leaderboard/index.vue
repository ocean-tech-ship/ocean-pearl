<template>
  <div>
    <section-container>
      <leaderboard-header />
    </section-container>

    <app-gradient-background>
      <section-container class="py-5">
        <!-- TODO: round, countdown, legend -->

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

    <section-container class="py-5 space-y-4">
      <!-- TODO: round, countdown, legend -->

      <div class="hidden lg:block">
        <proposal-header />
      </div>

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
    </section-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getLeaderboard } from '@/api';
import getExampleResult from '@/pages/leaderboard/ExampleResult';
import { Leaderboard } from '@/models/Leaderboard.model';
import createHead from '@/pages/leaderboard/index.head';
import SectionContainer from '@/components/common/SectionContainer.vue';
import LeaderboardHeader from '@/components/app/leaderboard/LeaderboardHeader.vue';
import AppGradientBackground from '@/components/common/AppPrimaryGradientBackground.vue';
import LeaderboardProposal from '@/components/app/leaderboard/LeaderboardProposal.vue';
import ProposalHeader from '@/components/app/leaderboard/ProposalHeader.vue';

export default Vue.extend({
  components: { ProposalHeader, LeaderboardProposal, AppGradientBackground, LeaderboardHeader, SectionContainer },

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
