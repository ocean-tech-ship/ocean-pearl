<template>
  <div>
    <leaderboard-dropdowns
      :rounds="rounds"
      :filter="filter"
      @selected-items="setFilterAndFetch"
    />
  </div>
</template>

<script>
import replaceQueryParams from '@/helpers/windowHistory.ts';
import LeaderboardDropdowns from '~/components/app/leaderboard/LeaderboardDropdowns';

export default {
  name: 'LeaderboardFilter',

  components: {
    LeaderboardDropdowns,
  },

  props: {
    rounds: {
      type: Number,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
    setFilter: {
      type: Function,
      required: true,
    },
    fetchLeaderboard: {
      type: Function,
      required: true,
    },
    setFetchInterval: {
      type: Function,
      required: true,
    },
    clearFetchInterval: {
      type: Function,
      required: true,
    },
  },

  methods: {
    setFilterAndFetch(payload) {
      const { round } = payload;

      // set new filter
      const newFilter = {
        round: round || round === 0 ? round : this.filter.round,
      };

      this.setFilter(newFilter).then(() =>
        this.fetchLeaderboard().then((query) =>
          replaceQueryParams(this, query),
        ),
      );

      if (round === 0) {
        this.setFetchInterval();
      } else {
        this.clearFetchInterval();
      }
    },
  },
};
</script>
