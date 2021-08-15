<template>
    <landing-section-container>
        <div
            class="
                relative
                my-8
                h-40
                md:h-32
                lg:h-auto
                lg:grid
                lg:grid-flow-col
                lg:grid-cols-3
                lg:gap-4
                lg:items-center
            "
        >
            <DaoProjectsDropdowns
                class="
                    flex flex-col
                    items-start
                    md:items-center
                    md:h-16
                    md:flex-row
                    md:flex-wrap
                    md:items-center
                    lg:h-auto
                "
                :rounds="rounds"
                @selected-items="setFilter"
            />
            <DaoProjectsSearchbar
                class="absolute bottom-0 z-10 flex w-full lg:relative lg:w-auto"
                @search-projects="setFilter"
            />
            <DaoProjectsBadges
                class="
                    absolute
                    top-4
                    right-0
                    flex
                    justify-end
                    md:top-0
                    lg:w-auto lg:relative
                "
            />
        </div>
    </landing-section-container>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer.vue';
import DaoProjectsDropdowns from './DaoProjectsDropdowns';
import DaoProjectsSearchbar from './DaoProjectsSearchbar';
import DaoProjectsBadges from './DaoProjectsBadges';
export default {
    name: 'DaoProjectsFilter',

    components: {
        LandingSectionContainer,
        DaoProjectsSearchbar,
        DaoProjectsBadges,
        DaoProjectsDropdowns,
    },
    props: {
        rounds: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            filter: {
                round: 0,
                category: 'all',
                search: '',
            },
        };
    },
    watch: {
        filter: {
            deep: true,
            handler: function emit() {
                // restructure filter items for backend compatibility
                const filter = this.filter;
                if (filter.round === 0) delete filter.round;
                if (filter.category === 'all') delete filter.category;
                if (filter.search === '') delete filter.search;

                this.$emit('filter', filter);
            },
        },
    },
    methods: {
        setFilter(payload) {
            const { round, category, searchValue } = payload;

            // set new filter
            this.filter = {
                round: round || round === 0 ? round : this.filter.round,
                category:
                    category || category === 0
                        ? category
                        : this.filter.category,
                search:
                    searchValue || searchValue === ''
                        ? searchValue
                        : this.filter.search,
            };
        },
    },
};
</script>

<style scoped></style>
