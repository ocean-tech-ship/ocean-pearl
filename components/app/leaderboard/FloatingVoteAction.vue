<template>
  <div
    class="fixed w-full flex justify-end lg:top-1/2 bottom-5 pointer-events-none z-popup"
  >
    <app-link :to="voteUrl" :data-analytics="dataAnalytics">
      <div
        class="bg-base-200 rounded-l shadow p-4 pointer-events-auto text-center"
      >
        <div
          class="bg-primary bg-opacity-10 relative rounded w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center transition duration-300 ease-in-out lg:hover:scale-125"
        >
          <app-icon class="text-primary" :size="36" :data="icons.vote" />
        </div>

        <div class="mt-1 text-primary">{{ $t('leaderboard.vote') }}</div>
      </div>
    </app-link>
  </div>
</template>

<script>
import vote from '@iconify/icons-mdi/vote';
import AppLink from '@/components/common/AppLink';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'FloatingVoteAction',
  components: { AppLink, AppIcon },
  props: {
    leaderboard: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        vote,
      },
      voteUrl: 'https://snapshot.org/#/officialoceandao.eth',
    };
  },

  computed: {
    dataAnalytics() {
      return `"Vote: Click", {"props":{"url":"${this.voteUrl}","round":"${this.$props.leaderboard.round}"}}`;
    },
  },
};
</script>
