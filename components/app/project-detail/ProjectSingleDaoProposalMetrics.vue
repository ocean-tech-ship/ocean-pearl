<template>
  <div class="grid gap-4 lg:grid-cols-2 xl:gap-8">
    <!-- Funding Round -->
    <div class="shadow rounded p-4">
      <div class="flex items-center">
        <img
          class="h-16px w-16px mr-2"
          src="@/assets/images/detail/fund-round.svg"
          alt=""
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
    <div class="shadow rounded p-4">
      <div class="flex items-center">
        <img
          class="h-16px w-16px mr-2"
          src="@/assets/images/detail/fund-requested.svg"
          alt=""
        />

        <p class="small-text text-primary">
          {{ $t('project.proposal.requested') }}
        </p>
      </div>

      <p
        v-if="newestProposal.requestedGrantUsd && newestProposal.requestedGrantUsd > 0"
        class="small-text"
      >
        {{ $t('general.usd', { usd: addPunctuation(newestProposal.requestedGrantUsd) }) }}
      </p>

      <p v-else class="small-text">
        {{ $t('general.ocean', { ocean: addPunctuation(newestProposal.requestedGrantToken) }) }}
      </p>
    </div>

    <!-- Project Wallet Address -->
    <div class="shadow rounded p-4 lg:col-span-2">
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
        v-if="project.associatedAddresses && project.associatedAddresses.length > 1"
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

          <img :class="{ 'rotate-180': expandWalletAddresses }" class="ml-2" src="@/assets/images/icons/dropdown.svg" alt="" />
        </button>
      </div>
    </div>

    <!-- vote action -->
    <div class="lg:col-span-2">
      <app-link :to="voteUrl" :data-analytics="dataAnalytics">
        <app-button-style
          class="w-full text-center"
          :icon="require('@/assets/images/detail/fund-here.svg')"
          :text="$t('project.proposal.vote')"
        />
      </app-link>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/common/AppLink.vue';
import AppButtonStyle from '@/components/common/AppButtonStyle.vue';
import WalletAddress from '@/components/common/WalletAddress.vue';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'ProjectSingleDaoProposalMetrics',

  components: {
    WalletAddress,
    AppLink,
    AppButtonStyle,
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
