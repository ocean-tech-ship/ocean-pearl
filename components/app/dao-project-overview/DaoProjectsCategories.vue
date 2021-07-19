<template>
  <div class="flex flex-wrap text-primary">
    <ButtonRoundSelect
      :button="{ content: 'Select Round' }"
      :menu-items="[
        { value: 7, content: 'Round 7' },
        { value: 6, content: 'Round 6' },
        { value: 5, content: 'Round 5' },
        { value: 4, content: 'Round 4' },
        { value: 3, content: 'Round 3' },
        { value: 2, content: 'Round 2' },
        { value: 1, content: 'Round 1' },
      ]"
    />
    <div class="flex border py-1 px-2 mt-1">
      <img
        class="mr-1 p-1"
        src="@/assets/images/icons/dropdown.svg"
        alt="dropdown"
      />
      <p class="small-text">Category</p>
    </div>
  </div>
</template>

<script>
import ButtonRoundSelect from '@/components/common/ButtonRoundSelect.vue'
import EnumCategory from '../../enums/EnumCategory'

export default {
  components: { ButtonRoundSelect },
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
        [EnumCategory.Token]: 'Token',
      },
    }
  },
}
</script>

<style></style>
