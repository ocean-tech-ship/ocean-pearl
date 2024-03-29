<template>
  <div>
    <app-form-control>
      <template #label>
        <span class="label-text text-primary">Categories</span>
      </template>
      <app-dropdown
        class="min-w-[190px]"
        :btn-text="btnText"
        btn-class="justify-start btn-primary btn-outline btn-block bg-base-200"
        :icon="icons.caretDown"
        :icon-active="icons.caretUp"
      >
        <app-dropdown-menu class="mb-1 h-60 overflow-y-auto">
          <li v-for="categoryItem in categoryItems" :key="categoryItem.id">
            <app-button
              class="btn-ghost"
              :name="categoryItem.content"
              :value="categoryItem.id"
              :active="categoryItem.selected"
              @click="setItems(categoryItem.id, categoryItem.content)"
            >
              <span class="text-left w-full">{{ categoryItem.content }}</span>
            </app-button>
          </li>
        </app-dropdown-menu>
      </app-dropdown>
    </app-form-control>
  </div>
</template>

<script>
import caretDown from '@iconify/icons-la/caret-down';
import caretUp from '@iconify/icons-la/caret-up';
import CategoryEnum from '@/enums/Category.enum';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppDropdown from '@/components/common/AppDropdown';
import AppDropdownMenu from '@/components/common/AppDropdownMenu';
import AppButton from '@/components/common/AppButton';
import AppFormControl from '@/components/common/AppFormControl';

export default {
  components: {
    AppFormControl,
    AppButton,
    AppDropdownMenu,
    AppDropdown,
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
      btnText: 'All',
      categoryItems: [],
      icons: {
        caretDown,
        caretUp,
      },
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

      if (this.filter.category === value) {
        this.btnText = CategoryMap[value];
      }
    });
  },

  methods: {
    setItems(id, content) {
      this.watching = true;

      this.categoryItems.forEach(
        // eslint-disable-next-line no-param-reassign
        (categoryItem) => (categoryItem.selected = categoryItem.id === id),
      );

      this.btnText = content;
    },
  },
};
</script>
