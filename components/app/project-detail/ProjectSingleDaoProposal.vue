<template>
  <div>
    <h4 v-if="!!coverImage">
      {{ $t('project.proposal.title.dao') }}
      <span class="text-primary">
        {{ $t('project.proposal.title.proposal') }}
      </span>
    </h4>

    <div
      class="grid gap-4"
      :class="coverImage ? 'my-6 lg:grid-cols-2 xl:gap-32' : 'mb-6 xl:gap-8'"
    >
      <div class="grid lg:grid-cols-2 gap-4 xl:gap-8">
        <!-- Funding Round -->
        <div class="shadow rounded p-4">
          <div class="flex items-center">
            <img
              class="h-16px w-16px mr-2"
              src="@/assets/images/detail/fund-round.svg"
              :alt="$t('project.proposal.round') + ' ' + $t('general.icon')"
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
              :alt="$t('project.proposal.requested') + ' ' + $t('general.icon')"
            />

            <p class="small-text text-primary">
              {{ $t('project.proposal.requested') }}
            </p>
          </div>

          <p class="small-text">
            {{
              $t('general.ocean', { ocean: newestProposal.requestedGrantToken })
            }}
          </p>
        </div>

        <!-- Proposal Wallet Address -->
        <div class="shadow rounded p-4 lg:col-span-2">
          <p class="small-text text-primary">
            {{ $t('project.wallet') }}
          </p>

          <p class="small-text break-all">{{ project.walletAddress }}</p>
        </div>

        <!-- Action (lg only) -->
        <div class="hidden lg:block lg:col-span-2">
          <app-link to="https://vote.oceanprotocol.com/#/officialoceandao.eth">
            <app-button-style
              class="w-full text-center"
              :icon="require('@/assets/images/detail/fund-here.svg')"
              :text="$t('project.proposal.vote')"
            />
          </app-link>
        </div>
      </div>

      <div :class="coverImage ? 'grid lg:flex lg:justify-end' : ''">
        <!-- Total Fundings -->
        <div>
          <div class="shadow rounded p-4 overflow-y-auto lg:max-h-52">
            <div class="flex items-center">
              <img
                class="h-16px w-16px mr-2"
                src="@/assets/images/detail/fund-finish.svg"
                :alt="$t('project.proposal.total') + ' ' + $t('general.icon')"
              />

              <p class="small-text text-primary">
                {{ $t('project.proposal.total') }}
              </p>
            </div>

            <p
              v-if="!grantedProposals || grantedProposals.length === 0"
              class="small-text pr-8"
            >
              {{ $t('project.proposal.empty') }}
            </p>

            <p
              v-for="proposal in grantedProposals"
              :key="proposal.fundingRound.round"
              class="small-text pr-8"
            >
              {{ $t('general.ocean', { ocean: proposal.grantedToken }) }}

              ({{
                $t('project.proposal.round.numbered', {
                  round: proposal.fundingRound.round,
                })
              }})
            </p>
          </div>
        </div>
      </div>

      <div class="lg:hidden">
        <app-link to="https://vote.oceanprotocol.com/#/officialoceandao.eth">
          <app-button-style
            class="w-full text-center"
            :icon="require('@/assets/images/detail/fund-here.svg')"
            :text="$t('project.proposal.vote')"
          />
        </app-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppButtonStyle from '@/components/common/AppButtonStyle';
import AppLink from '@/components/common/AppLink.vue';
import DaoProposalStatusEnum from '@/components/enums/DaoProposalStatus.enum';

const EMPTY_PROPOSAL = {
  fundingRound: '/',
  requestedGrantToken: '/',
  walletAddress: '/',
};

export default {
  name: 'ProjectSingleDaoProposal',

  components: {
    AppButtonStyle,
    AppLink,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        daoProposals: [],
      }),
    },
  },

  computed: {
    coverImage() {
      return this.$props.project.pictures.length > 0
        ? this.$props.project.pictures[0]
        : null; /* require('@/assets/images/detail/pearl-background.png') */
    },

    grantedProposals() {
      const proposals = this.$props.project.daoProposals
        ? this.$props.project.daoProposals
        : [];

      return proposals.filter(
        (proposal) => proposal.status === DaoProposalStatusEnum.Funded,
      );
    },

    newestProposal() {
      const proposals = this.$props.project.daoProposals;
      return !proposals || proposals.length === 0
        ? EMPTY_PROPOSAL
        : proposals[proposals.length - 1];
    },
  },
};
</script>
