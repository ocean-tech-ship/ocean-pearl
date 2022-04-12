<template>
  <ul
    :tabindex="tabIndex"
    class="mt-2 p-2 drop-shadow-md menu menu-compact dropdown-content bg-base-200 rounded-box w-52 space-y-2 !z-dropdown"
    @click="handleMenuClick"
  >
    <!--  provide menu items via default slot  -->
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'AppDropdownMenu',

  props: {
    tabIndex: {
      type: String,
      default: '0',
    },
    closeTimeClicked: {
      type: [Number],
      default: 0,
    },
  },

  methods: {
    handleMenuClick() {
      if (typeof this.closeTimeClicked === 'number') {
        setTimeout(() => {
          this.$parent.$data.isActive = !this.$parent.$data.isActive;
        }, this.closeTimeClicked);
      }
    },
  },
};
</script>

<style scoped lang="scss">
ul * {
  -webkit-transform: translate3d(0, 0, 0);
}
</style>
