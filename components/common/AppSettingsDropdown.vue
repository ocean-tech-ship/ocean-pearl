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
        @click="toggleOpen"
        @blur="handleBlur"
      />
      <div
        v-if="open"
        class="
          bg-white
          border border-primary
          rounded
          shadow
          absolute
          top-10
          z-40
          right-4
        "
      >
        <ul>
          <li
            v-for="menuItem of menuItems"
            :key="menuItem.value.type"
            class="menuItem text-primary small-text p-2"
            tabindex="0"
            @click="handleSelection(menuItem)"
          >
            <span class="mdi mr-2" :class="menuItem.iconClass" />
            {{ menuItem.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSettingsDropdown',

  props: {
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
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
  },
};
</script>

<style scoped lang="scss">
ul {
  min-width: 140px;
  max-width: auto;
  max-height: 222px;
  border-radius: 7px;
}
li:hover {
  background: #bb2c7636;
  transition: 200ms;
  cursor: pointer;
}
</style>
