<template>
  <div class="relative">
    <!-- overlay -->
    <div class="absolute w-full flex justify-end">
      <app-tooltip :hint="$t('general.remove')">
        <button
          class="
            rounded-full
            shadow
            m-4
            h-12
            w-12
            flex
            items-center
            justify-center
            bg-secondary
          "
          @click="$emit('delete')"
        >
          <app-icon :data="icons.times" class="text-primary" />
        </button>
      </app-tooltip>
    </div>

    <img
      class="w-full h-64 rounded object-contain border-2 border-primary"
      :src="src"
      :alt="$t('manage.project.pictures.title')"
    />
  </div>
</template>

<script>
import times from '@iconify/icons-la/times';
import AppIcon from '@/components/common/AppIcon.vue';
import AppTooltip from '~/components/common/AppTooltip';

export default {
  name: 'ProjectPicturesItem',

  components: { AppTooltip, AppIcon },

  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    return {
      icons: {
        times,
      },
    };
  },
};
</script>
