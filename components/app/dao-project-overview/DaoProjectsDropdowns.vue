<template>
  <div class="flex flex-wrap text-primary">
    <ButtonEmitWithDropdown button-name="Rounds" :menu-items="roundItems" />
    <ButtonEmitWithDropdown
      button-name="Category"
      :menu-items="categoryItems"
    />
  </div>
</template>

<script>
import ButtonEmitWithDropdown from '@/components/common/ButtonEmitWithDropdown.vue'
import EnumCategory from '../../enums/EnumCategory'

export default {
  components: {
    ButtonEmitWithDropdown,
  },
  data() {
    return {
      roundItems: [],
      categoryItems: [],
    }
  },
  created() {
    // set categories button content
    Object.keys(EnumCategory).forEach((value, key, i) => {
      this.categoryItems = [
        ...this.categoryItems,
        // eslint-disable-next-line no-unneeded-ternary
        { content: value, id: key, selected: i === 0 ? true : false },
      ]
    })

    // TODO: CHANGE TO FETCH ROUNDS
    this.roundItems = [
      { content: 'Round 7', id: 7, selected: true },
      { content: 'Round 6', id: 6, selected: false },
      { content: 'Round 5', id: 5, selected: false },
      { content: 'Round 4', id: 4, selected: false },
      { content: 'Round 3', id: 3, selected: false },
      { content: 'Round 2', id: 2, selected: false },
      { content: 'Round 1', id: 1, selected: false },
    ]
  },
}
</script>

<style></style>
