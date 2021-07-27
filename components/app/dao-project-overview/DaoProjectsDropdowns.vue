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
    Object.keys(EnumCategory).forEach((value, key) => {
      this.categoryItems = [...this.categoryItems, { content: value, id: key }]
    })

    // TODO: CHANGE TO FETCH ROUNDS
    this.roundItems = [
      { content: 'Round 7', id: 0 },
      { content: 'Round 6', id: 1 },
      { content: 'Round 5', id: 2 },
      { content: 'Round 4', id: 3 },
      { content: 'Round 3', id: 4 },
      { content: 'Round 2', id: 5 },
      { content: 'Round 1', id: 6 },
    ]
  },
}
</script>

<style></style>
