<template>
    <div>
        <landing-section-container>
            <h2>
                {{ $t('dao-projects.header.title') }}
                <span class="text-primary">{{$t('dao-projects.header.titleHighlight')}}</span>
            </h2>
            <p>{{ $t('dao-projects.header.text') }}</p>
        </landing-section-container>

        <landing-section-container v-if="$fetchState.error">
            <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
            <p class="small-text">{{ $t(error) }}</p>
        </landing-section-container>

        <landing-section-container v-else-if="$fetchState.pending" class="h-screen">
            {{ $t('general.fetchingLoading') }}
        </landing-section-container>

        <div v-else>
            <round-metrics :metrics="metrics" />
            <dao-proposals-list :daoProposals="daoProposals" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics.vue';
import DaoProposalsList from '@/components/app/dao-proposals/DaoProposalsList.vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import { getDaoRoundMetrics, getDaoProposals } from '@/api';

export default Vue.extend({
    name: 'DaoProjectOverview',

    components: {
        RoundMetrics,
        DaoProposalsList,
        LandingSectionContainer
    },

    data() {
        return {
            error: null,
            daoProposals: null,
            metrics: {
                fundingRound: '',
                totalDaoProposals: '',
                endDate: Date.now(),
                totalRequestedFunding: '',
                totalVotes: '',
            },
        }
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

            this.error = null,
            this.metrics =
                process.env.API_ENV === 'mirage'
                    ? metricsResponse.data.metrics
                    : metricsResponse.data;
            this.daoProposals =
                process.env.API_ENV === 'mirage'
                    ? daoProposalResponse.data.daoproposals
                    : daoProposalResponse.data;
        } catch (error) {
            this.error = 'general.error.retry';
            this.daoProposals = [];
        }
    },
});
</script>

<style></style>
