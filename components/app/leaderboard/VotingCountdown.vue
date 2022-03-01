<template>
  <div>
    <client-only>
      <app-countdown
        v-slot="{ days, hours, minutes, seconds }"
        :time="getTimeLeft(leaderboard)"
        tag="div"
        class="
          flex
          items-center
          justify-around
          rounded
          border border-base-200
          text-center text-base-200
        "
      >
        <div class="p-2 md:p-4">
          <div class="text-xl font-bold leading-none">{{ days }}</div>
          <div>{{ $t('date.days') }}</div>
        </div>

        <div class="p-2 md:p-4">
          <div class="text-xl font-bold leading-none">{{ hours }}</div>
          <div>{{ $t('date.hours') }}</div>
        </div>

        <div class="p-2 md:p-4">
          <div class="text-xl font-bold leading-none">{{ minutes }}</div>
          <div>{{ $t('date.minutes') }}</div>
        </div>

        <div class="p-2 md:p-4">
          <div class="text-xl font-bold leading-none">{{ seconds }}</div>
          <div>{{ $t('date.seconds') }}</div>
        </div>
      </app-countdown>

      <div class="text-center p-2">
        <span class="text-base-200">{{ $t(getSubtitle(leaderboard)) }}</span>
      </div>

      <template slot="placeholder">
        <voting-countdown-skeleton />
      </template>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Leaderboard } from '@/models/Leaderboard.model';
import AppCountdown from '@/components/common/AppCountdown.vue';
import VotingCountdownSkeleton from '~/components/app/leaderboard/VotingCountdownSkeleton.vue';

export default {
  name: 'VotingCountdown',

  components: { VotingCountdownSkeleton, AppCountdown },

  props: {
    leaderboard: {
      type: Object as () => Leaderboard,
      required: true,
    },
  },

  methods: {
    getSubtitle(leaderboard: Leaderboard): string {
      const now = Date.now();
      const start = new Date(leaderboard.votingStartDate).getTime();

      return now < start
        ? 'leaderboard.voting.begins'
        : 'leaderboard.voting.ends';
    },

    getTimeLeft(leaderboard: Leaderboard): number {
      const now = Date.now();
      const start = new Date(leaderboard.votingStartDate).getTime();
      const end = new Date(leaderboard.votingEndDate).getTime();

      if (now < start) {
        return start - now;
      }

      if (now > end) {
        return 0;
      }

      return end - now;
    },
  },
};
</script>
