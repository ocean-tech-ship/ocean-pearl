<template>
  <div>
    <div class="rounded shadow p-4 my-4 bg-base-200">
      <project-admins-item
        v-for="address in project.accessAddresses"
        :key="address"
        :address="address"
        @delete="deleteAddress(address)"
      />
    </div>

    <project-admins-input :project="project" @add="addAddress($event)" />
  </div>
</template>

<script>
import ProjectAdminsItem from '@/components/app/manage/project/ProjectAdminsItem';
import ProjectAdminsInput from '@/components/app/manage/project/ProjectAdminsInput';

export default {
  name: 'ProjectAdmins',

  components: { ProjectAdminsInput, ProjectAdminsItem },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteAddress(address) {
      const admins = [...this.project.accessAddresses].filter(
        (item) => item !== address,
      );
      this.$emit('change', admins);
    },
    addAddress(address) {
      const admins = [...this.project.accessAddresses, address];
      this.$emit('change', admins);
    },
  },
};
</script>
