<template>
  <div class="grid gap-4 lg:grid-cols-2 xl:gap-8">
    <!-- Funding Round -->
    <div class="shadow bg-base-200 rounded p-4">
      <div class="flex items-center">
        <app-icon
          class="mr-2 text-primary"
          :size="20"
          :data="icons.projectDiagram"
        />

        <p class="small-text text-primary">
          {{ $t('project.proposal.round.title') }}
        </p>
      </div>

      <p class="small-text">
        {{
          $t('project.proposal.round.numbered', {
            round: newestProposal.fundingRound.round,
          })
        }}
      </p>
    </div>

    <!-- Requested Funding -->
    <div class="shadow bg-base-200 rounded p-4">
      <div class="flex items-center">
        <app-icon class="mr-2 text-primary" :size="20" :data="icons.coins" />

        <p class="small-text text-primary">
          {{ $t('project.proposal.requested') }}
        </p>
      </div>

      <p
        v-if="
          newestProposal.requestedFunding.usd &&
          newestProposal.requestedFunding.usd > 0
        "
        class="small-text"
      >
        {{
          $t('general.usd', {
            usd: addPunctuation(newestProposal.requestedFunding.usd),
          })
        }}
      </p>

      <p v-else class="small-text">
        {{
          $t('general.ocean', {
            ocean: addPunctuation(newestProposal.requestedFunding.ocean),
          })
        }}
      </p>
    </div>

    <!-- Project Wallet Address -->
    <div class="shadow bg-base-200 rounded p-4 lg:col-span-2">
      <p class="small-text text-primary">
        {{ $t('project.proposal.wallet.title') }}
      </p>

      <template v-for="(address, index) in project.associatedAddresses">
        <wallet-address
          v-if="expandWalletAddresses ? true : index < 1"
          :key="address"
          :address="address"
        />
      </template>

      <!-- control action -->
      <div
        v-if="
          project.associatedAddresses && project.associatedAddresses.length > 1
        "
        class="flex justify-center"
      >
        <button
          class="flex items-center"
          type="button"
          @click="expandWalletAddresses = !expandWalletAddresses"
        >
          <span v-if="expandWalletAddresses" class="text-primary">
            {{ $t('project.proposal.wallet.less') }}
          </span>

          <span v-else class="text-primary">
            {{ $t('project.proposal.wallet.more') }}
          </span>

          <app-icon
            class="text-primary"
            :size="32"
            :rotate="expandWalletAddresses ? 180 : 0"
            :data="icons.menuDown"
          />
        </button>
      </div>
    </div>

    <!-- vote action -->
    <div class="lg:col-span-2">
      <app-button
        as="link"
        :to="voteUrl"
        :data-analytics="dataAnalytics"
        class="btn-gradient-primary-variant border-0 w-full"
        type="label"
        :icon="icons.vote"
      >
        {{ $t('project.proposal.vote') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import projectDiagram from '@iconify/icons-la/project-diagram';
import coins from '@iconify/icons-la/coins';
import vote from '@iconify/icons-mdi/vote-outline';
import menuDown from '@iconify/icons-mdi/menu-down';
import Numbers from '@/mixins/Numbers';
import AppLink from '@/components/common/AppLink.vue';
import WalletAddress from '@/components/common/WalletAddress.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'ProjectSingleDaoProposalMetrics',

  components: {
    AppButton,
    AppIcon,
    WalletAddress,
    AppLink,
  },

  mixins: [Numbers],

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      icons: {
        projectDiagram,
        coins,
        vote,
        menuDown,
      },
      expandWalletAddresses: false,
    };
  },

  computed: {
    dataAnalytics() {
      return `"Vote: Click", {"props":{"url":"${this.voteUrl}","project":"${this.$props.project?.title}","category":"${this.$props.project?.category}"}}`;
    },

    newestProposal() {
      const proposals = this.$props.project.daoProposals;
      return proposals && proposals.length > 0
        ? proposals[proposals.length - 1]
        : null;
    },

    voteUrl() {
      const stdUrl = 'https://vote.oceanprotocol.com/#/officialoceandao.eth';
      const proposal = this.newestProposal;
      return proposal && proposal.ipfsHash
        ? `${stdUrl}/proposal/${proposal.ipfsHash}`
        : stdUrl;
    },
  },
};
</script>

<style scoped></style>
