<template>
  <LandingSectionContainer>
    <h2>
      {{ $t('dao-projects.header.title') }}
      <span class="text-primary">{{
        $t('dao-projects.header.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('dao-projects.header.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-10"
    >
      <div v-for="card in daoInfoCards" :key="card.title">
        <div class="shadow rounded p-4 pb-4">
          <div class="flex align-center">
            <div class="mr-3">
              <img
                class="inline-block mt-3 h-6 w-6"
                :src="card.imageURL"
                :alt="card.title"
              />
            </div>
            <div>
              <p class="text-primary small-text line-clamp-1">
                {{ card.title }}
              </p>
              <p class="small-text">{{ card.daoInfo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="text-primary my-16" />
    <div
      class="relative my-8 h-40 sm:h-32 lg:h-auto lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-4 lg:items-center"
    >
      <DaoProjectsDropdowns
        class="flex flex-col items-start sm:items-center sm:h-16 sm:flex-row sm:flex-wrap sm:items-center lg:h-auto"
        @selected-items="setFilter"
      />
      <DaoProjectsSearchbar
        class="absolute bottom-0 z-10 flex w-full lg:relative lg:w-auto"
        @search-projects="setFilter"
      />
      <DaoProjectsBadges
        class="absolute top-2 right-0 flex justify-end sm:top-0 lg:w-auto lg:relative"
      />
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer'
import DaoProjectsDropdowns from './DaoProjectsDropdowns'
import DaoProjectsSearchbar from './DaoProjectsSearchbar'
import DaoProjectsBadges from './DaoProjectsBadges'
export default {
  name: 'DaoProjectsHeader',

  components: {
    LandingSectionContainer,
    DaoProjectsSearchbar,
    DaoProjectsBadges,
    DaoProjectsDropdowns,
  },
  props: {
    metrics: {
      type: Object,
      required: true,
      default: () => ({
        metrics: {
          fundingRound: '',
          totalDaoProposals: '',
          endDate: Date.now(),
          totalRequestedFunding: '',
          totalVotes: '',
        },
      }),
    },
  },

  data() {
    return {
      daoInfoCards: [
        {
          title: this.$i18n.t('daoRoundData.fundingRound'),
          daoInfo: this.$t('project.proposal.round.numbered', {
            round: this.metrics.fundingRound,
          }),
          imageURL: require('@/assets/images/icons/fund-round.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.amountProposals'),
          daoInfo: `${this.metrics.totalDaoProposals} proposals`,
          imageURL: require('@/assets/images/icons/amount.svg'),
        },
        {
          title: this.$i18n.t(
            this.$dateFns.isPast(new Date(this.metrics.endDate))
              ? 'daoRoundData.countdown.after'
              : 'daoRoundData.countdown.before'
          ),
          daoInfo: this.$dateFns.formatDistanceToNowStrict(
            new Date(this.metrics.endDate),
            { locale: this.$i18n.locale, addSuffix: true }
          ),
          imageURL: require('@/assets/images/icons/countdown.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.totalAmount'),
          daoInfo: `${this.$i18n.t('general.ocean', {
            ocean: this.metrics.totalRequestedFunding,
          })}`,
          imageURL: require('@/assets/images/icons/transaction.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.totalVotes'),
          daoInfo: `${this.$i18n.t('general.ocean', {
            ocean: this.metrics.totalVotes,
          })}`,
          imageURL: require('@/assets/images/icons/vote.svg'),
        },
      ],
      filter: {
        round: '',
        category: '',
        search: '',
      },
    }
  },
  watch: {
    filter: {
      deep: true,
      handler: function callFilter() {
        const { round, category, search } = this.filter
        const query = `MEGAFILTERROUTE?round=${round}&category=${category}${
          search && '&search=' + search
        }`

        console.log('API CALL: ', query)
      },
    },
  },
  methods: {
    setFilter(payload) {
      const { category, round, searchValue } = payload
      const filter = {
        round: round || '',
        category: category || '',
        search: searchValue || '',
      }

      this.filter = filter
    },
  },
}
</script>

<style scoped></style>
