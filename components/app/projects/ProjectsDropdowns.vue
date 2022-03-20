<template>
  <div class="text-primary">
    <ButtonEmitWithDropdown
      button-name="Category"
      class="rounded bg-base-200 my-2 w-1/1 2sm:w-1/2 sm:w-44"
      :menu-items="categoryItems"
      @selected="setItems"
    />
    <app-dropdown label="Catgeories" />
  </div>
</template>

<script>
import CategoryEnum from '../../../enums/Category.enum';
import ButtonEmitWithDropdown from '@/components/common/ButtonEmitWithDropdown.vue';
import { CategoryMap } from '~/components/constants/CategoryMap.constant';
import AppDropdown from '~/components/common/AppDropdown';

export default {
  components: {
    AppDropdown,
    ButtonEmitWithDropdown,
  },
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      watching: false,
      categoryItems: [],
    };
  },
  watch: {
    $data: {
      deep: true,
      handler: function emit() {
        if (this.watching) {
          const selectedItem = Object.values(
            this.categoryItems.reduce((accumulator, current) => {
              if (current.selected) accumulator.push(current.id);
              return accumulator;
            }, []),
          )[0];

          this.$emit('selected-items', {
            category: selectedItem,
          });
        }
      },
    },
  },
  created() {
    // set categories button content
    Object.values(CategoryEnum).forEach((value) => {
      this.categoryItems = [
        ...this.categoryItems,
        {
          type: 'categories',
          content: CategoryMap[value],
          id: value,
          selected: this.filter.category === value,
        },
      ];
    });
  },
  methods: {
    setItems(payload) {
      this.watching = true;

      const { id } = payload;

      this.categoryItems.forEach(
        // eslint-disable-next-line no-param-reassign
        (categoryItem) => (categoryItem.selected = categoryItem.id === id),
      );
    },
  },
};
</script>
