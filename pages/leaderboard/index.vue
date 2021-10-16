<template>
  <div>
    <section-container>
      <leaderboard-header />
    </section-container>

    <app-gradient-background>
      <section-container class="py-5">
        <!-- TODO: round, countdown, legend -->

        <div class="space-y-4">
          <leaderboard-proposal
            v-for="(prop, index) in leaderboard.fundedProposals"
            :key="prop.id"
            :proposal="prop"
            :index="index + 1"
            :max-votes="leaderboard.maxVotes"
            primary
          />
        </div>
      </section-container>
    </app-gradient-background>

    <section-container class="py-5">
      <!-- TODO: round, countdown, legend -->

      <div class="border rounded border-primary divide-y divide-darkgrey">
        <leaderboard-proposal
          v-for="(prop, index) in leaderboard.notFundedProposals"
          :key="prop.id"
          :proposal="prop"
          :index="index + 1 + leaderboard.fundedProposals.length"
          :max-votes="leaderboard.maxVotes"
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
import LeaderboardHeader from '~/components/app/leaderboard/LeaderboardHeader.vue';
import AppGradientBackground from '~/components/common/AppPrimaryGradientBackground.vue';
import LeaderboardProposal from '@/components/app/leaderboard/LeaderboardProposal.vue';

export default Vue.extend({
  components: { LeaderboardProposal, AppGradientBackground, LeaderboardHeader, SectionContainer },

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
