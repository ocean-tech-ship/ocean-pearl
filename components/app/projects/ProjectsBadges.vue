<template>
  <div class="grid space-y-1">
    <div v-for="Badge in BadgesEnumMap" :key="Badge" class="justify-self-end flex items-center">
      <p class="small-text  text-right mr-2 text-primary">{{Badge}}</p>
      <img :src="BadgeIcons[Badge]" :alt="Badge">
    </div>
  </div>
</template>

<script lang="ts">
  import BadgesEnum from '../../enums/Badges.enum';

  export default {
    data() {
      return {
        BadgesEnumMap: {
          [BadgesEnum.Featured]: 'Featured',
          [BadgesEnum.Fund]: 'Needs Funding',
          [BadgesEnum.Hiring]: 'Hiring'
        },
        BadgeIcons: {
          'Featured': require('@/assets/images/icons/featured-badge.svg'),
          'Needs Funding': require('@/assets/images/icons/bitcoin-badge.svg'),
          'Hiring': require('@/assets/images/icons/hiring-badge.svg'),
        }
      }
    }
  }
</script>
