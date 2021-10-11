<template>
  <app-tooltip :hint="tooltip">
    <svg
      :width="size"
      :height="size"
      :viewBox="viewBox"
      :style="styles"
      :class="$attrs.class"
      :aria-label="tooltip"
    >
      <path :d="path" />
    </svg>
  </app-tooltip>
</template>

<script>
import AppTooltip from '@/components/common/AppTooltip.vue';

export default {
  name: 'AppIcon',
  components: { AppTooltip },
  props: {
    tooltip: {
      type: String,
      required: false,
      default: '',
    },

    path: {
      type: String,
      required: true,
    },

    size: {
      type: [String, Number],
      required: false,
      default: 24
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 24 24',
    },
    rotate: {
      type: Number,
      required: false,
      default: 0
    },
    flip: {
      type: String,
      validator: (value) =>
        ['horizontal', 'vertical', 'both', 'none'].includes(value),
      default: 'none',
    },
  },

  computed: {
    styles() {
      return {
        '--sx': ['both', 'horizontal'].includes(this.flip) ? '-1' : '1',
        '--sy': ['both', 'vertical'].includes(this.flip) ? '-1' : '1',
        '--r': Number.isNaN(this.rotate) ? this.rotate : `${this.rotate}deg`,
      }
    }
  },
};
</script>

<style scoped>
svg {
  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}

path {
  fill: currentColor;
}
</style>
