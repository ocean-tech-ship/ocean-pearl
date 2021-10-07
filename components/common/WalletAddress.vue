<template>
  <div class="flex items-center">
    <jazzicon
      class="flex items-center w-5 h-5 mr-2"
      :diameter="20"
      :address="address"
    />

    <span class="break-all">{{ address }}</span>

    <app-link
      class="ml-1"
      :to="explorerUrl"
    >
      <app-icon
        class="text-primary"
        :size="16"
        :path="mdiOpenInNew"
        :tooltip="$t('project.proposal.wallet.view')"
      />
    </app-link>
  </div>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js';
import Jazzicon from 'vue-jazzicon';
import AppLink from '@/components/common/AppLink.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'WalletAddress',

  components: {
    AppIcon,
    AppLink,
    Jazzicon,
  },

  props: {
    address: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    return {
      mdiOpenInNew,
    };
  },

  computed: {
    explorerUrl() {
      return `https://etherscan.io/address/${this.$props.address}`;
    },
  }
}
</script>
