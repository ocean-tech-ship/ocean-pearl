<template>
  <div>
    <div class="relative">
      <button
        type="button"
        :class="btnClass"
        @click="
          (e) => {
            toggleOpen();
            handleiOSBlur(e);
          }
        "
        @blur="handleBlur"
      >
        <app-icon
          :size="iconSize"
          :rotate="iconRotate"
          :data="icons.ellipsisV"
        />
      </button>
      <div
        v-if="open"
        class="bg-base-300 border border-primary rounded shadow absolute top-9 z-dropdown right-4"
      >
        <ul>
          <li
            class="menuItem text-primary small-text p-2 flex items-center"
            tabindex="0"
            @click="copyProjectLink()"
          >
            <app-icon :size="16" :data="icons.contentCopy" class="mr-2" />
            {{ $t(menuItemCopyLinkTitle) }}
          </li>
          <li
            class="menuItem text-primary small-text p-2 flex items-center"
            tabindex="0"
            @click="toggleReportModal()"
          >
            <app-icon :size="16" :data="icons.alertCircle" class="mr-2" />
            {{ $t('appSettingsDropdown.menuItemReport') }}
          </li>
        </ul>
      </div>
    </div>
    <app-report-modal ref="reportModal" :project-title="projectTitle" />
  </div>
</template>

<script>
import ellipsisV from '@iconify/icons-la/ellipsis-v';
import alertCircle from '@iconify/icons-mdi/alert-circle-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import AppIcon from '@/components/common/AppIcon.vue';
import AppReportModal from '@/components/common/AppReportModal.vue';
import checkForiOS from '@/helpers/checkOS.ts';

export default {
  name: 'AppSettingsDropdown',

  components: {
    AppIcon,
    AppReportModal,
  },

  props: {
    btnClass: {
      type: String,
      default: () => 'absolute top-3 right-0 px-2 text-primary leading-none',
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
    handleBlur(e) {
      if (
        (!e.relatedTarget && this.open) ||
        (!e.relatedTarget?.classList.contains('menuItem') && this.open)
      )
        this.toggleOpen();
    },
    handleiOSBlur(e) {
      if (checkForiOS()) {
        const { handleBlur } = this;
        e.target.addEventListener('mouseout', handleBlur, { once: true });
      }
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

<style scoped lang="scss">
ul {
  min-width: 160px;
  max-height: 222px;
  border-radius: 7px;
}
li:hover {
  background: #bb2c7636;
  transition: 200ms;
  cursor: pointer;
}
</style>
