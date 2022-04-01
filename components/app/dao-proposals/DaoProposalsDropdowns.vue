<template>
  <div>
    <app-form-control class="mr-2 md:w-[190px]">
      <template #label>
        <span class="label-text text-primary">Rounds</span>
      </template>
      <app-dropdown
        :btn-text="btnTextRound"
        btn-class="justify-start btn-primary btn-outline btn-block bg-base-200"
        :icon="icons.caretDown"
        :icon-active="icons.caretUp"
      >
        <app-dropdown-menu class="mb-1 h-60 overflow-y-auto">
          <li v-for="roundItem in roundItems" :key="roundItem.id">
            <app-button
              class="btn-ghost"
              :name="roundItem.content"
              :value="roundItem.id"
              :active="roundItem.selected"
              @click="
                setItems({
                  type: 'rounds',
                  id: roundItem.id,
                  content: roundItem.content,
                })
              "
            >
              <span class="text-left w-full">{{ roundItem.content }}</span>
            </app-button>
          </li>
        </app-dropdown-menu>
      </app-dropdown>
    </app-form-control>
    <app-form-control class="lg:mr-4 md:w-[190px]">
      <template #label>
        <span class="label-text text-primary">Categories</span>
      </template>
      <app-dropdown
        :btn-text="btnTextCategories"
        btn-class="justify-start btn-primary btn-outline btn-block bg-base-200"
        :icon="icons.caretDown"
        :icon-active="icons.caretUp"
      >
        <app-dropdown-menu
          :close-time-clicked="200"
          class="mb-1 h-60 overflow-y-auto"
        >
          <li v-for="categoryItem in categoryItems" :key="categoryItem.id">
            <app-button
              class="btn-ghost"
              :name="categoryItem.content"
              :value="categoryItem.id"
              :active="categoryItem.selected"
              @click="
                setItems({
                  type: 'categories',
                  id: categoryItem.id,
                  content: categoryItem.content,
                })
              "
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
    rounds: {
      type: Number,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      watching: false,
      btnTextRound: 'All',
      btnTextCategories: 'All',
      roundItems: [
        {
          type: 'rounds',
          content: `All`,
          id: 0,
          selected: this.filter.round === 0,
        },
      ],
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
          const selectedItems = Object.values(
            this.roundItems.reduce((accumulator, current) => {
              if (current.selected) accumulator.push(current.id);
              return accumulator;
            }, []),
          );

          selectedItems.push(
            Object.values(
              this.categoryItems.reduce((accumulator, current) => {
                if (current.selected) accumulator.push(current.id);
                return accumulator;
              }, []),
            )[0],
          );

          this.$emit('selected-items', {
            round: selectedItems[0],
            category: selectedItems[1],
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
        this.btnTextCategories = CategoryMap[value];
      }
    });

    // set rounds button content
    for (let i = this.rounds; i >= 1; i--) {
      this.roundItems = [
        ...this.roundItems,
        {
          type: 'rounds',
          content: `Round ${i}`,
          id: i,
          selected: this.filter.round === i,
        },
      ];

      if (this.filter.round === i) {
        this.btnTextRound = `Round ${i}`;
      }
    }
  },

  methods: {
    setItems(payload) {
      this.watching = true;
      const { type, id, content } = payload;

      switch (type) {
        case 'rounds':
          this.roundItems.forEach(
            // eslint-disable-next-line no-param-reassign
            (roundItem) => (roundItem.selected = roundItem.id === id),
          );
          this.btnTextRound = content;
          break;
        case 'categories':
          this.categoryItems.forEach(
            // eslint-disable-next-line no-param-reassign
            (categoryItem) => (categoryItem.selected = categoryItem.id === id),
          );
          this.btnTextCategories = content;
          break;
        default:
      }
    },
  },
};
</script>
