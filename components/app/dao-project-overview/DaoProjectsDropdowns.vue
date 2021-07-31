<template>
  <div
    class="flex flex-col 2sm:flex-row -top-1 2sm:top-4 flex-col text-primary absolute lg:top-0 lg:relative"
  >
    <ButtonEmitWithDropdown
      button-name="Rounds"
      class="mr-1 mb-1 mt-0 lg:mb-0 lg:mt-1"
      :menu-items="roundItems"
      @selected="setItems"
    />
    <ButtonEmitWithDropdown
      button-name="Category"
      class="mr-1 mb-1 mt-0 lg:mb-0 lg:mt-1"
      :menu-items="categoryItems"
      @selected="setItems"
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
  watch: {
    $data: {
      deep: true,
      handler: function emit() {
        const selectedItems = Object.values(
          this.roundItems.reduce((accumulator, current) => {
            if (current.selected) accumulator.push(current.id)
            return accumulator
          }, [])
        )

        selectedItems.push(
          Object.values(
            this.categoryItems.reduce((accumulator, current) => {
              if (current.selected) accumulator.push(current.id)
              return accumulator
            }, [])
          )[0]
        )

        this.$emit('selected-items', {
          round: selectedItems[0],
          category: selectedItems[1],
        })
      },
    },
  },
  created() {
    // set categories button content
    Object.keys(EnumCategory).forEach((value, i) => {
      this.categoryItems = [
        ...this.categoryItems,
        {
          type: 'categories',
          content: value,
          id: value,
          // eslint-disable-next-line no-unneeded-ternary
          selected: i === 0 ? true : false,
        },
      ]
    })

    // TODO: CHANGE TO FETCH ROUNDS
    this.roundItems = [
      { type: 'rounds', content: 'All', id: 'All', selected: true },
      { type: 'rounds', content: 'Round 7', id: 7, selected: false },
      { type: 'rounds', content: 'Round 6', id: 6, selected: false },
      { type: 'rounds', content: 'Round 5', id: 5, selected: false },
      { type: 'rounds', content: 'Round 4', id: 4, selected: false },
      { type: 'rounds', content: 'Round 3', id: 3, selected: false },
      { type: 'rounds', content: 'Round 2', id: 2, selected: false },
      { type: 'rounds', content: 'Round 1', id: 1, selected: false },
    ]
  },
  methods: {
    setItems(payload) {
      const { type, id } = payload

      switch (type) {
        case 'rounds':
          this.roundItems.forEach((roundItem) => {
            roundItem.selected = false
            if (roundItem.id === id) roundItem.selected = true
          })
          break
        case 'categories':
          this.categoryItems.forEach((categoryItem) => {
            categoryItem.selected = false
            if (categoryItem.id === id) categoryItem.selected = true
          })
          break
      }
    },
  },
}
</script>

<style></style>
