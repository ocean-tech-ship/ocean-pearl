<template>
  <app-tooltip :hint="hint">
    <span
      :class="$attrs.class"
      :aria-label="hint"
    />
  </app-tooltip>
</template>

<script>
import AppTooltip from '@/components/common/AppTooltip.vue';

export default {
  name: 'AppIcon',

  components: { AppTooltip },

  props: {
    hint: {
      type: String,
      required: false,
      default: '',
    }
  }
};
</script>
