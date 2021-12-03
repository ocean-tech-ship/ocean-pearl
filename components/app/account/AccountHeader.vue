<template>
  <div class="grid xl:grid-cols-2 gap-4 pb-8">
    <div>
      <h2>
        {{ $t('manage.title[0]') }}
        <span class="text-primary">{{ $t('manage.title[1]') }}</span>
      </h2>

      <div class="flex flex-wrap my-2">
        <button
          v-for="(project, index) in projects"
          :key="project.id"
          class="shadow rounded text-primary border-2 p-2 mr-2 mb-2"
          :class="[
            project.id === selectedProject.id
              ? 'border-primary'
              : 'border-none',
          ]"
          @click="$emit('selectProject', index)"
        >
          {{ project.title }}
        </button>
      </div>

      <p v-if="projects && projects.length === 0">
        {{ $t('manage.project.empty') }}
      </p>
    </div>

    <div>
      <div class="shadow rounded">
        <div class="flex justify-between items-center px-4">
          <label class="label">
            <span class="label-text text-primary">{{
              $t('manage.admins.title')
            }}</span>
          </label>

          <app-tooltip
            v-if="selectedProject"
            :hint="$t('manage.admins.edit')"
            class="tooltip-left"
          >
            <a href="#admins" class="btn btn-circle btn-xs btn-primary">
              <app-icon :data="icons.pen" :size="16" />
            </a>
          </app-tooltip>
        </div>

        <hr class="text-primary" />

        <div class="p-4">
          <wallet-address
            v-for="address in accessAddresses"
            :key="address"
            :address="address"
          />
        </div>

        <!-- manage administrator modal -->
        <project-manage-admin id="admins" :project="selectedProject" />
      </div>
    </div>
  </div>
</template>

<script>
import pen from '@iconify/icons-la/pen';
import WalletAddress from '@/components/common/WalletAddress.vue';
import AppIcon from '@/components/common/AppIcon';
import AppTooltip from '@/components/common/AppTooltip';
import ProjectManageAdmin from '@/components/app/account/project/ProjectManageAdmin';

export default {
  name: 'AccountHeader',

  components: {
    ProjectManageAdmin,
    AppTooltip,
    AppIcon,
    WalletAddress,
  },

  props: {
    wallet: {
      type: String,
      required: true,
      default: '',
    },

    projects: {
      type: Array,
      required: true,
      default: () => [],
    },

    selectedProject: {
      type: Object,
      required: false,
      default: () => {},
    },
  },

  data() {
    return {
      icons: {
        pen,
      },
    };
  },

  computed: {
    accessAddresses() {
      return (
        this.$props.selectedProject?.accessAddresses || [this.$props.wallet]
      );
    },
  },
};
</script>
