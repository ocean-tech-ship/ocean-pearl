<template>
  <div class="form-control w-full">
    <label class="label">
      <slot v-if="$slots.label" name="label" />
      <span v-else class="label-text">{{ label }}</span>

      <slot v-if="$slots.altLabel" name="altLabel" />
      <span v-else class="label-text-alt">{{ altLabel }}</span>
    </label>

    <!-- provide input element via default slot -->
    <slot />

    <label class="label">
      <slot v-if="$slots.hint" name="hint" />
      <span v-else class="label-text-alt">{{ hint }}</span>

      <slot v-if="$slots.altHint" name="altHint" />
      <span v-else class="label-text-alt">{{ altHint }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppFormControl',
  props: {
    label: {
      type: String,
      default: null,
    },
    altLabel: {
      type: String,
      default: null,
    },
    hint: {
      type: String,
      default: null,
    },
    altHint: {
      type: String,
      default: null,
    },
  },
};
</script>
