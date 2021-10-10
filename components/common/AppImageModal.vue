<template>
  <transition name="zoom">
    <div
      v-if="show"
      class="fixed z-50 pt-20 pb-20 left-0 top-0 w-full h-full overflow-auto bg-grey bg-opacity-70"
    >
      <button
        type="button"
        class="
          absolute
          right-5
          rounded-full
          shadow
          m-4
          h-12
          w-12
          flex
          items-center
          justify-center
          bg-secondary
          transition
          duration-300
          ease-in-out
          hover:scale-125
        "
        @click="$emit('close')"
      >
        <app-icon :path="mdiClose" />
      </button>

      <img
        class="m-auto block w-11/12 lg:w-3/4 max-w-1440 h-full object-contain"
        :src="src"
        alt=""
      />
    </div>
  </transition>
</template>

<script>
import { mdiClose } from '@mdi/js';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'AppImageModal',

  components: { AppIcon },

  props: {
    show: {
      type: Boolean,
      required: false,
      default: true,
    },

    src: {
      type: String,
      required: true,
    }
  },


  data() {
    return {
      mdiClose,
    }
  },
}
</script>

<style scoped>
.zoom-enter-active {
  animation: zoom .5s;
}
.zoom-leave-active {
  animation: zoom .5s reverse;
}
@keyframes zoom {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
