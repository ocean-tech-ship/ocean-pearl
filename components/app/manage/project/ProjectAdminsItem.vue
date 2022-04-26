<template>
  <div class="flex items-center">
    <button
      type="button"
      class="mr-5 btn btn-circle btn-xs btn-warning"
      :disabled="isMyAddress(address)"
      @click="$emit('delete')"
    >
      <app-icon :data="icons.times" :size="20" />
    </button>

    <wallet-address :address="address" />
  </div>
</template>

<script>
import times from '@iconify/icons-la/times';
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
        times,
      },
    };
  },

  methods: {
    isMyAddress(address) {
      return address.toLowerCase() === this.wallet.toLowerCase();
    },
  },
};
</script>
