<template>
  <landing-section-container>
    <h4>
      {{ $t('project.proposal.title.dao') }}
      <span class="text-primary">
        {{ $t('project.proposal.title.proposal') }}
      </span>
    </h4>

    <div class="grid lg:grid-cols-2 gap-4 xl:gap-32 mt-6">
      <div class="grid lg:grid-cols-2 gap-4 xl:gap-8">
        <!-- Funding Round -->
        <div class="shadow rounded p-2">
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

          <p class="small-text">{{ project.round }}</p>
        </div>

        <!-- Requested Funding -->
        <div class="shadow rounded p-2">
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
            {{ project.requested }}
          </p>
        </div>

        <!-- Proposal Wallet Address -->
        <div class="shadow rounded p-2 lg:col-span-2">
          <p class="small-text text-primary">
            {{ $t('project.proposal.wallet') }}
          </p>

          <p class="small-text break-all">{{ project.walletAddress }}</p>
        </div>

        <!-- Action (lg only) -->
        <div class="hidden lg:block lg:col-span-2">
          <app-button-style
            :icon="require('@/assets/images/detail/fund-here.svg')"
            :text="$t('project.proposal.vote')"
          />
        </div>
      </div>

      <div class="grid lg:flex lg:justify-end">
        <!-- Total Fundings -->
        <div>
          <div class="shadow rounded p-2 overflow-y-auto lg:max-h-52">
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
              v-for="proposal in project.daoProposals"
              :key="proposal.fundingRound"
              class="small-text pr-8"
            >
              {{ proposal.fundingRequested }}

              ({{
                $t('project.proposal.round.numbered', {
                  round: proposal.fundingRound,
                })
              }})
            </p>
          </div>
        </div>
      </div>

      <div class="lg:hidden">
        <app-button-style
          :icon="require('@/assets/images/detail/fund-here.svg')"
          :text="$t('project.proposal.vote')"
        />
      </div>
    </div>
  </landing-section-container>
</template>

<script>
import AppButtonStyle from '@/components/common/AppButtonStyle'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'

export default {
  name: 'ProjectSingleDaoProposal',

  components: {
    AppButtonStyle,
    LandingSectionContainer,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        round: '/',
        requested: '/',
        walletAddress: '/',
        daoProposals: [],
      }),
    },
  },
}
</script>

<style scoped></style>
