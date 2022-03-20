<template>
  <div class="dropdown">
    <slot v-if="$slots.button" name="button" />
    <app-button
      v-else
      type="label"
      class="btn-primary btn-outline btn-block"
      :btn-text="btnText"
      :icon="icon"
      :icon-size="iconSize"
    />

    <!-- provide menu via default slot -->
    <slot />
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton';

export default {
  name: 'AppDropdown',

  components: { AppButton },

  props: {
    icon: {
      type: Object,
      default: null,
    },
    iconSize: {
      type: Number,
      default: 20,
    },
    btnText: {
      type: String,
      default: null,
    },
  },
};
</script>
