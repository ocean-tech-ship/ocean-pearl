<template>
  <app-tooltip :hint="tooltip">
    <svg
      :width="size"
      :height="size"
      :viewBox="viewBox"
      :style="styles"
      :class="$attrs.class"
      :aria-label="tooltip"
      v-html="data.body"
    />
  </app-tooltip>
</template>

<script>
import AppTooltip from '@/components/common/AppTooltip.vue';

const DEFAULT_SIZE = 24;

export default {
  name: 'AppIcon',

  components: { AppTooltip },

  props: {
    tooltip: {
      type: String,
      required: false,
      default: '',
    },

    data: {
      type: Object,
      required: true,
    },

    size: {
      type: Number,
      required: false,
      default: DEFAULT_SIZE,
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
    viewBox() {
      const width = this.$props.data.width || DEFAULT_SIZE;
      const height = this.$props.data.height || DEFAULT_SIZE;
      return `0 0 ${width} ${height}`;
    },

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
