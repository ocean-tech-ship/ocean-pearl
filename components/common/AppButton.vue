<template>
  <!-- Use type label inside anchor tags and for daisyUI button style labels (dropdowns etc.) -->
  <label
    v-if="type === 'label'"
    :tabindex="tabIndex"
    class="btn gap-2 normal-case"
    @click="$emit('click', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  >
    <app-icon v-if="icon" :data="icon" :size="iconSize" />

    <!-- provide btn text via default slot or prop  -->
    <slot v-if="$slots.default" />
    <span v-else>{{ btnText }}</span>
  </label>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :tabindex="tabIndex"
    :name="name"
    :value="value"
    class="btn gap-2 normal-case"
    :class="{ 'btn-active': active }"
    @click="$emit('click', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  >
    <app-icon v-if="icon" :data="icon" :size="iconSize" />

    <!-- provide btn text via default slot or prop  -->
    <slot v-if="$slots.default" />
    <span v-else>{{ btnText }}</span>
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
    active: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    tabIndex: {
      type: String,
      default: '0',
    },
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
