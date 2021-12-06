<template>
  <div class="grid space-y-1">
    <div
      v-for="Badge in EnumBadges"
      :key="Badge"
      class="justify-self-end flex items-center"
    >
      <p class="small-text text-right mr-2 text-primary">{{ Badge }}</p>
      <img :src="BadgeIcons[Badge]" :alt="Badge" />
    </div>
  </div>
</template>

<script lang="ts">
import EnumBadges from '../../../enums/Badges.enum';

export default {
  data() {
    return {
      EnumBadges: {
        [EnumBadges.Featured]: 'General Grant',
        [EnumBadges.Fund]: 'New Project',
      },
      BadgeIcons: {
        'General Grant': require('@/assets/images/icons/featured-badge.svg'),
        'New Project': require('@/assets/images/icons/bitcoin-badge.svg'),
      },
    };
  },
};
</script>
