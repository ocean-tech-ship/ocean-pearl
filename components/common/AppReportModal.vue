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
        <div class="flex items-center mb-2">
          <span
            class="
              mdi mdi-alert-circle-outline
              mr-2
              text-primary text-smbase
              md:text-lg
            "
          />
          <p class="text-primary leading-snug break-all">
            {{ $t('appReportModal.headline') }}
          </p>
        </div>
      </template>
      <template #body>
        <p class="small-text md:text-smbase">
          {{
            $t('appReportModal.subtext', {
              project: daoProposal.project.title,
            })
          }}
        </p>
        <div class="mt-4">
          <div class="flex items-center">
            <span class="mdi mdi-email-lock mr-2 text-primary text-smbase" />
            <p class="small-text md:text-smbase text-primary">
              {{ $t('appReportModal.headlineEmail') }}
            </p>
          </div>
          <p class="small-text mt-1">
            {{ $t('appReportModal.subtextEmail.part1') }}
            <app-link class="text-primary" to="https://protonmail.com">
              Protonmail
              <span class="mdi mdi-open-in-new" />
            </app-link>
            {{ $t('appReportModal.subtextEmail.part2') }}
          </p>
          <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <app-button
              text-class="small-text"
              :icon="require('@/assets/images/detail/copy-primary.svg')"
              :text="$t(btnCopyEmailTitle)"
              secondary
              @click="copyEmail"
            />
            <app-button
              text-class="small-text"
              :icon="require('@/assets/images/detail/copy-primary.svg')"
              :text="$t(btnCopyPgpTitle)"
              secondary
              @click="copyPgp"
            />
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center">
            <span class="mdi mdi-discord mr-2 text-primary text-smbase" />
            <p class="small-text md:text-smbase text-primary">
              {{ $t('appReportModal.headlineSocial') }}
            </p>
          </div>
          <p class="small-text mt-1">
            {{ $t('appReportModal.subtextSocial.part1') }}
            <app-link
              class="text-primary"
              to="https://github.com/ocean-tech-ship"
            >
              Discord
              <span class="mdi mdi-open-in-new" />
            </app-link>
            {{ $t('appReportModal.subtextSocial.part2') }}
          </p>
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
    daoProposal: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      open: false,
      btnCopyEmailTitle: 'appReportModal.copyEmail',
      btnCopyPgpTitle: 'appReportModal.copyPgp',
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    copyEmail() {
      navigator.clipboard.writeText(this.btnCopyEmailTitle).then(() => {
        this.btnCopyEmailTitle = 'appReportModal.copiedEmail';
        setTimeout(
          () => (this.btnCopyEmailTitle = 'appReportModal.copyEmail'),
          1500,
        );
      });
    },
    copyPgp() {
      navigator.clipboard.writeText(this.PGPKey).then(() => {
        this.btnCopyPgpTitle = 'appReportModal.copiedPgp';
        setTimeout(
          () => (this.btnCopyPgpTitle = 'appReportModal.copyPgp'),
          1500,
        );
      });
    },
  },
};
</script>

<style scoped></style>
