import { getProjects } from '@/api';

export const state = () => ({
  error: false,
  pending: true,
  projects: null,
  searchUsed: false,
  filter: {
    page: 0,
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

  projects(state, payload) {
    state.projects = payload;
  },

  searchUsed(state, payload) {
    state.searchUsed = payload;
  },

  filter(state, payload) {
    state.filter = payload.filter;
  },
};

export const actions = {
  async fetchProjects({ commit, state }) {
    // reset
    commit('error', null);
    commit('pending', true);

    // check if search was used
    state.queryParams.search
      ? commit('searchUsed', true)
      : commit('searchUsed', false);

    try {
      const projectsResponse = await getProjects(this.$axios);

      if (projectsResponse.status === 204) {
        commit('error', this.$i18n.t('general.error.unknown'));
        commit('projects', []);
      }

      commit('pending', false);
      commit(
        'projects',
        process.env.NODE_ENV === 'mirage'
          ? projectsResponse.data.projects
          : projectsResponse.data,
      );
    } catch (error) {
      commit('pending', false);
      commit('error', this.$i18n.t('general.error.retry'));
      commit('projects', []);
    }
  },
};
