import { getLeaderboard } from '@/api';

const initialState = {
  error: false,
  pending: true,
  leaderboard: {
    fundedProposals: [],
    partiallyFundedProposals: [],
    notFundedProposals: [],
  },
  currentRound: 0,
  filter: {
    round: 0,
    pools: [],
  },
};

export const state = () => ({ ...initialState });

export const mutations = {
  state(state, payload) {
    Object.assign(state, payload);
  },

  error(state, payload) {
    state.error = payload;
  },

  pending(state, payload) {
    state.pending = payload;
  },

  timer(state, payload) {
    state.timer = payload;
  },

  leaderboard(state, payload) {
    state.leaderboard = payload;
  },

  currentRound(state, payload) {
    state.currentRound = payload;
  },

  filter(state, payload) {
    state.filter = { ...state.filter, ...payload };
  },
};

export const actions = {
  resetState({ commit }) {
    commit('state', initialState);
  },

  setPending({ commit, state }, payload) {
    if (state.pending !== payload) commit('pending', payload);
  },

  setFilter({ commit }, payload) {
    commit('filter', payload);
  },

  async fetchAll({ commit, state }) {
    // reset
    commit('error', null);

    // prepare query object
    const query = { ...state.filter };
    if (query.round === 0) delete query.round;
    delete query.grantPools; // Backend does not need to take care about filtered pools

    try {
      const leaderBoardResponse = await getLeaderboard(this.$axios, query);

      if (leaderBoardResponse.status === 204) {
        commit('error', 'general.error.retry');
        commit('leaderboard', {});
      } else {
        commit('leaderboard', leaderBoardResponse.leaderboard);
        commit('currentRound', leaderBoardResponse.currentRound);
        commit('pending', false);

        // return query for url mutations
        return query;
      }
    } catch {
      commit('pending', false);
      commit('error', 'general.error.retry');
      commit('leaderboard', {});
    }
  },

  filterPool({ commit, state }, payload) {
    const poolFilter = [...state.filter.pools];
    const index = poolFilter.findIndex((pool) => pool === payload);

    if (index > -1) {
      poolFilter.splice(index, 1);
    } else {
      poolFilter.push(payload);
    }

    commit('filter', { pools: poolFilter });
  },
};
