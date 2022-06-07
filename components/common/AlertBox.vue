<template>
  <div class="alert shadow justify-start" :class="types[type].css">
    <app-icon v-if="icon" :data="types[type].icon" />

    <slot />
  </div>
</template>

<script>
import iconInfo from '@iconify/icons-la/info';
import iconSuccess from '@iconify/icons-la/check';
import iconWarning from '@iconify/icons-la/exclamation-triangle';
import iconError from '@iconify/icons-la/times-circle';

import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'AlertBox',

  components: { AppIcon },

  props: {
    type: {
      type: String,
      required: true,
      validator: (value) =>
        ['info', 'success', 'warning', 'error'].includes(value),
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      types: {
        info: {
          icon: iconInfo,
          css: 'alert-info',
        },
        success: {
          icon: iconSuccess,
          css: 'alert-success',
        },
        warning: {
          icon: iconWarning,
          css: 'alert-warning',
        },
        error: {
          icon: iconError,
          css: 'alert-error',
        },
      },
    };
  },
};
</script>
