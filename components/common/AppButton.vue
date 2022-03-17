<template>
  <!-- Use type label inside anchor tags and for daisyUI button style labels (dropdowns etc.) -->
  <label
    v-if="type === 'label'"
    :tabindex="tabIndex || -1"
    class="btn gap-2 normal-case"
    @click="$emit('click', $event)"
  >
    <app-icon v-if="icon" :data="icon" :size="20" />

    <!-- provide value via default slot or prop  -->
    <slot v-if="$slots.default" />
    <span v-else>{{ value }}</span>
  </label>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :tabindex="tabIndex"
    class="btn gap-2 normal-case"
    @click="$emit('click', $event)"
  >
    <app-icon v-if="icon" :data="icon" :size="20" />

    <!-- provide value via default slot or prop  -->
    <slot v-if="$slots.default" />
    <span v-else>{{ value }}</span>
  </button>
</template>

<script>
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'AppButton',
  components: { AppIcon },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tabIndex: {
      type: Number,
      default: 0,
    },
    icon: {
      type: Object,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
};
</script>
