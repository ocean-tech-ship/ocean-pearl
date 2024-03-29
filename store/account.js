import { getAccount, updateProject } from '@/api';

/* Store for managing the associated projects of a connected wallet */

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
        await dispatch('auth/timeout', null, { root: true });
      } else {
        // Generic error
        dispatch(
          'alert/error',
          { content: this.$i18n.t('general.error.retry'), autoFade: true },
          {
            root: true,
          },
        );
        throw new Error(error);
      }
    } finally {
      commit('loading', false);
    }
  },

  async update({ commit, dispatch }, payload) {
    commit('alert/clear', null, { root: true });
    commit('loading', true);

    try {
      const response = await updateProject(this.$axios, payload);
      commit('projects', response.data);
      dispatch(
        'alert/success',
        {
          content: this.$i18n.t('manage.project.changed'),
          autoFade: true,
        },
        { root: true },
      );
    } catch (error) {
      if (error.response?.status === 401) {
        // Auth timeout
        await dispatch('auth/timeout', null, { root: true });
      } else {
        // Generic error
        dispatch(
          'alert/error',
          { content: this.$i18n.t('general.error.retry'), autoFade: true },
          {
            root: true,
          },
        );
      }
    } finally {
      commit('loading', false);
    }
  },
};
