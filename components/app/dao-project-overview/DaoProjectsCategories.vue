<template>
  <div class="flex flex-wrap text-primary">
    <ButtonRoundSelect
      text="Select Round"
      :menu-items="[
        { value: 7, text: 'Round 7' },
        { value: 6, text: 'Round 6' },
        { value: 5, text: 'Round 5' },
        { value: 4, text: 'Round 4' },
        { value: 3, text: 'Round 3' },
        { value: 2, text: 'Round 2' },
        { value: 1, text: 'Round 1' },
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
