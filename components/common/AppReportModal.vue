<template>
  <app-modal :open="open" @close="toggleOpen">
    <template #header>
      <div class="flex items-center">
        <span
          class="
            mdi mdi-alert-circle-outline
            mr-2
            mb-4
            md:mb-2
            text-primary text-smbase
            md:text-lg
          "
        />
        <p class="text-primary leading-snug break-all mb-4 md:mb-2">
          {{ $t('appReportModal.headline') }}
        </p>
      </div>
    </template>
    <template #body>
      <p class="small-text md:text-smbase mb-6 md:mb-8">
        {{
          $t('appReportModal.subtext', {
            project: daoProposal.project.title,
          })
        }}
      </p>
      <div>
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
        <div class="accordion w-full mt-4">
          <div class="flex justify-center items-center">
            <hr class="text-primary hidden sm:block sm:w-1/3" />
            <button
              class="small-text text-darkgey sm:w-1/3"
              @click="toggleAccOpen"
            >
              <span
                class="mdi mr-1 text-smbase"
                :class="{ 'mdi-menu-up': accOpen, 'mdi-menu-down': !accOpen }"
              />
              {{ $t('appReportModal.btnShowPgpTitle') }}
            </button>
            <hr class="text-primary hidden sm:block sm:w-1/3" />
          </div>
          <pre v-if="accOpen" class="w-full bg-grey p-3 small-text">{{
            pgpKey
          }}</pre>
        </div>
      </div>
      <div class="mt-4">
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
</template>

<script>
import AppModal from '@/components/common/AppModal.vue';
import AppButton from '@/components/common/AppButton.vue';
import AppLink from '@/components/common/AppLink.vue';
import EmailEnum from '~/components/enums/Email.enum';

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
      accOpen: false,
      btnCopyEmailTitle: 'appReportModal.btnCopyEmailTitle',
      btnCopyPgpTitle: 'appReportModal.btnCopyPgpTitle',
      emailAddress: EmailEnum.Address,
      pgpKey: EmailEnum.Pgp,
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
      if (!this.open && this.accOpen) this.accOpen = false;
    },
    toggleAccOpen() {
      this.accOpen = !this.accOpen;
    },
    copyEmail() {
      navigator.clipboard.writeText(this.emailAddress).then(() => {
        this.btnCopyEmailTitle = 'appReportModal.btnCopiedEmailTitle';
        setTimeout(
          () => (this.btnCopyEmailTitle = 'appReportModal.btnCopyEmailTitle'),
          1500,
        );
      });
    },
    copyPgp() {
      navigator.clipboard.writeText(this.pgpKey).then(() => {
        this.btnCopyPgpTitle = 'appReportModal.btnCopiedPgpTitle';
        setTimeout(
          () => (this.btnCopyPgpTitle = 'appReportModal.btnCopyPgpTitle'),
          1500,
        );
      });
    },
  },
};
</script>

<style scoped lang="scss">
pre {
  overflow: auto;
}
</style>
