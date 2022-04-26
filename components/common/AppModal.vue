<template>
  <div
    class="modal z-modal modal-backdrop"
    :class="{ 'modal-open': open }"
    @click="backdropClose"
  >
    <div
      class="modal-box relative overflow-y-scroll h-[490px] md:h-[520px] md:min-w-[690px]"
      role="dialog"
    >
      <button
        type="button"
        class="btn-close text-smbase text-primary absolute top-3 right-3"
        aria-label="Close modal"
        @click="close"
      >
        <app-icon :data="icons.closeIcon" />
      </button>
      <div class="modal-content h-full flex flex-col">
        <header class="modal-header flex items-center">
          <slot name="header" />
        </header>
        <section class="modal-body flex-grow">
          <slot name="body" />
        </section>
        <footer class="modal-footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import closeIcon from '@iconify/icons-mdi/close';
import AppIcon from '@/components/common/AppIcon.vue';
import checkForiOS from '@/helpers/checkOS.ts';

export default {
  name: 'AppModal',

  components: {
    AppIcon,
  },

  props: {
    open: {
      type: Boolean,
      required: true,
      default: () => false,
    },
  },

  data() {
    return {
      icons: {
        closeIcon,
      },
      scrollPosition: 0,
    };
  },

  watch: {
    open() {
      if (this.open) {
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
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
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
