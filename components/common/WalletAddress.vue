<template>
  <div class="flex items-center">
    <jazzicon
      class="flex items-center mr-2"
      :diameter="20"
      :address="address"
    />

    <span class="break-all">{{ address }}</span>

    <app-link
      class="ml-1"
      :to="explorerUrl"
    >
      <img
        src="@/assets/images/icons/link.svg"
        :alt="$t('project.proposal.wallet.view')"
      />
    </app-link>
  </div>
</template>

<script>
import Jazzicon from 'vue-jazzicon';
import AppLink from '@/components/common/AppLink.vue';

export default {
  name: 'WalletAddress',

  components: {
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

  computed: {
    explorerUrl() {
      return `https://etherscan.io/address/${this.$props.address}`;
    },
  }
}
</script>

<style scoped>

</style>
