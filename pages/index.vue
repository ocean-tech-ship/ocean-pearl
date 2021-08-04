<template>
    <div>
        <landing-hero-section />
        <landing-pearl-dao :metrics="metrics" />
        <landing-dao-proposals :dao-proposals="daoProposals" />
        <landing-latest-projects :projects="latestProjects" />
    </div>
</template>

<script>
import { getLandingData } from '@/api';
import Vue from 'vue';
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue';
import LandingDaoProposals from '@/components/app/landing/LandingDaoProposals.vue';
import LandingLatestProjects from '@/components/app/landing/LandingLatestProjects.vue';
import LandingPearlDao from '~/components/app/landing/LandingPearlDao.vue';

export default Vue.extend({
    components: {
        LandingHeroSection,
        LandingDaoProposals,
        LandingLatestProjects,
        LandingPearlDao,
    },

    data() {
        return {
            error: '',
            featuredProjects: null,
            latestProjects: null,
            daoFeaturedProjects: null,
            daoProposals: null,
            metrics: {
                fundingRound: '',
                totalDaoProposals: '',
                endDate: Date.now(),
                totalRequestedFunding: '',
                totalVotes: '',
            },
        };
    },

    async fetch() {
        try {
            const indexResponse = await getLandingData(this.$axios);

            if (
                indexResponse.status === 204
            ) {
                this.error = 'general.error.unknown';
                this.featuredProjects = [];
                this.latestProjects = [];
                this.daoFeaturedProjects = [];
                this.daoProposals = [];
            }

            const data = indexResponse.data;

            this.error = null,
            this.featuredProjects = data.featuredProjects;
            this.latestProjects = data.latestProjects;
            this.daoFeaturedProjects = data.daoFeaturedProjects;
            this.daoProposals = data.daoProposals;
            this.metrics = data.metrics;
        } catch (error) {
                this.error = 'general.error.retry';
                this.featuredProjects = [];
                this.latestProjects = [];
                this.daoFeaturedProjects = [];
                this.daoProposals = [];
        };
    },

    head() {
        return {
            meta: [
                {
                    hid: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    hid: 'twitter:site',
                    name: 'twitter:site',
                    content: '@oceanpearlio',
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: 'https://oceanpearl.io',
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Ocean Pearl',
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content:
                        'We are on track with the newest projects powered by the Ocean Protocol.',
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://oceanpearl.io/pearl-background.jpg',
                },
            ],
        };
    },
});
</script>
