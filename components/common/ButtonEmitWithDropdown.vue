<template>
  <section class="relative flex border w-full">
    <button
      tabindex="0"
      :class="{ open: open }"
      class="flex items-center small-text relative w-full p-1"
      @click="
        (e) => {
          toggleOpen();
          handleiOSBlur(e);
        }
      "
      @blur="handleBlur"
    >
      <app-icon
        :rotate="open ? 180 : 0"
        :size="32"
        :data="icons.menuDown"
      />

      {{ selectedName }}
    </button>
    <label
      class="label absolute p-1 z-10"
      :class="buttonBackground"
    >
      {{ buttonName }}
    </label>
    <section
      v-if="open"
      class="border bg-grey rounded shadow absolute top-10 z-40"
    >
      <ul>
        <li
          v-for="menuItem of menuItems"
          :key="menuItem.value"
          :class="{ isActive: menuItem.selected }"
          class="menuItem"
          tabindex="0"
          @click="handleSelection(menuItem)"
        >
          {{ menuItem.content }}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import menuDown from '@iconify/icons-mdi/menu-down';
import checkForiOS from '@/helpers/checkOS.ts';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'ButtonEmitWithDropdown',

  components: { AppIcon },

  props: {
    buttonName: {
      type: String,
      required: true,
      default() {},
    },
    buttonBackground: {
      type: String,
      required: false,
      default: 'bg-white',
    },
    menuItems: {
      type: Array,
      required: true,
      default() {},
    },
  },

  data() {
    return {
      icons: {
        menuDown,
      },
      open: false,
      selectedName: '',
    };
  },

  created() {
    // eslint-disable-next-line
    this.selectedName = Object.values(
      this.menuItems.reduce((accumulator, current) => {
        if (current.selected) accumulator.push(current.content);
        return accumulator;
      }, []),
    )[0];
  },
  methods: {
    setselectedName(selected) {
      this.selectedName = selected;
    },
    toggleOpen() {
      this.open = !this.open;
    },
    handleSelection(menuItem) {
      this.setselectedName(menuItem.content);
      this.$emit('selected', menuItem);
      this.toggleOpen();
    },
    handleBlur(e) {
      if (
        (!e.relatedTarget && this.open) ||
        (!e.relatedTarget?.classList.contains('menuItem') && this.open)
      )
        this.toggleOpen();
    },
    handleiOSBlur(e) {
      if (checkForiOS()) {
        const { handleBlur } = this;
        e.target.addEventListener('mouseout', handleBlur, { once: true });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-size: 0.7rem;
  top: -13px;
  left: 12px;
  transition: 200ms;
}

ul {
  min-width: 140px;
  max-width: auto;
  max-height: 222px;
  overflow-y: scroll;
  background: white;
  border-radius: 7px;
}
li {
  padding: 0.5rem;
}
li:hover {
  background: #bb2c7636;
  transition: 200ms;
  cursor: pointer;
}
.isActive {
  background: lighten(#bb2c7636, 25);
}
</style>
