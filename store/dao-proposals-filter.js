import { getDaoProposals, getDaoRoundMetrics } from '@/api';

export const state = () => ({
  error: false,
  pending: true,
  daoProposals: null,
  fundingRound: null,
  metrics: null,
  pagination: null,
  searchUsed: false,
  filter: {
    page: 1,
    limit: 12,
    round: 0,
    category: 'all',
    search: '',
  },
});

export const mutations = {
  error(state, payload) {
    state.error = payload;
  },

  pending(state, payload) {
    state.pending = payload;
  },

  daoProposals(state, payload) {
    state.daoProposals = payload;
  },

  fundingRound(state, payload) {
    state.fundingRound = payload;
  },

  metrics(state, payload) {
    state.metrics = payload;
  },

  pagination(state, payload) {
    state.pagination = payload;
  },

  searchUsed(state, payload) {
    state.searchUsed = payload;
  },

  filter(state, payload) {
    const newFilter = { ...state.filter, ...payload };
    state.filter = newFilter;
  },
};

export const actions = {
  setFilter({ commit }, payload) {
    commit('filter', payload);
  },

  async fetchDaoRoundMetrics({ commit, state }) {
    // reset
    commit('error', null);

    // prepare query object
    const query = { round: state.filter.round };
    if (query.round === 0) delete query.round;

    try {
      const metricsResponse = await getDaoRoundMetrics(this.$axios, query);

      if (metricsResponse.status === 204) {
        commit('error', 'general.error.unknown');
        commit('metrics', {});
      }

      commit('metrics', metricsResponse.data);
      commit('fundingRound', metricsResponse.data.fundingRound);
    } catch {
      commit('error', 'general.error.retry');
      commit('metrics', []);
    }
  },

  async fetchDaoProposals({ commit, state }) {
    // reset
    commit('error', null);

    // check if search was used
    state.filter.search
      ? commit('searchUsed', true)
      : commit('searchUsed', false);

    // prepare query object
    const query = { ...state.filter };
    if (query.category === 'all') delete query.category;
    if (query.search === '') delete query.search;
    if (query.round === 0) delete query.round;

    try {
      const daoProposalResponse = await getDaoProposals(this.$axios, query);

      if (daoProposalResponse.status === 204) {
        commit('error', 'general.error.unknown');
        commit('daoProposals', []);
      }

      commit('pending', false);
      commit('daoProposals', daoProposalResponse.data.docs);
      commit('pagination', daoProposalResponse.data.pagination);

      // return query for url mutations
      delete query.limit;
      return query;
    } catch (error) {
      commit('pending', false);
      commit('error', 'general.error.retry');
      commit('daoProposals', []);
    }
  },
};
