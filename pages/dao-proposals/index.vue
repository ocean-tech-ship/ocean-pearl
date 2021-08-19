<template>
    <div>
        <landing-section-container>
            <h2>
                {{ $t('dao-projects.header.title') }}
                <span class="text-primary">{{
                    $t('dao-projects.header.titleHighlight')
                }}</span>
            </h2>
            <p>{{ $t('dao-projects.header.text') }}</p>
        </landing-section-container>

        <landing-section-container
            v-if="$fetchState.error || error"
            class="h-screen"
        >
            <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
            <p class="small-text">{{ $t(error) }}</p>
        </landing-section-container>

        <landing-section-container
            v-else-if="$fetchState.pending"
            class="h-screen"
        >
            {{ $t('general.fetchingLoading') }}
        </landing-section-container>

        <div v-else>
            <round-metrics :metrics="metrics" />
            <dao-projects-filter
                :rounds="maxRounds"
                @filter="filterDaoProposals"
            />
            <dao-proposals-list :dao-proposals="daoProposals" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics.vue';
import DaoProposalsList from '@/components/app/dao-proposals/DaoProposalsList.vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import { getDaoRoundMetrics, getDaoProposals } from '@/api';
import DaoProjectsFilter from '~/components/app/dao-proposals/DaoProjectsFilter.vue';

export default Vue.extend({
    name: 'DaoProjectOverview',

    components: {
        RoundMetrics,
        DaoProposalsList,
        LandingSectionContainer,
        DaoProjectsFilter,
    },

    data() {
        return {
            error: null,
            daoProposals: null,
            maxRounds: null,
            metrics: {
                fundingRound: '',
                totalDaoProposals: '',
                currentRound: {
                    startDate: new Date(),
                    submissionEndDate: new Date(),
                    votingStartDate: new Date(),
                    endDate: new Date(),
                },
                nextRound: {
                    startDate: new Date(),
                    submissionEndDate: new Date(),
                    votingStartDate: new Date(),
                    endDate: new Date(),
                },
                totalRequestedFundingOcean: '',
                totalVotes: '',
            },
        };
    },

    async fetch() {
        try {
            const [metricsResponse, daoProposalResponse] = await Promise.all([
                getDaoRoundMetrics(this.$axios),
                getDaoProposals(this.$axios),
            ]);

            if (
                metricsResponse.status === 204 ||
                daoProposalResponse.status === 204
            ) {
                this.error = 'general.error.unknown';
                this.daoProposals = [];
            }

            (this.error = null),
                (this.metrics =
                    process.env.NODE_ENV === 'mirage'
                        ? metricsResponse.data.metrics
                        : metricsResponse.data);
            this.daoProposals =
                process.env.NODE_ENV === 'mirage'
                    ? daoProposalResponse.data.daoproposals
                    : daoProposalResponse.data.daoProposals;

            // set maxRounds based on daoProposalResponse or metricsResponse fundingRound alternatively
            this.maxRounds = daoProposalResponse.data.maxRounds
                ? daoProposalResponse.data.maxRounds
                : metricsResponse.data.fundingRound;
        } catch (error) {
            this.error = 'general.error.retry';
            this.daoProposals = [];
        }
    },

    methods: {
        async filterDaoProposals(payload) {
            try {
                const daoProposalResponse = await getDaoProposals(
                    this.$axios,
                    payload,
                );

                if (daoProposalResponse.status === 204) {
                    this.error = 'general.error.unknown';
                    this.daoProposals = [];
                }

                this.daoProposals =
                    process.env.NODE_ENV === 'mirage'
                        ? daoProposalResponse.data.daoproposals
                        : daoProposalResponse.data.daoProposals;
            } catch (error) {
                this.error = 'general.error.retry';
                this.daoProposals = [];
            }
        },
    },
});
</script>

<style></style>
