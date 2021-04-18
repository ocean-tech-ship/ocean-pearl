<template>
  <div class="grid w-64 space-y-1">
    <div v-for="Badge in EnumBadges" :key="Badge" class="justify-self-end flex items-center">
      <p class="small-text  text-right mr-2 text-primary">{{Badge}}</p>
      <img :src="BadgeIcons[Badge]" :alt="Badge">
    </div>
  </div>
</template>

<script lang="ts">
  import EnumBadges from '../../enums/EnumBadges';

  export default {
    data() {
      return {
        EnumBadges: {
          [EnumBadges.Featured]: 'Featured',
          [EnumBadges.Fund]: 'Needs Funding'
        },
         BadgeIcons: {
          'Featured': require('@/assets/images/icons/featured-badge.png'),
          'Needs Funding': require('@/assets/images/icons/bitcoin-badge.png')
        }
      }
    }
  }
</script>