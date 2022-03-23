import { getAccount } from '@/api';

/* Store for managing the connected projects and proposals of a connected wallet */
/* TODO: drop-in replacement for account store */

export const state = () => ({
  loading: false,
  wallet: null,
  projects: [],
});

export const mutations = {
  reset(state) {
    state.wallet = null;
    state.projects = [];
  },
  loading(state, loading) {
    state.loading = loading;
  },
  wallet(state, wallet) {
    state.wallet = wallet;
  },
  projects(state, projects) {
    state.projects = projects;
  },
};

export const actions = {
  async softLoad({ state, dispatch }) {
    if (!state.wallet) {
      // Only load if account is not loaded
      await dispatch('load');
    }
  },
  async load({ commit, dispatch }) {
    commit('alert/clear', null, { root: true });
    commit('loading', true);

    try {
      const response = await getAccount(this.$axios);
      commit('wallet', response.data.wallet);
      commit('projects', response.data.projects);
    } catch (error) {
      if (error.response?.status === 401) {
        // Auth timeout
        await dispatch('auth/timeout', null, { roo: true });
        throw new Error('401 - Unauthorized');
      } else {
        // Generic error
        dispatch('alert/error', 'general.error.retry', { root: true });
        throw new Error(error);
      }
    } finally {
      commit('loading', false);
    }
  },
};
