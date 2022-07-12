<template>
  <AppFormControl>
    <template #label>
      <span class="text-primary font-bold">{{ label }}</span>
    </template>

    <template v-if="hint" #altLabel>
      <app-tooltip :hint="hint" class="tooltip-left">
        <button type="button" class="btn btn-primary btn-circle btn-xs">
          <app-icon :data="icons.info" :size="20" />
        </button>
      </app-tooltip>
    </template>

    <slot />

    <template v-if="maxLength" #hint>
      <span class="label-text-alt">{{ `${value.length} / ${maxLength}` }}</span>
    </template>
  </AppFormControl>
</template>

<script>
import info from '@iconify/icons-la/info';
import AppFormControl from '@/components/common/AppFormControl';
import AppTooltip from '@/components/common/AppTooltip';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'FormControl',

  components: { AppIcon, AppTooltip, AppFormControl },

  props: {
    value: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String | Number | Boolean,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: false,
      default: null,
    },
    maxLength: {
      type: Number,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      icons: {
        info,
      },
    };
  },
};
</script>
