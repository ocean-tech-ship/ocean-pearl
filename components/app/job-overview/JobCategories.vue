<template>
  <div class="space-x-4 flex flex-wrap mx-64 ">
        <div v-for="Category in EnumCategory" :key="Category" class="border text-primary py-1 px-2 my-2 flex">
          <p class="small-text">{{Category}}</p>
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
          [EnumCategory.Economy]: 'Economy',
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