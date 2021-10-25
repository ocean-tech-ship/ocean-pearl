<template>
  <transition v-if="open" name="modal-fade">
    <div
      class="
        modal-backdrop
        fixed
        top-0
        left-0
        right-0
        inset
        flex
        items-center
        justify-center
        min-h-screen
      "
      @click="backdropClose"
    >
      <div
        class="
          modal
          relative
          rounded
          bg-white
          shadow
          m-4
          md:m-0
          overflow-hidden
        "
        role="dialog"
      >
        <button
          type="button"
          class="btn-close text-smbase text-primary absolute top-2 right-3"
          aria-label="Close modal"
          @click="close"
        >
          <app-icon :data="icons.closeIcon" />
        </button>
        <div
          class="
            modal-content
            h-full
            w-full
            overflow-y-scroll
            py-4
            pl-4
            sm:py-8 sm:pl-8
          "
        >
          <header class="modal-header flex items-center pr-6 sm:pr-8">
            <slot name="header" />
          </header>
          <section class="modal-body pr-6 sm:pr-8">
            <slot name="body" />
          </section>
          <footer class="modal-footer pr-6 sm:pr-8">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import closeIcon from '@iconify/icons-mdi/close';
import AppIcon from '@/components/common/AppIcon.vue';

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
    };
  },

  watch: {
    open() {
      this.open
        ? document.body.classList.add('scroll-lock')
        : document.body.classList.remove('scroll-lock');
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

    .modal {
      transform: translateX(-4px);
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

    .modal {
      transform: translateX(0);
    }
  }
}
</style>

<style scoped lang="scss">
.modal-backdrop {
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
}

.modal {
  height: 400px;
  width: 300px;
  @media screen and (min-width: 498px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    height: 498px;
    width: 670px;
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
