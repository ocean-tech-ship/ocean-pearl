<template>
  <div>
    <floating-vote-action v-if="!pending" :leaderboard="leaderboard" />

    <fulltext-proposal
      :proposal="expandProposal"
      @close="expandProposal = null"
    />

    <section-container class="pb-8">
      <h2>
        {{ $t('leaderboard.title[0]') }}
        <span class="text-primary">
          {{ $t('leaderboard.title[1]') }}
        </span>
      </h2>

      <i18n path="leaderboard.subtitle" tag="p" class="pb-4">
        <template #disclaimer>
          <span class="font-bold">
            <br />
            {{ $t('leaderboard.disclaimer') }}
          </span>
        </template>
        <template #source>
          <app-link to="https://airtable.com/shrd5s7HSXc2vC1iC" class="link">
            {{ $t('leaderboard.airtable') }}</app-link
          >
        </template>
      </i18n>

      <!-- optional cms hint notification -->
      <nuxt-content
        v-if="hint.body.children.length > 0"
        class="mb-4"
        :document="hint"
      />

      <!-- metrics -->
      <leaderboard-metrics-skeleton v-if="pending" />
      <leaderboard-metrics v-else :leaderboard="leaderboard" />
      <grant-pools class="pt-4" :loading="pending" :leaderboard="leaderboard" />
    </section-container>

    <app-gradient-background>
      <!-- prime metrics -->
      <section-container class="pb-8">
        <div class="flex flex-wrap lg:justify-between">
          <div class="pt-8">
            <round-indicator-skeleton v-if="pending" primary />
            <div v-else>
              <round-indicator primary :leaderboard="leaderboard" />
              <leaderboard-filter
                :filter="filter"
                :rounds="currentRound"
                :set-filter="setFilter"
                :set-pending="setPending"
                :fetch-leaderboard="fetchLeaderboard"
                :set-fetch-interval="setFetchInterval"
                :clear-fetch-interval="clearFetchInterval"
              />
            </div>
          </div>

          <div class="flex-grow py-8 px-2 md:px-6 lg:px-12 xl:px-24">
            <voting-countdown-skeleton v-if="pending" primary />
            <voting-countdown v-else :leaderboard="leaderboard" />
          </div>

          <div class="pt-8 hidden lg:block">
            <tier-legend primary />
          </div>
        </div>

        <!-- funded proposals -->
        <div class="pt-4 pb-4 text-white">
          <div class="flex items-center">
            <h4 class="text-primary-content">{{ $t('leaderboard.funded') }}</h4>

            <live-indicator
              v-if="leaderboard.status === roundStatusEnum.VotingInProgress"
              class="pl-4"
              @click="resetAndRefetch"
            />
          </div>
        </div>

        <div class="space-y-4">
          <proposal-header primary class="hidden lg:flex" />

          <div v-if="pending" class="space-y-4">
            <leaderboard-proposal-skeleton
              v-for="i in SKELETON_LOADER_COUNT"
              :key="i"
              class="rounded shadow w-full"
              primary
            />
          </div>

          <div v-else class="space-y-2 mt-2 lg:space-y-4">
            <!-- empty hint (temporary solution) -->
            <div
              v-if="fundedProposals.length === 0"
              class="flex justify-center border border-base-200 text-base-200 text-center rounded px-2 py-1"
            >
              {{ $t('leaderboard.empty') }}
            </div>

            <leaderboard-proposal
              v-for="proposal in fundedProposals"
              :key="proposal.id"
              :proposal="proposal"
              :payment-option="leaderboard.paymentOption"
              :start-index="proposal.index"
              :max-votes="leaderboard.maxVotes"
              primary
              class="rounded shadow"
              @expand="expandProposal = proposal"
            />
          </div>
        </div>
      </section-container>
    </app-gradient-background>

    <!-- partially funded proposals -->
    <section-container v-if="partiallyFundedProposals.length > 0">
      <h4 class="text-primary py-4">{{ $t('leaderboard.partiallyFunded') }}</h4>
      <proposal-header class="hidden lg:flex" />
      <div class="space-y-2 lg:space-y-4">
        <leaderboard-proposal
          v-for="proposal in partiallyFundedProposals"
          :key="proposal.id"
          class="rounded border border-primary"
          :proposal="proposal"
          :payment-option="leaderboard.paymentOption"
          :max-votes="leaderboard.maxVotes"
          :primary="leaderboard.status !== roundStatusEnum.VotingInProgress"
          @expand="expandProposal = proposal"
        />
      </div>
    </section-container>

    <!-- not funded proposals -->
    <section-container class="pb-5">
      <h4 class="text-primary py-4">{{ $t('leaderboard.pending') }}</h4>

      <proposal-header class="hidden lg:flex" />

      <!-- mobile variant -->
      <div class="lg:hidden space-y-2">
        <div v-if="pending" class="space-y-2">
          <leaderboard-proposal-skeleton
            v-for="i in SKELETON_LOADER_COUNT"
            :key="i"
            class="rounded border border-primary"
          />
        </div>

        <div v-else class="space-y-2">
          <!-- empty hint (temporary solution) -->
          <div
            v-if="notFundedProposals.length === 0"
            class="flex justify-center border border-primary text-primary text-center rounded px-2 py-1"
          >
            {{ $t('leaderboard.empty') }}
          </div>

          <leaderboard-proposal
            v-for="proposal in notFundedProposals"
            :key="proposal.id"
            :proposal="proposal"
            :payment-option="leaderboard.paymentOption"
            :max-votes="leaderboard.maxVotes"
            :primary="leaderboard.status !== roundStatusEnum.VotingInProgress"
            class="rounded border border-primary"
            @expand="expandProposal = proposal"
          />
        </div>
      </div>

      <!-- desktop variant -->
      <div class="hidden lg:block">
        <div
          v-if="pending"
          class="rounded border border-primary divide-y divide-base-300"
        >
          <leaderboard-proposal-skeleton
            v-for="(i, index) in SKELETON_LOADER_COUNT"
            :key="i"
            :class="{
              'rounded-t': index === 0,
              'rounded-b': index === 4,
            }"
          />
        </div>

        <div v-else-if="notFundedProposals.length === 0">
          <!-- empty hint (temporary solution) -->
          <div class="flex justify-center">
            <div
              class="border border-primary text-primary text-center rounded px-2 py-1"
            >
              {{ $t('leaderboard.empty') }}
            </div>
          </div>
        </div>

        <div
          v-else
          class="rounded border border-primary divide-y divide-base-300"
        >
          <leaderboard-proposal
            v-for="(proposal, index) in notFundedProposals"
            :key="proposal.id"
            :proposal="proposal"
            :payment-option="leaderboard.paymentOption"
            :max-votes="leaderboard.maxVotes"
            :primary="leaderboard.status !== roundStatusEnum.VotingInProgress"
            :class="{
              'rounded-t': index === 0,
              'rounded-b': index === notFundedProposals.length - 1,
            }"
            @expand="expandProposal = proposal"
          />
        </div>
      </div>
    </section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
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
import LeaderboardMetricsSkeleton from '@/components/app/leaderboard/LeaderboardMetricsSkeleton.vue';
import VotingCountdownSkeleton from '@/components/app/leaderboard/VotingCountdownSkeleton.vue';
import RoundIndicatorSkeleton from '@/components/app/leaderboard/RoundIndicatorSkeleton.vue';
import LeaderboardProposalSkeleton from '@/components/app/leaderboard/LeaderboardProposalSkeleton.vue';
import AppLink from '@/components/common/AppLink';
import FloatingVoteAction from '@/components/app/leaderboard/FloatingVoteAction';
import LeaderboardFilter from '@/components/app/leaderboard/LeaderboardFilter';
import GrantPools from '@/components/app/leaderboard/GrantPools';
import AlertBox from '~/components/common/AlertBox';
import GrantPoolTypeEnum from '@/enums/GrantPoolType.enum';
import RoundStatusEnum from '@/enums/RoundStatus.enum';
import {
  processQueryToFilter,
  replaceQueryParams,
} from '@/helpers/windowHistory';
import FulltextProposal from '~/components/app/dao-proposals/FulltextProposalModal';

export default Vue.extend({
  components: {
    FulltextProposal,
    // eslint-disable-next-line vue/no-unused-components
    AlertBox,
    GrantPools,
    LeaderboardFilter,
    FloatingVoteAction,
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

  // set exception pages when page is left
  beforeRouteLeave(_to, _from, next) {
    this.clearFetchInterval();
    this.resetState();
    next();
  },

  async asyncData({ $content }) {
    const hint = await $content('leaderboard/hint').fetch();
    return { hint };
  },

  data() {
    return {
      SKELETON_LOADER_COUNT: 5,
      roundStatusEnum: RoundStatusEnum,
      timer: null,
      expandProposal: null,
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  computed: {
    ...mapState('dao-voting-filter', {
      filter: 'filter',
      currentRound: 'currentRound',
      pending: 'pending',
      leaderboard: 'leaderboard',
    }),
    fundedProposals() {
      return this.filterProposals(
        this.leaderboard.fundedProposals,
        this.filter.pools,
        0,
      );
    },
    partiallyFundedProposals() {
      return this.filterProposals(
        this.leaderboard.partiallyFundedProposals,
        this.filter.pools,
        this.leaderboard.fundedProposals?.length,
      );
    },
    notFundedProposals() {
      return this.filterProposals(
        this.leaderboard.notFundedProposals,
        this.filter.pools,
        this.leaderboard.fundedProposals?.length +
          this.leaderboard.partiallyFundedProposals?.length,
      );
    },
  },

  created() {
    const newFilter = processQueryToFilter(
      {
        round: this.$route.query.round,
        pools: this.$route.query.pools,
      },
      this.filter,
    );

    if (Object.entries(newFilter).length) {
      this.setPending(true).then(() =>
        this.setFilter(newFilter).then(() =>
          this.fetchLeaderboard().then((query) =>
            replaceQueryParams(this, query),
          ),
        ),
      );
      this.setFetchInterval();
      return;
    }

    this.setPending(true).then(() =>
      this.fetchLeaderboard().then((query) => replaceQueryParams(this, query)),
    );
    this.setFetchInterval();
  },

  methods: {
    resetState() {
      return this.$store.dispatch('dao-voting-filter/resetState');
    },
    setPending(payload) {
      return this.$store.dispatch('dao-voting-filter/setPending', payload);
    },
    setFilter(payload) {
      return this.$store.dispatch('dao-voting-filter/setFilter', payload);
    },
    fetchLeaderboard() {
      return this.$store.dispatch('dao-voting-filter/fetchAll');
    },
    filterProposals(proposals, poolFilter, indexOffset) {
      const indexedProposals =
        proposals?.map((proposal, index) => ({
          ...proposal,
          index: indexOffset + index,
        })) ?? [];

      if (!poolFilter || poolFilter.length === 0) {
        return indexedProposals;
      }

      return indexedProposals.filter(
        (proposal) =>
          poolFilter.includes(proposal.earmarkType) ||
          (!proposal.isEarmarked &&
            poolFilter.includes(GrantPoolTypeEnum.General)) ||
          Object.keys(proposal.grantPoolShare).some((share) =>
            poolFilter.includes(share),
          ),
      );
    },
    resetAndRefetch() {
      this.resetState().then(() =>
        this.fetchLeaderboard().then((query) =>
          replaceQueryParams(this, query),
        ),
      );
    },
    setFetchInterval() {
      this.timer = setInterval(() => this.fetchLeaderboard(), 1000 * 60 * 3);
    },
    clearFetchInterval() {
      clearInterval(this.timer);
    },
  },
});
</script>
