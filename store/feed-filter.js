import { getPosts } from '@/api';

const initialState = {
  error: false,
  pending: true,
  posts: null,
  pagination: null,
  filter: {
    page: 1,
    limit: 5,
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

  posts(state, payload) {
    state.posts = payload;
  },

  pagination(state, payload) {
    state.pagination = payload;
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

  async fetchAll({ commit, state }) {
    // cancel if no next page
    if (state.pagination?.hasNextPage === false) return;

    // reset
    commit('error', null);

    // prepare query object
    const query = { ...state.filter };

    try {
      const postsResponse = await getPosts(this.$axios, query);

      if (postsResponse.status === 204) {
        commit('error', 'general.error.retry');
        commit('posts', []);
      } else {
        commit('pending', false);
        commit('posts', postsResponse.data.docs);
        commit('pagination', postsResponse.data.pagination);
      }
    } catch {
      commit('pending', false);
      commit('error', 'general.error.retry');
      commit('posts', []);
    }
  },
};
