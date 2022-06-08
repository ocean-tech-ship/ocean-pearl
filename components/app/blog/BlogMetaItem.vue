<template>
  <div class="flex items-center">
    <app-icon class="pr-1" :data="icon" />
    <span>{{ value }}</span>
  </div>
</template>

<script>
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'BlogMetaItem',
  components: { AppIcon },

  props: {
    icon: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

