<template>
  <app-form-control>
    <template #label>
      <slot v-if="$slots.label" name="label" />
      <span v-else class="label-text text-primary">{{ label }}</span>
    </template>
    <app-dropdown
      class="min-w-[190px]"
      :btn-text="getItemText(select)"
      btn-class="justify-start btn-primary btn-outline btn-block bg-base-200"
      :icon="icons.caretDown"
      :icon-active="icons.caretUp"
    >
      <app-dropdown-menu class="mb-1 h-60 overflow-y-auto">
        <li v-for="item in items" :key="getItemValue(item)">
          <app-button
            class="btn-ghost"
            :name="getItemText(item)"
            :value="getItemValue(item)"
            :active="select === item"
            @click="selectItem(item)"
          >
            <span class="text-left w-full">{{ getItemText(item) }}</span>
          </app-button>
        </li>
      </app-dropdown-menu>
    </app-dropdown>
  </app-form-control>
</template>

<script>
import caretDown from '@iconify/icons-la/caret-down';
import caretUp from '@iconify/icons-la/caret-up';
import AppFormControl from '@/components/common/AppFormControl';
import AppDropdown from '@/components/common/AppDropdown';
import AppDropdownMenu from '@/components/common/AppDropdownMenu';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'AppSelect',

  components: { AppButton, AppDropdownMenu, AppDropdown, AppFormControl },

  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    items: {
      type: Array,
      required: true,
    },
    itemText: {
      type: String,
      required: false,
      default: 'text',
    },
    itemValue: {
      type: String,
      required: false,
      default: 'value',
    },
    value: {
      type: [String, Number, Object],
      required: false,
      default: null,
    },
  },

  data() {
    return {
      select: this.findItemByValue(this.value) ?? this.items[0],
      icons: {
        caretDown,
        caretUp,
      },
    };
  },

  watch: {
    value(newVal) {
      this.selected = newVal;
    },
  },

  methods: {
    findItemByValue(value) {
      return this.items.find((el) => this.getItemValue(el) === value);
    },
    getItemText(item) {
      return item instanceof Object ? item[this.itemText] : item;
    },
    getItemValue(item) {
      return item instanceof Object ? item[this.itemValue] : item;
    },
    selectItem(item) {
      this.select = item;
      this.$emit('change', this.getItemValue(item));
    },
  },
};
</script>
