import { getDaoProposals, getDaoRoundMetrics } from '@/api';

export const state = () => ({
  error: false,
  pending: true,
  daoProposals: null,
  fundingRound: 0,
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
  setPending({ commit, state }, payload) {
    if (state.pending !== payload) commit('pending', payload);
  },

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
        commit('metrics', []);
      } else {
        commit('metrics', metricsResponse.data);
      }
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
        commit('daoProposals', {});
      } else {
        commit('pending', false);
        commit('daoProposals', daoProposalResponse.data.docs);
        commit('fundingRound', daoProposalResponse.data.maxRounds);
        commit('pagination', daoProposalResponse.data.pagination);

        // return query for url mutations
        if (query.page === 1) delete query.page;
        delete query.limit;
        return query;
      }
    } catch {
      commit('pending', false);
      commit('error', 'general.error.retry');
      commit('daoProposals', []);
    }
  },

  async fetchMetricsAndProposals({ commit, state }) {
    // reset
    commit('error', null);

    // prepare query object
    const query = { ...state.filter };
    if (query.category === 'all') delete query.category;
    if (query.search === '') delete query.search;
    if (query.round === 0) delete query.round;

    try {
      const [metricsResponse, daoProposalResponse] = await Promise.all([
        getDaoRoundMetrics(this.$axios, { round: query.round }),
        getDaoProposals(this.$axios, query),
      ]);

      if (
        metricsResponse.status === 204 ||
        daoProposalResponse.status === 204
      ) {
        commit('error', 'general.error.unknown');
        commit('metrics', []);
        commit('daoProposals', {});
      } else {
        commit('metrics', metricsResponse.data);
        commit('daoProposals', daoProposalResponse.data.docs);
        commit('fundingRound', daoProposalResponse.data.maxRounds);
        commit('pagination', daoProposalResponse.data.pagination);
        commit('pending', false);

        // return query for url mutations
        if (query.page === 1) delete query.page;
        delete query.limit;
        return query;
      }
    } catch {
      commit('pending', false);
      commit('error', 'general.error.retry');
      commit('metrics', []);
      commit('daoProposals', []);
    }
  },
};
