<template>
  <div>
    <app-dropdown class="dropdown-end" :btn-class="btnClass">
      <template #icon>
        <app-icon
          :data="icons.ellipsisV"
          :size="iconSize"
          :rotate="iconRotate"
        />
      </template>
      <app-dropdown-menu :close-time-clicked="500">
        <li>
          <app-button
            class="btn-ghost justify-start"
            :icon="icons.contentCopy"
            :icon-size="16"
            @click="copyProjectLink"
          >
            {{ $t(menuItemCopyLinkTitle) }}
          </app-button>
        </li>
        <li>
          <app-button
            class="btn-ghost justify-start"
            :icon="icons.alertCircle"
            :icon-size="16"
            @click="toggleReportModal"
          >
            {{ $t('appSettingsDropdown.menuItemReport') }}
          </app-button>
        </li>
      </app-dropdown-menu>
    </app-dropdown>
    <app-report-modal ref="reportModal" :project-title="projectTitle" />
  </div>
</template>

<script>
import ellipsisV from '@iconify/icons-la/ellipsis-v';
import alertCircle from '@iconify/icons-mdi/alert-circle-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import AppIcon from '@/components/common/AppIcon.vue';
import AppReportModal from '@/components/common/AppReportModal.vue';
import AppDropdown from '@/components/common/AppDropdown';
import AppDropdownMenu from '@/components/common/AppDropdownMenu';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'AppSettingsDropdown',

  components: {
    AppDropdownMenu,
    AppDropdown,
    AppIcon,
    AppReportModal,
    AppButton,
  },

  props: {
    btnClass: {
      type: String,
      default: () => 'btn-ghost text-primary gap-0',
    },
    iconRotate: {
      type: Number,
      default: () => 0,
    },
    iconSize: {
      type: Number,
      default: () => 22,
    },
    projectTitle: {
      type: String,
      required: true,
      default: () => '',
    },
    projectLink: {
      type: String,
      required: true,
      default: () => '',
    },
  },

  data() {
    return {
      icons: {
        ellipsisV,
        alertCircle,
        contentCopy,
      },
      open: false,
      menuItemCopyLinkTitle: 'appSettingsDropdown.menuItemCopyLink',
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    toggleReportModal() {
      this.toggleOpen();
      this.$refs.reportModal.toggleOpen();
    },
    copyProjectLink() {
      navigator.clipboard
        .writeText(`${window.location.origin}${this.projectLink}`)
        .then(() => {
          this.menuItemCopyLinkTitle = 'appSettingsDropdown.menuItemCopied';
          setTimeout(() => {
            this.toggleOpen();
            this.menuItemCopyLinkTitle = 'appSettingsDropdown.menuItemCopyLink';
          }, 1000);
        });
    },
  },
};
</script>
