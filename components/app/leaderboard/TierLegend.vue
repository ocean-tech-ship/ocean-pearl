<template>
  <div
    :class="{ 'border-none drop-shadow-lg': primary }"
    class="bg-base-200 rounded divide-y divide-neutral border border-primary"
  >
    <div v-for="(tier, index) in tiers" :key="index" class="flex">
      <div class="w-24 m-2 text-right">
        <span class="text-third font-bold">{{ tier.condition }}</span>
      </div>

      <div class="flex-grow flex items-center justify-center px-2">
        <img width="24px" height="24px" :src="tier.iconSrc" :alt="tier.title" />
      </div>
    </div>
  </div>
</template>

<script>
import mapByNumOfGrants from '@/mapper/ProjectTier.mapper';

export default {
  name: 'TierLegend',

  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      tiers: [
        mapByNumOfGrants(0, this.$i18n),
        mapByNumOfGrants(1, this.$i18n),
        mapByNumOfGrants(2, this.$i18n),
        mapByNumOfGrants(5, this.$i18n),
      ],
    };
  },
};
</script>
