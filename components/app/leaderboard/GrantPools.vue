<template>
  <div>
    <!-- collapse action -->
    <div class="divider pb-2">
      <button
        type="button"
        class="btn btn-sm btn-ghost"
        @click="expand = !expand"
      >
        {{ $t('leaderboard.pools') }}
        <app-icon
          class="ml-2"
          :size="24"
          :data="expand ? icons.caretUp : icons.caretDown"
        />
      </button>
    </div>

    <!-- skeleton loader -->
    <div
      v-if="loading && expand"
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"
    >
      <div
        v-for="i in SKELETON_LOADER_COUNT"
        :key="i"
        class="shadow rounded bg-base-200 p-2 space-y-3 py-4"
      >
        <div class="w-1/3 h-3 rounded opacity-40 bg-primary animate-pulse" />
        <div class="w-1/2 h-3 rounded opacity-70 bg-primary animate-pulse" />
      </div>
    </div>

    <!-- content -->
    <div
      v-else-if="expand"
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"
    >
      <div
        v-for="pool in pools"
        :key="pool.type"
        :class="{ 'border-accent': filter.pools.includes(pool.type) }"
        class="shadow rounded bg-base-200 p-2 flex items-center justify-between border border-base-200"
      >
        <div>
          <p class="text-primary small-text">
            {{ grantPoolMapper[pool.type] }}
          </p>
          <span>{{ getPoolFunding(pool) }}</span>
        </div>

        <button
          type="button"
          class="btn btn-sm btn-circle btn-ghost"
          @click="filterPool(pool.type)"
        >
          <app-icon
            :data="
              filter.pools.includes(pool.type)
                ? icons.filterCheck
                : icons.filter
            "
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import caretDown from '@iconify/icons-la/caret-down';
import caretUp from '@iconify/icons-la/caret-up';
import filter from '@iconify/icons-mdi/filter';
import filterCheck from '@iconify/icons-mdi/filter-check';
import Numbers from '@/mixins/Numbers';
import AppIcon from '@/components/common/AppIcon';
import { GrantPoolTypeMap } from '@/mapper/GrantPoolType.mapper';
import PaymentOptionEnum from '@/enums/PaymentOption.enum';
import { replaceQueryParams } from '@/helpers/windowHistory';

export default {
  name: 'GrantPools',
  components: { AppIcon },
  mixins: [Numbers],

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    leaderboard: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      SKELETON_LOADER_COUNT: 5,
      icons: {
        caretUp,
        caretDown,
        filter,
        filterCheck,
      },
      expand: false,
      grantPoolMapper: GrantPoolTypeMap,
    };
  },

  computed: {
    ...mapState('dao-voting-filter', {
      filter: 'filter',
    }),
    pools() {
      const rawPools = this.$props.leaderboard.grantPools;
      return Object.keys(rawPools)
        .map((key) => rawPools[key])
        .sort((a, b) => (a.totalFunding < b.totalFunding ? 1 : -1));
    },
  },

  mounted() {
    // Responsively collapse pools on small (< 560px) screens
    const mql = window.matchMedia('(min-width: 560px)');
    const handler = (mql) => {
      this.expand = mql.matches;
    };

    handler(mql);
    mql.addEventListener('change', handler);
  },

  methods: {
    getPoolFunding(pool) {
      const funding = this.addPunctuation(pool.totalFunding);
      return this.$props.leaderboard.paymentOption === PaymentOptionEnum.Ocean
        ? this.$i18n.t('general.ocean', { ocean: funding })
        : this.$i18n.t('general.usd', { usd: funding });
    },

    filterPool(pool) {
      this.$store.dispatch('dao-voting-filter/filterPool', pool);
      replaceQueryParams(this, this.filter);
    },
  },
};
</script>
