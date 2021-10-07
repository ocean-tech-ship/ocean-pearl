<template>
  <div class="relative">
    <!-- overlay -->
    <div class="absolute w-full flex justify-end">
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
        <app-icon :path="mdiCloseThick" class="text-primary" :tooltip="$t('general.remove')" />
      </button>
    </div>

    <img
      class="w-full h-64 rounded object-contain border-2 border-primary"
      :src="src"
      :alt="$t('manage.project.pictures.title')"
    />
  </div>
</template>

<script>
import { mdiCloseThick } from '@mdi/js';
import AppIcon from '~/components/common/AppIcon.vue';

export default {
  name: 'ProjectPicturesItem',

  components: { AppIcon },

  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    return {
      mdiCloseThick,
    }
  }
}
</script>
