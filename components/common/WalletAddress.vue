<template>
  <div class="flex items-center">
    <jazzicon
      class="flex items-center w-5 h-5"
      :diameter="20"
      :address="address"
    />

    <span class="break-all pl-2 pr-1">{{ address }}</span>

    <app-link
      class="tooltip tooltip-primary tooltip-left"
      :data-tip="$t('project.proposal.wallet.view')"
      :to="explorerUrl"
    >
      <app-icon class="text-primary" :size="18" :data="icons.externalLinkAlt" />
    </app-link>
  </div>
</template>

<script>
import externalLinkAlt from '@iconify/icons-la/external-link-alt';
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
      icons: {
        externalLinkAlt,
      },
    };
  },

  computed: {
    explorerUrl() {
      return `https://blockscan.com/address/${this.$props.address}`;
    },
  },
};
</script>
