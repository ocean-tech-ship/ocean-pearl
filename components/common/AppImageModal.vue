<template>
  <transition name="fade">
    <div
      class="modal z-modal modal-backdrop"
      :class="{ 'modal-open': show }"
      @click="backdropClose"
    >
      <div
        class="modal-box w-11/12 lg:w-3/4 max-w-1440 p-0"
        style="border-radius: 0"
      >
        <div class="absolute flex justify-end w-full p-2 lg:p-4">
          <button
            type="button"
            class="btn btn-sm btn-circle shadow text-primary"
            @click="$emit('close')"
          >
            <app-icon :data="icons.times" />
          </button>
        </div>

        <img class="w-full h-full object-contain" :src="src" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
import times from '@iconify/icons-la/times';
import AppIcon from '@/components/common/AppIcon.vue';
import checkForiOS from '~/helpers/checkOS';

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
    },
  },

  data() {
    return {
      scrollPosition: 0,
      icons: {
        times,
      },
    };
  },

  watch: {
    show(toggleOpen) {
      if (toggleOpen) {
        document.body.classList.add('scroll-lock');
        if (checkForiOS()) {
          this.scrollPosition = window.pageYOffset;
          const body = document.querySelector('body');
          body.style.position = 'fixed';
          body.style.top = `-${this.scrollPosition}px`;
        }
      } else {
        document.body.classList.remove('scroll-lock');
        if (checkForiOS()) {
          const body = document.querySelector('body');
          body.style.removeProperty('position');
          body.style.removeProperty('top');
          window.scrollTo(0, this.scrollPosition);
        }
      }
    },
  },

  methods: {
    backdropClose(e) {
      if (e.target.classList.contains('modal-backdrop')) this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active {
  animation: fade 0.2s;
}
.fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.scroll-lock {
  height: 100vh;
  overflow-y: hidden;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding-right: 8px;

    nav {
      padding-right: 8px;
    }
  }

  @media only screen and (min-width: 984px) {
    nav {
      padding-right: 0;
    }
  }

  @media (max-device-width: 1024px) {
    padding-right: 0;

    nav {
      padding-right: 0;
    }
  }
}
</style>
