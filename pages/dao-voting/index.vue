<template>
  <div>
    <floating-vote-action
      v-if="!$store.state['dao-voting-filter'].pending"
      :leaderboard="$store.state['dao-voting-filter'].leaderboard"
    />

    <section-container class="pb-8">
      <h2>
        {{ $t('leaderboard.title[0]') }}
        <span class="text-primary">
          {{ $t('leaderboard.title[1]') }}
        </span>
      </h2>

      <p class="pb-4">{{ $t('leaderboard.subtitle') }}</p>

      <!-- metrics -->
      <leaderboard-metrics-skeleton
        v-if="$store.state['dao-voting-filter'].pending"
      />
      <leaderboard-metrics
        v-else
        :leaderboard="$store.state['dao-voting-filter'].leaderboard"
      />
    </section-container>

    <app-gradient-background>
      <!-- funded section -->
      <section-container class="pb-8">
        <div class="flex flex-wrap lg:justify-between">
          <div class="pt-8">
            <round-indicator-skeleton
              v-if="$store.state['dao-voting-filter'].pending"
              primary
            />
            <div v-else>
              <round-indicator
                primary
                :leaderboard="$store.state['dao-voting-filter'].leaderboard"
              />
              <leaderboard-filter
                :filter="$store.state['dao-voting-filter'].filter"
                :rounds="$store.state['dao-voting-filter'].currentRound"
                :set-filter="setFilter"
                :fetch-leaderboard="fetchLeaderboard"
                :set-fetch-interval="setFetchInterval"
                :clear-fetch-interval="clearFetchInterval"
              />
            </div>
          </div>

          <div class="flex-grow py-8 px-2 md:px-6 lg:px-12 xl:px-24">
            <voting-countdown-skeleton
              v-if="$store.state['dao-voting-filter'].pending"
              primary
            />
            <voting-countdown
              v-else
              primary
              :leaderboard="$store.state['dao-voting-filter'].leaderboard"
            />
          </div>

          <div class="pt-8 hidden lg:block">
            <tier-legend primary />
          </div>
        </div>

        <div class="pt-4 pb-8 text-white">
          <div class="flex items-center">
            <h4>{{ $t('leaderboard.funded') }}</h4>

            <live-indicator
              v-if="
                $store.state['dao-voting-filter'].leaderboard.status ===
                statusEnum.VotingInProgress
              "
              class="pl-4"
              @click="resetAndRefetch"
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

        <div
          class="mb-4 p-4 rounded shadow bg-[#F87272] text-primary-content flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-10 w-10 pr-2"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <p class="small-text">
              <span class="font-bold">Warning:</span>
              Official voting page by OceanDAO is not available at the moment.
              You can use
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="font-bold"
                href="https://snapshot.org/#/officialoceandao.eth"
                >https://snapshot.org/#/officialoceandao.eth</a
              >
              as a backup.
            </p>
            <p class="small-text">
              The results on Ocean Pearl are not correct until the OceanDAO page
              is restored.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <proposal-header primary class="hidden lg:flex" />

          <div
            v-if="$store.state['dao-voting-filter'].pending"
            class="space-y-4"
          >
            <leaderboard-proposal-skeleton
              v-for="i in 5"
              :key="i"
              class="rounded shadow w-full"
              primary
            />
          </div>

          <div v-else class="space-y-2 mt-2 lg:space-y-4">
            <!-- empty hint (temporary solution) -->
            <div
              v-if="
                !$store.state['dao-voting-filter'].leaderboard
                  .fundedProposals ||
                $store.state['dao-voting-filter'].leaderboard.fundedProposals
                  .length === 0
              "
              class="flex justify-center border border-white text-white text-center rounded px-2 py-1"
            >
              {{ $t('leaderboard.empty') }}
            </div>

            <leaderboard-proposal
              v-for="(prop, index) in $store.state['dao-voting-filter']
                .leaderboard.fundedProposals"
              :key="prop.id"
              :proposal="prop"
              :payment-option="
                $store.state['dao-voting-filter'].leaderboard.paymentOption
              "
              :start-index="index"
              :max-votes="
                $store.state['dao-voting-filter'].leaderboard.maxVotes
              "
              primary
              class="rounded shadow"
            />
          </div>
        </div>
      </section-container>
    </app-gradient-background>

    <leaderboard-partially-funded-list
      v-if="
        $store.state['dao-voting-filter'].leaderboard.partiallyFundedProposals
          .length > 0
      "
      :leaderboard="$store.state['dao-voting-filter'].leaderboard"
    >
    </leaderboard-partially-funded-list>

    <!-- pending section -->
    <section-container class="pb-5">
      <h4 class="text-primary py-4">{{ $t('leaderboard.pending') }}</h4>

      <proposal-header
        :display-needed-votes="
          $store.state['dao-voting-filter'].leaderboard.status ===
          statusEnum.VotingInProgress
        "
        class="hidden lg:flex"
      />

      <!-- mobile variant -->
      <div class="lg:hidden space-y-2">
        <div v-if="$store.state['dao-voting-filter'].pending" class="space-y-2">
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
              !$store.state['dao-voting-filter'].leaderboard
                .notFundedProposals ||
              $store.state['dao-voting-filter'].leaderboard.notFundedProposals
                .length === 0
            "
            class="flex justify-center border border-primary text-primary text-center rounded px-2 py-1"
          >
            {{ $t('leaderboard.empty') }}
          </div>

          <leaderboard-proposal
            v-for="(proposal, index) in $store.state['dao-voting-filter']
              .leaderboard.notFundedProposals"
            :key="proposal.id"
            :proposal="proposal"
            :payment-option="
              $store.state['dao-voting-filter'].leaderboard.paymentOption
            "
            :start-index="
              index +
              $store.state['dao-voting-filter'].leaderboard.fundedProposals
                .length +
              $store.state['dao-voting-filter'].leaderboard
                .partiallyFundedProposals.length
            "
            :max-votes="$store.state['dao-voting-filter'].leaderboard.maxVotes"
            :primary="
              $store.state['dao-voting-filter'].leaderboard.status !==
              statusEnum.VotingInProgress
            "
            class="rounded border border-primary"
          />
        </div>
      </div>

      <!-- desktop variant -->
      <div class="hidden lg:block">
        <div
          v-if="$store.state['dao-voting-filter'].pending"
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
            !$store.state['dao-voting-filter'].leaderboard.notFundedProposals ||
            $store.state['dao-voting-filter'].leaderboard.notFundedProposals
              .length === 0
          "
        >
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
          class="rounded border border-primary divide-y divide-darkgrey"
        >
          <leaderboard-proposal
            v-for="(proposal, index) in $store.state['dao-voting-filter']
              .leaderboard.notFundedProposals"
            :key="proposal.id"
            :proposal="proposal"
            :payment-option="
              $store.state['dao-voting-filter'].leaderboard.paymentOption
            "
            :start-index="
              index +
              $store.state['dao-voting-filter'].leaderboard.fundedProposals
                .length +
              $store.state['dao-voting-filter'].leaderboard
                .partiallyFundedProposals.length
            "
            :max-votes="$store.state['dao-voting-filter'].leaderboard.maxVotes"
            :primary="
              $store.state['dao-voting-filter'].leaderboard.status !==
              statusEnum.VotingInProgress
            "
            :class="{
              'rounded-t': index === 0,
              'rounded-b':
                index ===
                $store.state['dao-voting-filter'].leaderboard.notFundedProposals
                  .length -
                  1,
            }"
          />
        </div>
      </div>
    </section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import LeaderboardPartiallyFundedList from '../../components/app/leaderboard/LeaderboardPartiallyFundedList.vue';
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
import AppLink from '@/components/common/AppLink';
import FloatingVoteAction from '@/components/app/leaderboard/FloatingVoteAction';
import LeaderboardFilter from '~/components/app/leaderboard/LeaderboardFilter';
import replaceQueryParams, {
  processQueryToFilter,
} from '~/helpers/windowHistory';

export default Vue.extend({
  components: {
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
    LeaderboardPartiallyFundedList,
  },

  // reset state and refetch if same page is navigated to via navbar
  beforeRouteUpdate(to, _from, next) {
    if (Object.keys(to.query)[0] === 'current') {
      this.resetState().then(() =>
        this.fetchLeaderboard().then((query) =>
          replaceQueryParams(this, query),
        ),
      );
    }
    next();
  },

  // set exception pages when page is left
  beforeRouteLeave(_to, _from, next) {
    this.clearFetchInterval();
    this.resetState();
    next();
  },

  data() {
    return {
      statusEnum: RoundStatusEnum,
      timer: null,
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  created() {
    const newFilter = processQueryToFilter(
      {
        round: this.$route.query.round,
      },
      this.$store.state['dao-voting-filter'].filter,
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
      return this.$store.dispatch('dao-voting-filter/fetchLeaderboard');
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
