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
        v-for="i in 5"
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
        class="shadow rounded bg-base-200 p-2"
      >
        <p class="text-primary small-text">
          {{ grantPoolMapper[pool.type] }}
        </p>
        <span>{{ getPoolFunding(pool) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import caretDown from '@iconify/icons-la/caret-down';
import caretUp from '@iconify/icons-la/caret-up';
import { GrantPoolTypeMap } from '@/mapper/GrantPoolType.mapper';
import Numbers from '@/mixins/Numbers';
import PaymentOptionEnum from '~/enums/PaymentOption.enum';
import AppIcon from '~/components/common/AppIcon';

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
      icons: {
        caretUp,
        caretDown,
      },
      expand: false,
      grantPoolMapper: GrantPoolTypeMap,
    };
  },

  computed: {
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
  },
};
</script>
