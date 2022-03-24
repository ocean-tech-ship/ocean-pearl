<template>
  <ul
    tabindex="0"
    class="mt-2 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52 space-y-2"
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
  },

  methods: {
    handleMenuClick() {
      this.$parent.$data.isActive = !this.$parent.$data.isActive;
    },
  },
};
</script>
