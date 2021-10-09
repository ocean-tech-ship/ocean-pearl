<template>
  <div>
    <div class="relative">
      <button
        class="
          absolute
          -top-1
          right-1
          p-4
          text-lg
          mdi mdi-settings-helper
          text-primary
          leading-none
          -rotate-90
        "
        @click="toggleOpen"
      />
    </div>
    <div
      v-if="open"
      class="
        absolute
        top-0
        left-0
        right-0
        inset
        flex
        items-center
        justify-center
        min-h-screen
        overflow-y-auto
      "
    >
      <div class="cardModal rounded bg-white shadow p-4 sm:p-8 m-6 md:m-0">
        <div class="flex items-center sm:mb-4">
          <span
            class="
              mdi mdi-alert-circle-outline
              mr-2
              text-primary text-smbase
              md:text-lg
            "
          />
          <p class="text-primary leading-snug break-all">Report this project</p>
        </div>
        <p class="hidden sm:block small-text md:text-smbase">
          If you have legal or technical concerns regarding
          {{ daoProposal.project.title }}, please don't hestitate to contact us.
        </p>
        <div class="mt-6 sm:mt-8">
          <div class="flex items-center">
            <span class="mdi mdi-email-lock mr-2 text-primary text-smbase" />
            <p class="small-text md:text-smbase text-primary">Email</p>
          </div>
          <p class="small-text mt-1">
            You can contact us via PGP encrypted email, by using our public key
            below. If you use
            <app-link class="text-primary" to="https://protonmail.com">
              Protonmail
              <span class="mdi mdi-open-in-new" /> </app-link
            >, your email to us will be automatically encrypted.
          </p>
          <div class="flex mt-2 flex-wrap">
            <app-button
              class="my-2 mr-2"
              :icon="require('@/assets/images/detail/copy-primary.svg')"
              :text="$t(btnCopyEmailTitle)"
              secondary
              @click="copyEmail()"
            />
            <app-button
              class="my-2"
              :icon="require('@/assets/images/detail/copy-primary.svg')"
              :text="$t(btnCopyPGPTitle)"
              secondary
              @click="copyPGP()"
            />
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center">
            <span class="mdi mdi-discord mr-2 text-primary text-smbase" />
            <p class="small-text md:text-smbase text-primary">Discord</p>
          </div>
          <p class="small-text mt-1">
            You can also find us on
            <app-link
              class="text-primary"
              to="https://github.com/ocean-tech-ship"
            >
              Discord
              <span class="mdi mdi-open-in-new" /> </app-link
            >, where you can reach out to one of our team members directly.
          </p>
        </div>
      </div>
      <div
        class="
          bgModal
          absolute
          top-0
          left-0
          right-0
          inset
          h-screen
          bg-black
          opacity-70
          flex
          items-center
          justify-center
        "
        @click="toggleOpen"
      />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue';
import AppLink from '@/components/common/AppLink.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';

export default {
  name: 'AppReportProject',

  components: {
    AppButton,
    AppLink,
  },

  mixins: [ProjectBeautifyId],

  props: {
    PGPKey: {
      type: String,
      required: true,
      default() {
        this.$t('report.PGPKey');
      },
    },
    daoProposal: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      open: false,
      btnCopyEmailTitle: 'oceanpearl@protonmail.com',
      btnCopyPGPTitle: 'report.copyPGP',
      scrollPosition: 0,
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
      if (this.open) {
        this.enableBodyScrollLock();
      } else {
        this.disableBodyScrollLock();
      }
    },
    enableBodyScrollLock() {
      this.scrollPosition = window.pageYOffset;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.pageYOffset}px`;
      document.body.style.width = '100%';
    },
    disableBodyScrollLock() {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('width');
      window.scrollTo(0, this.scrollPosition);
    },
    copyEmail() {
      navigator.clipboard.writeText(this.btnCopyEmailTitle).then(() => {
        this.btnCopyEmailTitle = 'report.copiedPGP';
        setTimeout(() => (this.btnCopyEmailTitle = 'report.copyPGP'), 1500);
      });
    },
    copyPGP() {
      navigator.clipboard.writeText(this.PGPKey).then(() => {
        this.btnCopyPGPTitle = 'report.copiedPGP';
        setTimeout(() => (this.btnCopyPGPTitle = 'report.copyPGP'), 1500);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.bgModal {
  z-index: 999;
}
.cardModal {
  @media screen and (min-width: 768px) {
    width: 670px;
  }
  z-index: 1000;
}
</style>
