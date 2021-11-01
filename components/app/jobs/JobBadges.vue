<template>
  <div class="grid w-64 space-y-1">
    <div
      v-for="Badge in BadgesEnum"
      :key="Badge"
      class="justify-self-end flex items-center"
    >
      <p class="small-text text-right mr-2 text-primary">{{ Badge }}</p>
      <img :src="BadgeIcons[Badge]" :alt="Badge" />
    </div>
  </div>
</template>

<script>
import BadgesEnum from '../../../enums/Badges.enum';

export default {
  data() {
    return {
      BadgesEnum: {
        [BadgesEnum.Featured]: 'Featured',
        [BadgesEnum.Fund]: 'Needs Funding',
      },
      BadgeIcons: {
        Featured: require('@/assets/images/icons/featured-badge.svg'),
        'Needs Funding': require('@/assets/images/icons/bitcoin-badge.svg'),
      },
    };
  },
};
</script>
