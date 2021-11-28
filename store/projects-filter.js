import { getProjects } from '@/api';

export const state = () => ({
  error: false,
  pending: true,
  projects: null,
  searchUsed: false,
  params: {
    page: 1,
  },
  route: `/projects?page=0&category=all&search=`,
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

  params(state, payload) {
    state.params = payload;
  },

  route(state, payload) {
    state.route = payload;
  },
};

export const actions = {
  async fetchProjects({ commit, state }, payload) {
    // Reset
    commit('error', null);
    commit('pending', true);

    if (!payload.page) {
      commit('params', { ...payload, page: state.params.page });
    } else {
      commit('params', { ...state.params, page: payload.page });
      commit('page', payload.page);
    }

    try {
      const projectsResponse = await getProjects(this.$axios, state.params);

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
      state.params.search
        ? commit('searchUsed', true)
        : commit('searchUsed', false);
    } catch (error) {
      commit('pending', false);
      commit('error', this.$i18n.t('general.error.retry'));
      commit('projects', []);
    }
  },
};
