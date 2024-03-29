<template>
  <label
    v-if="as === 'label'"
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

  <app-link
    v-else-if="as === 'link'"
    :tabindex="tabIndex"
    :to="to"
    :data-analytics="dataAnalytics"
    class="btn gap-2 normal-case"
  >
    <app-icon v-if="icon" :data="icon" :size="iconSize" />

    <!-- provide btn text via default slot or prop  -->
    <slot v-if="$slots.default" />
    <span v-else>{{ btnText }}</span>
  </app-link>

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
import AppLink from '@/components/common/AppLink';

export default {
  name: 'AppButton',
  components: { AppLink, AppIcon },
  props: {
    as: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '#',
    },
    dataAnalytics: {
      type: String,
      default: null,
    },
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
      type: [String, Number, Boolean],
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
