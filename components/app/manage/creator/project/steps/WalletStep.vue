<template>
  <FormControl label="Verify your wallet balance">
    <div class="space-y-4 flex flex-col">
      <span class="px-1">
        You need at least 500+ $OCEAN on a specific network to create an project
        on Ocean Pearl. Don't worry, this service is free of charge.
      </span>

      <div class="bg-base-200 rounded p-4">
        <WalletAddress :address="wallet" />
      </div>

      <!-- checked networks -->
      <FormControl label="Checked networks">
        <span v-if="Object.keys(checks).length === 0" class="italic">
          No network has been checked yet.
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
              {{ `Checking ${networkMap[checkingNetwork]} Network...` }}
            </span>
          </div>

          <!-- verified balance -->
          <div
            v-else-if="verified"
            class="flex flex-col place-items-center space-y-4 text-success"
          >
            <app-icon :data="icons.check" :size="64" />
            <span>Sufficient Funds</span>
          </div>

          <!-- insufficient balance -->
          <div
            v-else
            class="flex flex-col place-items-center space-y-4 text-error"
          >
            <app-icon :data="icons.times" :size="64" />
            <span>Insufficient Funds</span>
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

  data() {
    return {
      icons: {
        check,
        times,
        networkWired,
      },
      networkMap: NetworkTypeMapper,
      checks: {},
      loading: true,
      checkingNetwork: null,
      verified: false,
    };
  },

  mounted() {
    this.verifyBalance();
  },

  methods: {
    async verifyBalance() {
      this.loading = true;
      this.checks = {};
      this.verified = false;

      for (const network of Object.values(NetworkTypeEnum)) {
        this.checkingNetwork = network;

        const balance = await this.getOceanBalance(
          network,
          '0xb4e1cdae1d357a913212f884c6890cf482ebc66c',
        );

        this.checks[network] = balance;

        if (balance >= this.PROJECT_REQUIRED_OCEAN) {
          this.verified = true;
          break;
        }
      }

      this.loading = false;
    },
  },
};
</script>
