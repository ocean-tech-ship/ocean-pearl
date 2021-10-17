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
        class="modal relative rounded bg-white shadow p-4 sm:p-8 m-4 md:m-0"
        role="dialog"
      >
        <button
          type="button"
          class="
            btn-close
            mdi mdi-close
            text-smbase text-primary
            absolute
            top-2
            right-3
          "
          aria-label="Close modal"
          @click="close"
        />
        <header class="modal-header flex items-center sm:mb-4">
          <slot name="header" />
        </header>
        <section class="modal-body">
          <slot name="body" />
        </section>
        <footer class="modal-footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    open: {
      type: Boolean,
      required: true,
      default: () => false,
    },
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
  padding-right: 8px;

  nav {
    padding-right: 8px;
  }

  .modal {
    transform: translateX(-4px);
  }
}
</style>
<style scoped lang="scss">
.modal-backdrop {
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
}

.modal {
  width: 300px;
  @media screen and (min-width: 498px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
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
