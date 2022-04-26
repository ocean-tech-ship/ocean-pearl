<template>
  <div class="relative rounded shadow border border-neutral">
    <!-- overlay -->
    <div class="absolute top-0 right-0">
      <button
        type="button"
        class="m-4 btn btn-circle btn-sm btn-warning"
        @click="$emit('delete')"
      >
        <app-icon :data="icons.times" />
      </button>
    </div>

    <img class="w-full h-64 object-contain" :src="image.url" alt="" />
  </div>
</template>

<script>
import times from '@iconify/icons-la/times';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'ProjectImagesItem',

  components: { AppIcon },

  props: {
    image: {
      type: Object,
      required: true,
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
