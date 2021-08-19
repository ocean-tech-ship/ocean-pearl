<template>
  <div class="space-x-4 flex flex-wrap mx-56 hidden xl:flex">
    <div
      v-for="category in CategoryEnum"
      :key="category"
      class="border text-primary py-1 px-2 my-2 flex"
    >
      <p class="small-text">{{ category }}</p>
    </div>
  </div>
</template>

<script>
import CategoryEnum from '../../enums/Category.enum';

export default {
  data() {
    return {
      CategoryEnum: {
        [CategoryEnum.All]: 'All',
        [CategoryEnum.DeFi]: 'DeFi',
        [CategoryEnum.Economy]: 'Economy',
        [CategoryEnum.Marketplace]: 'Marketplace',
        [CategoryEnum.Identity]: 'Identity',
        [CategoryEnum.Trading]: 'Trading',
        [CategoryEnum.Usage]: 'Usage',
        [CategoryEnum.BigData]: 'Big Data',
        [CategoryEnum.Ai]: 'AI',
        [CategoryEnum.Token]: 'Token',
      },
    };
  },
};
</script>

<style></style>
