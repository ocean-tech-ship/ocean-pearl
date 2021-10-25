<template>
  <div>
    <div class="relative">
      <button
        type="button"
        class="
          absolute
          -top-2
          right-1
          px-2
          pb-2
          text-lg
          mdi mdi-settings-helper
          text-primary
          leading-none
        "
        @click="
          (e) => {
            toggleOpen();
            handleiOSBlur(e);
          }
        "
        @blur="handleBlur"
      >
        <app-icon :size="28" :data="icons.settingsHelper" />
      </button>
      <div
        v-if="open"
        class="
          bg-white
          border border-primary
          rounded
          shadow
          absolute
          top-8
          z-40
          right-4
        "
      >
        <ul>
          <li
            v-for="menuItem of menuItems"
            :key="menuItem.value.type"
            class="menuItem text-primary small-text p-2 flex items-center"
            tabindex="0"
            @click="handleSelection(menuItem)"
          >
            <app-icon
              :size="menuItem.icon.size || 16"
              :data="menuItem.icon.data"
              class="mr-2"
            />
            {{ menuItem.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import settingsHelper from '@iconify/icons-mdi/settings-helper';
import checkForiOS from '@/helpers/checkOS.ts';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'AppSettingsDropdown',

  components: {
    AppIcon,
  },

  props: {
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      icons: {
        settingsHelper,
      },
      open: false,
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    handleSelection(menuItem) {
      this.$emit('selected', menuItem.value);
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

<style scoped lang="scss">
ul {
  min-width: 90px;
  max-height: 222px;
  border-radius: 7px;
}
li:hover {
  background: #bb2c7636;
  transition: 200ms;
  cursor: pointer;
}
</style>
