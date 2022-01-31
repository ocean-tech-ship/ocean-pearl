import { getLeaderboard } from '@/api';

const initialState = {
  error: false,
  pending: true,
  leaderboard: {},
  filter: {
    round: 0,
  },
};

export const state = () => initialState;

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

  filter(state, payload) {
    const newFilter = { ...state.filter, ...payload };
    state.filter = newFilter;
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

  async fetchLeaderboard({ commit, state }) {
    // reset
    commit('error', null);

    // prepare query object
    const query = { ...state.filter };
    if (query.round === 0) delete query.round;

    try {
      const leaderBoardResponse = await getLeaderboard(this.$axios, query);

      if (leaderBoardResponse.status === 204) {
        commit('error', 'general.error.retry');
        commit('leaderboard', {});
      } else {
        commit('leaderboard', leaderBoardResponse);
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
};
