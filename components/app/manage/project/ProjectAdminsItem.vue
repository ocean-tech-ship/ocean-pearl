<template>
  <div
    class="rounded shadow p-2 my-2 bg-base-300 flex items-center justify-between gap-4"
  >
    <wallet-address :address="address" />

    <span v-if="isMyAddress()" class="badge badge-lg badge-info my-1">
      {{ $t('general.you') }}
    </span>

    <button
      v-else
      type="button"
      class="btn btn-circle btn-sm btn-error"
      :disabled="isMyAddress(address)"
      @click="$emit('delete')"
    >
      <app-icon :data="icons.trashAlt" :size="20" />
    </button>
  </div>
</template>

<script>
import trashAlt from '@iconify/icons-la/trash-alt';
import AppIcon from '@/components/common/AppIcon';
import WalletAddress from '@/components/common/WalletAddress';
import ConnectedWallet from '@/mixins/ConnectedWallet';

export default {
  name: 'ProjectAdminsItem',

  components: { WalletAddress, AppIcon },

  mixins: [ConnectedWallet],

  props: {
    address: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        trashAlt,
      },
    };
  },

  methods: {
    isMyAddress() {
      return this.address === this.wallet;
    },
  },
};
</script>
