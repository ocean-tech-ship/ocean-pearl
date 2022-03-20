<template>
  <div class="dropdown">
    <slot v-if="$slots.button" />
    <app-button
      v-else
      type="label"
      class="btn-primary btn-outline"
      :icon="icons.caretDown"
      :value="label"
    />

    <!-- provide menu via default slot -->
    <slot />
  </div>
</template>

<script>
import caretDown from '@iconify/icons-la/caret-down-solid';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'AppDropdown',

  components: { AppButton },

  props: {
    labelType: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      icons: {
        caretDown,
      },
    };
  },
};
</script>
