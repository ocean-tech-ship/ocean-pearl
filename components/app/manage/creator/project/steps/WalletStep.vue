<template>
  <FormControl :label="$t('creator.project.wallet.label')">
    <div class="space-y-6 flex flex-col">
      <span class="px-1">
        {{ $t('creator.project.wallet.description') }}
      </span>

      <div class="bg-base-200 rounded p-4">
        <WalletAddress :address="wallet" />
      </div>

      <!-- checked networks -->
      <FormControl :label="$t('creator.project.wallet.network.label')">
        <span v-if="Object.keys(checks).length === 0" class="italic">
          {{ $t('creator.project.wallet.network.initial') }}
        </span>
        <div class="space-y-2">
          <div
            v-for="network in Object.keys(checks)"
            :key="network"
            class="bg-base-200 rounded p-2 flex space-x-2"
          >
            <app-icon :data="icons.networkWired" class="text-primary" />
            <span class="text-primary">{{ networkMap[network] }}</span>
            <span>{{ `${addPunctuation(checks[network])} $OCEAN` }}</span>
          </div>
        </div>
      </FormControl>

      <div class="flex self-center">
        <div class="bg-base-200 rounded p-4">
          <!-- loading indicator -->
          <div
            v-if="loading"
            class="flex flex-col place-items-center space-y-4"
          >
            <AppLoadingSpinner class="w-12 h-12 text-primary" />
            <span v-if="checkingNetwork">
              {{
                $t('creator.project.wallet.network.check', {
                  network: networkMap[checkingNetwork],
                })
              }}
            </span>
          </div>

          <!-- verified balance -->
          <div
            v-else-if="verified"
            class="flex flex-col place-items-center space-y-4 text-success"
          >
            <app-icon :data="icons.check" :size="64" />
            <span>
              {{ $t('creator.project.wallet.network.sufficient') }}
            </span>
          </div>

          <!-- insufficient balance -->
          <div
            v-else
            class="flex flex-col place-items-center space-y-4 text-error"
          >
            <app-icon :data="icons.times" :size="64" />
            <span>
              {{ $t('creator.project.wallet.network.insufficient') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </FormControl>
</template>

<script>
import check from '@iconify/icons-la/check';
import networkWired from '@iconify/icons-la/network-wired';
import times from '@iconify/icons-la/times';
import FormControl from '@/components/app/manage/creator/FormControl';
import WalletBalance from '@/mixins/WalletBalance';
import ConnectedWallet from '@/mixins/ConnectedWallet';
import WalletAddress from '@/components/common/WalletAddress';
import AppLoadingSpinner from '@/components/common/AppLoadingSpinner';
import NetworkTypeEnum from '@/enums/NetworkType.enum';
import NetworkTypeMapper from '@/mapper/NetworkType.mapper';
import AppIcon from '@/components/common/AppIcon';
import ProjectConstants from '@/mixins/ProjectConstants';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'WalletStep',

  components: { AppIcon, AppLoadingSpinner, WalletAddress, FormControl },

  mixins: [ProjectConstants, ConnectedWallet, WalletBalance, Numbers],

  props: {
    checks: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        check,
        times,
        networkWired,
      },
      networkMap: NetworkTypeMapper,
      checkingNetwork: null,
    };
  },

  computed: {
    loading() {
      return Object.keys(this.checks).length === 0;
    },

    verified() {
      return Object.values(this.checks).some(
        (balance) => balance >= this.PROJECT_REQUIRED_OCEAN,
      );
    },
  },

  mounted() {
    if (!this.verified) {
      this.verifyBalance();
    }
  },

  methods: {
    async verifyBalance() {
      this.$emit('change', {}); // Reset
      const checks = {};

      for (const network of Object.values(NetworkTypeEnum)) {
        this.checkingNetwork = network;

        const balance = await this.getOceanBalance(network, this.wallet);
        checks[network] = balance;

        if (balance >= this.PROJECT_REQUIRED_OCEAN) {
          break;
        }
      }

      this.$emit('change', checks);
    },
  },
};
</script>
