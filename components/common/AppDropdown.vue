<template>
  <div class="dropdown">
    <slot v-if="$slots.button" />
    <app-button
      v-else
      type="label"
      class="btn-primary btn-outline btn-block"
      :icon="icons.menuDown"
      :btn-text="btnText"
    />

    <!-- provide menu via default slot -->
    <slot />
  </div>
</template>

<script>
import menuDown from '@iconify/icons-la/caret-down';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'AppDropdown',

  components: { AppButton },

  props: {
    btnText: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      icons: {
        menuDown,
      },
    };
  },
};
</script>
