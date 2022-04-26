<template>
  <div>
    <!-- trigger button -->
    <app-button
      as="button"
      class="btn-primary"
      :icon="icons.usersCog"
      :btn-text="$t('manage.admins.title')"
      @click="toggleOpen()"
    />

    <!-- modal -->
    <app-modal :open="open" @close="open = false">
      <template #header>
        <p class="text-primary font-bold">
          {{ $t('manage.admins.title') }}
        </p>
      </template>

      <template #body>
        <div class="py-8 space-y-4">
          <project-admins-item
            v-for="address in project.accessAddresses"
            :key="address"
            :address="address"
            @delete="deleteAdmin(address)"
          />
        </div>
      </template>

      <template #footer>
        <div class="flex">
          <app-text-input
            v-model="addTextField"
            class="flex-grow input-primary mr-4"
            :placeholder="$t('manage.admins.add')"
          />

          <app-button
            class="btn-primary btn-outline"
            :btn-text="$t('general.add')"
            @click="addAdmin()"
          />
        </div>
      </template>
    </app-modal>
  </div>
</template>

<script>
import usersCog from '@iconify/icons-la/users-cog';
import AppModal from '@/components/common/AppModal';
import AppButton from '@/components/common/AppButton';
import ProjectAdminsItem from '@/components/app/manage/project/ProjectAdminsItem';
import AppTextInput from '@/components/common/AppTextInput';

export default {
  name: 'ProjectAdmins',

  components: { AppTextInput, ProjectAdminsItem, AppButton, AppModal },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      open: false,
      addTextField: null,
      icons: {
        usersCog,
      },
    };
  },

  methods: {
    addAdmin() {
      const admins = [...this.project.accessAddresses];
      admins.push(this.addTextField);
      this.addTextField = null;
      this.$emit('change', admins);
    },
    deleteAdmin(address) {
      const admins = [...this.project.accessAddresses].filter(
        (item) => item !== address,
      );
      this.$emit('change', admins);
    },
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>
