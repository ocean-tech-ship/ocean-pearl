<template>
  <div class="stat">
    <div v-if="title" class="stat-title">{{ title }}</div>
    <div v-if="value" class="stat-value text-primary">{{ value }}</div>
    <div v-if="desc" class="stat-desc">{{ desc }}</div>
    <div v-if="icon" class="stat-figure text-primary">
      <app-icon class="inline-block" :data="icon" :size="iconSize" />
    </div>

    <!-- provide stats via props or default slot -->
    <slot />

    <!-- provide actions via actions slot -->
    <div v-if="$slots.actions" class="stat-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/common/AppIcon';
export default {
  name: 'AppStatItem',

  components: {
    AppIcon,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: null,
    },
    iconSize: {
      type: Number,
      default: 34,
    },
  },
};
</script>
