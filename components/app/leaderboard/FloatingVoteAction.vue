<template>
  <div class="sticky top-3/4 lg:top-1/2">
    <div class="absolute right-0">
      <app-link :to="voteUrl" :data-analytics="dataAnalytics">
        <div class="bg-white rounded-l shadow p-4">
          <div
            class="
              bg-primary bg-opacity-10
              relative
              rounded
              w-12
              lg:w-16
              h-12
              lg:h-16
              flex
              items-center
              justify-center
              transition
              duration-300
              ease-in-out
              lg:hover:scale-125
            "
          >
            <app-icon class="text-primary" :size="36" :data="icons.vote" />
          </div>
        </div>
      </app-link>
    </div>
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
    };
  },

  computed: {
    dataAnalytics() {
      return `"Vote: Click", {"props":{"url":"${this.voteUrl}","round":"${this.$props.leaderboard.round}"}}`;
    },

    voteUrl() {
      const stdUrl = 'https://vote.oceanprotocol.com/#/officialoceandao.eth';
      // API does not provide any special link to snapshot right now
      return stdUrl;
    },
  },
};
</script>
