<template>
  <div>
    <section-container class="pb-8">
      <h2>
        {{ $t('leaderboard.title[0]') }}
        <span class="text-primary">
          {{ $t('leaderboard.title[1]') }}
        </span>
      </h2>

      <p>{{ $t('leaderboard.subtitle') }}</p>

      <!-- metrics -->
      <div class="pt-4">
        <leaderboard-metrics-skeleton v-if="$fetchState.pending" />
        <leaderboard-metrics v-else :leaderboard="leaderboard" />
      </div>
    </section-container>

    <app-gradient-background>
      <!-- funded section -->
      <section-container class="pb-8">
        <div class="flex flex-wrap lg:justify-between">
          <div class="pt-8">
            <round-indicator-skeleton v-if="$fetchState.pending" primary />
            <round-indicator v-else primary :leaderboard="leaderboard" />
          </div>

          <div class="flex-grow py-8 px-2 md:px-6 lg:px-12 xl:px-24">
            <voting-countdown-skeleton v-if="$fetchState.pending" primary />
            <voting-countdown v-else primary :leaderboard="leaderboard" />
          </div>

          <div class="pt-8 hidden lg:block">
            <tier-legend primary />
          </div>
        </div>

        <div class="pt-4 pb-8 text-white">
          <div class="flex items-center">
            <h4>{{ $t('leaderboard.funded') }}</h4>

            <live-indicator
              v-if="leaderboard.status === statusEnum.VotingInProgress"
              class="pl-4"
              @click="fetchSilent()"
            />
          </div>

          <p class="small-text">
            {{ $t('leaderboard.guarantee[0]') }}
            <app-link
              to="https://airtable.com/shrd5s7HSXc2vC1iC"
              class="underline"
              >{{ $t('leaderboard.guarantee[1]') }}</app-link
            >
          </p>
        </div>

        <div class="space-y-4">
          <proposal-header primary class="hidden lg:flex" />

          <div v-if="$fetchState.pending" class="space-y-4">
            <leaderboard-proposal-skeleton
              v-for="i in 5"
              :key="i"
              class="rounded shadow w-full"
              primary
            />
          </div>

          <div v-else class="space-y-4">
            <!-- empty hint (temporary solution) -->
            <div
              v-if="
                !leaderboard.fundedProposals ||
                leaderboard.fundedProposals.length === 0
              "
              class="flex justify-center"
            >
              <div
                class="
                  border border-white
                  text-white text-center
                  rounded
                  px-2
                  py-1
                "
              >
                {{ $t('leaderboard.empty') }}
              </div>
            </div>

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
        </div>
      </section-container>
    </app-gradient-background>

    <!-- pending section -->
    <section-container class="pb-5">
      <div class="flex flex-wrap lg:justify-between">
        <div class="pt-8">
          <round-indicator-skeleton v-if="$fetchState.pending" />
          <round-indicator v-else :leaderboard="leaderboard" />
        </div>

        <div class="flex-grow py-8 px-2 md:px-6 lg:px-12 xl:px-24">
          <voting-countdown-skeleton v-if="$fetchState.pending" />
          <voting-countdown v-else :leaderboard="leaderboard" />
        </div>

        <div class="pt-8 hidden lg:block">
          <tier-legend />
        </div>
      </div>

      <div class="py-4">
        <h4 class="text-primary">{{ $t('leaderboard.pending') }}</h4>
      </div>

      <div class="space-y-4">
        <proposal-header class="hidden lg:flex" />

        <!-- mobile variant -->
        <div class="lg:hidden space-y-2">
          <div v-if="$fetchState.pending" class="space-y-2">
            <leaderboard-proposal-skeleton
              v-for="i in 5"
              :key="i"
              class="rounded border border-primary"
            />
          </div>

          <div v-else class="space-y-2">
            <!-- empty hint (temporary solution) -->
            <div
              v-if="
                !leaderboard.notFundedProposals ||
                leaderboard.notFundedProposals.length === 0
              "
              class="flex justify-center"
            >
              <div
                class="
                  border border-primary
                  text-primary text-center
                  rounded
                  px-2
                  py-1
                "
              >
                {{ $t('leaderboard.empty') }}
              </div>
            </div>

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
        </div>

        <!-- desktop variant -->
        <div class="hidden lg:block">
          <div
            v-if="$fetchState.pending"
            class="rounded border border-primary divide-y divide-darkgrey"
          >
            <leaderboard-proposal-skeleton
              v-for="(i, index) in 5"
              :key="i"
              :class="{
                'rounded-t': index === 0,
                'rounded-b': index === 4,
              }"
            />
          </div>

          <div
            v-else-if="
              !leaderboard.notFundedProposals ||
              leaderboard.notFundedProposals.length === 0
            "
          >
            <!-- empty hint (temporary solution) -->
            <div class="flex justify-center">
              <div
                class="
                  border border-primary
                  text-primary text-center
                  rounded
                  px-2
                  py-1
                "
              >
                {{ $t('leaderboard.empty') }}
              </div>
            </div>
          </div>

          <div
            v-else
            class="rounded border border-primary divide-y divide-darkgrey"
          >
            <leaderboard-proposal
              v-for="(prop, index) in leaderboard.notFundedProposals"
              :key="prop.id"
              :proposal="prop"
              :index="index"
              :index-offset="leaderboard.fundedProposals.length"
              :max-votes="leaderboard.maxVotes"
              :class="{
                'rounded-t': index === 0,
                'rounded-b':
                  index === leaderboard.notFundedProposals.length - 1,
              }"
            />
          </div>
        </div>
      </div>
    </section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { getLeaderboard } from '@/api';
import getExampleResult from '@/pages/dao-voting/ExampleResult';
import createHead from '@/pages/dao-voting/index.head';
import SectionContainer from '@/components/common/SectionContainer.vue';
import AppGradientBackground from '@/components/common/AppPrimaryGradientBackground.vue';
import LeaderboardProposal from '@/components/app/leaderboard/LeaderboardProposal.vue';
import ProposalHeader from '@/components/app/leaderboard/ProposalHeader.vue';
import LiveIndicator from '@/components/app/leaderboard/LiveIndicator.vue';
import RoundIndicator from '@/components/app/leaderboard/RoundIndicator.vue';
import TierLegend from '@/components/app/leaderboard/TierLegend.vue';
import VotingCountdown from '@/components/app/leaderboard/VotingCountdown.vue';
import LeaderboardMetrics from '@/components/app/leaderboard/LeaderboardMetrics.vue';
import RoundStatusEnum from '@/enums/RoundStatus.enum';
import LeaderboardMetricsSkeleton from '@/components/app/leaderboard/LeaderboardMetricsSkeleton.vue';
import VotingCountdownSkeleton from '@/components/app/leaderboard/VotingCountdownSkeleton.vue';
import RoundIndicatorSkeleton from '@/components/app/leaderboard/RoundIndicatorSkeleton.vue';
import LeaderboardProposalSkeleton from '@/components/app/leaderboard/LeaderboardProposalSkeleton.vue';
import AppLink from '~/components/common/AppLink';

export default Vue.extend({
  components: {
    AppLink,
    LeaderboardProposalSkeleton,
    RoundIndicatorSkeleton,
    VotingCountdownSkeleton,
    LeaderboardMetricsSkeleton,
    LeaderboardMetrics,
    VotingCountdown,
    TierLegend,
    RoundIndicator,
    LiveIndicator,
    ProposalHeader,
    LeaderboardProposal,
    AppGradientBackground,
    SectionContainer,
  },

  data() {
    return {
      statusEnum: RoundStatusEnum,
      timer: null,
      leaderboard: {},
    };
  },

  async fetch() {
    // Initial fetching with skeleton loader
    await this.fetchSilent();
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  mounted() {
    this.timer = setInterval(() => this.fetchSilent(), 1000 * 60 * 3);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    async fetchSilent() {
      this.$data.leaderboard = await getLeaderboard(this.$axios);
      // Faked leaderboard results for easy build
      // this.$data.leaderboard = await getExampleResult();
    },
  },
});
</script>
