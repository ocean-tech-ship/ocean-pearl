<template>
  <div>
    <div class="relative">
      <button
        type="button"
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
    <app-modal :open="open" @close="toggleOpen">
      <template #header>
        <div class="flex items-center sm:mb-2">
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
      </template>
      <template #body>
        <p class="hidden sm:block small-text md:text-smbase">
          If you have legal or technical concerns regarding
          {{ daoProposal.project.title }}, please don't hestitate to contact us.
        </p>
        <div class="mt-4">
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
          <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <app-button
              text-class="small-text"
              :icon="require('@/assets/images/detail/copy-primary.svg')"
              :text="btnCopyEmailTitle"
              secondary
              @click="copyEmail()"
            />
            <app-button
              text-class="small-text"
              :icon="require('@/assets/images/detail/copy-primary.svg')"
              text="copy pgp"
              secondary
              @click="copyPgp()"
            />
          </div>
        </div>
      </template>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '@/components/common/AppModal.vue';
import AppButton from '@/components/common/AppButton.vue';
import AppLink from '@/components/common/AppLink.vue';

export default {
  name: 'AppReportModal',
  components: {
    AppModal,
    AppButton,
    AppLink,
  },

  props: {
    pgpKey: {
      type: String,
      default() {
        this.$t('report.pgpKey');
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
      btnCopyPgpTitle: 'report.copyPgp',
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    copyEmail() {
      navigator.clipboard.writeText(this.btnCopyEmailTitle).then(() => {
        this.btnCopyEmailTitle = 'report.copiedPGP';
        setTimeout(() => (this.btnCopyEmailTitle = 'report.copyPgp'), 1500);
      });
    },
    copyPgp() {
      navigator.clipboard.writeText(this.PGPKey).then(() => {
        this.btnCopyPGPTitle = 'report.copiedPGP';
        setTimeout(() => (this.btnCopyPGPTitle = 'report.copyPgp'), 1500);
      });
    },
  },
};
</script>

<style scoped></style>
