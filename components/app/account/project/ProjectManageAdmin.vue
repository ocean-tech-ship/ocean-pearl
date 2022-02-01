<template>
  <div class="modal z-modal">
    <div class="modal-box">
      <h5 class="text-primary text-lg pb-2">{{ $t('manage.admins.edit') }}</h5>

      <div class="overflow-y-auto max-h-52 lg:max-h-none">
        <div
          v-for="address in adminAddresses"
          :key="address"
          class="flex items-center"
        >
          <button
            type="button"
            class="btn btn-circle btn-xs btn-outline btn-primary"
            @click="removeAdmin(address)"
          >
            <app-icon :size="16" :data="icons.times" />
          </button>

          <wallet-address class="pl-3 py-1" :address="address" />
        </div>
      </div>

      <div class="form-control pt-3">
        <div class="flex space-x-2">
          <input
            v-model="adminCreator"
            type="text"
            :placeholder="$t('manage.admins.add')"
            class="w-full input input-sm input-bordered border-primary"
          />

          <button
            :class="{ 'btn-outline btn-disabled': !adminCreator }"
            class="btn btn-sm btn-primary"
            @click="addAdmin()"
          >
            {{ $t('general.add') }}
          </button>
        </div>
      </div>

      <div class="modal-action">
        <a href="#" class="btn btn-primary" @click="saveChanges()">
          {{ $t('general.save') }}
        </a>

        <a href="#" class="btn" @click="reset()">{{ $t('general.abort') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import times from '@iconify/icons-la/times';
import WalletAddress from '@/components/common/WalletAddress';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'ProjectManageAdmin',

  components: { AppIcon, WalletAddress },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        times,
      },
      adminAddresses: [...this.$props.project.accessAddresses],
      adminCreator: '',
    };
  },

  methods: {
    reset() {
      this.adminAddresses = [...this.$props.project.accessAddresses];
      this.adminCreator = '';
    },

    saveChanges() {
      const updateRequest = {
        id: this.$props.project.id,
        accessAddresses: this.adminAddresses,
      };
      this.$store.dispatch('account/updateProject', updateRequest);
    },

    addAdmin() {
      this.adminAddresses.push(this.adminCreator);
      this.adminCreator = '';
    },

    removeAdmin(address) {
      const index = this.adminAddresses.findIndex((el) => el === address);
      if (index > -1) {
        this.adminAddresses.splice(index, 1);
      }
    },
  },
};
</script>
