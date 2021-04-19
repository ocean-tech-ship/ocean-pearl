<template>
  <div class="flex flex-wrap text-primary">
        <div class="flex border py-1 px-2 mr-1 mt-1">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-2">{{ $t('projects.status.dropDown1') }}</p>
        </div>
        <div class="flex border py-1 px-2 mt-1 lg:hidden">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text">{{ $t('projects.status.dropDown2') }}</p>
        </div>
      </div>
</template>

<script>
import EnumCategory from '../../enums/EnumCategory';

  export default {
    data() {
      return {
        EnumCategory: {
          [EnumCategory.All]: 'All',
          [EnumCategory.DeFi]: 'DeFi',
          [EnumCategory.Marketplace]: 'Marketplace',
          [EnumCategory.Identity]: 'Identity',
          [EnumCategory.Trading]: 'Trading',
          [EnumCategory.Usage]: 'Usage',
          [EnumCategory.BigData]: 'Big Data',
          [EnumCategory.Ai]: 'AI',
          [EnumCategory.Token]: 'Token'
        }
      }
    }
  }
</script>

<style>

</style>