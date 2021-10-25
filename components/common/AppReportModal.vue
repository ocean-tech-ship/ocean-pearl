<template>
  <app-modal :open="open" @close="toggleOpen">
    <template #header>
      <div class="flex items-center text-primary">
        <app-icon class="mr-2 mb-4" :data="icons.alertCircleOutline" />
        <p class="leading-snug break-all mb-4">
          {{ $t('appReportModal.headline') }}
        </p>
      </div>
    </template>
    <template #body>
      <p class="small-text md:text-smbase mb-6">
        {{
          $t('appReportModal.subtext', {
            projectTitle: projectTitle,
          })
        }}
      </p>
      <div>
        <div class="flex items-center">
          <app-icon class="mr-2 text-primary" :size="18" :data="icons.email" />
          <p class="small-text md:text-smbase text-primary">
            {{ $t('appReportModal.headlineEmail') }}
          </p>
        </div>
        <p class="small-text mt-1">
          {{ $t('appReportModal.subtextEmail.part1') }}
          <app-link class="text-primary inline" to="https://protonmail.com">
            Protonmail
          </app-link>
          {{ $t('appReportModal.subtextEmail.part2') }}
        </p>
        <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <app-button
            text-class="small-text"
            :text="$t(btnCopyEmailTitle)"
            secondary
            :icon="icons.contentCopy"
            @click="copyEmail"
          />
          <app-button
            text-class="small-text"
            :text="$t(btnCopyPgpTitle)"
            secondary
            :icon="icons.contentCopy"
            @click="copyPgp"
          />
        </div>
        <div class="accordion w-full mt-4">
          <div class="flex justify-center items-center">
            <hr class="text-primary hidden sm:block sm:w-1/3" />
            <button
              class="
                small-text
                text-darkgey
                sm:w-1/3
                flex
                justify-center
                items-center
              "
              @click="toggleAccOpen"
            >
              <app-icon
                :size="18"
                :data="!accOpen ? icons.menuDown : icons.menuUp"
              />
              <span class="ml-2">{{
                $t('appReportModal.btnShowPgpTitle')
              }}</span>
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
          <app-icon
            class="mr-2 text-primary"
            :size="18"
            :data="icons.discord"
          />
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
          </app-link>
          {{ $t('appReportModal.subtextSocial.part2') }}
        </p>
      </div>
    </template>
  </app-modal>
</template>

<script>
import alertCircleOutline from '@iconify/icons-mdi/alert-circle-outline';
import email from '@iconify/icons-mdi/email-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import menuDown from '@iconify/icons-mdi/menu-down';
import menuUp from '@iconify/icons-mdi/menu-up';
import discord from '@iconify/icons-la/discord';
import AppIcon from '@/components/common/AppIcon.vue';
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
    AppIcon,
  },

  props: {
    projectTitle: {
      type: String,
      required: true,
      default: () => '',
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
      icons: {
        alertCircleOutline,
        email,
        contentCopy,
        menuDown,
        menuUp,
        discord,
      },
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
