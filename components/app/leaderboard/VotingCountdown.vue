<template>
  <div>
    <client-only>
      <app-countdown
        v-slot="{ days, hours, minutes, seconds }"
        :time="2 * 24 * 60 * 60 * 1000"
        tag="div"
        :class="{ 'border-white text-white': primary }"
        class="flex items-center justify-around rounded border border text-center text-primary"
      >
        <div class="p-4">
          <div class="text-xl font-bold leading-none">{{ days }}</div>
          <div>{{ $t('date.days') }}</div>
        </div>

        <div class="p-4">
          <div class="text-xl font-bold leading-none">{{ hours }}</div>
          <div>{{ $t('date.hours') }}</div>
        </div>

        <div class="p-4">
          <div class="text-xl font-bold leading-none">{{ minutes }}</div>
          <div>{{ $t('date.minutes') }}</div>
        </div>

        <div class="p-4">
          <div class="text-xl font-bold leading-none">{{ seconds }}</div>
          <div>{{ $t('date.seconds') }}</div>
        </div>
      </app-countdown>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Leaderboard } from '@/models/Leaderboard.model';
import AppCountdown from '@/components/common/AppCountdown.vue';

export default {
  name: 'VotingCountdown',
  components: { AppCountdown },
  props: {
    leaderboard: {
      type: Object as () => Leaderboard,
      required: true,
    },

    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
};
</script>
