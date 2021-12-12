import { getProjects } from '@/api';

export const state = () => ({
  error: false,
  pending: true,
  projects: null,
  pagination: null,
  searchUsed: false,
  filter: {
    page: 1,
    limit: 12,
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

  async fetchProjects({ commit, state }) {
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

    try {
      const projectsResponse = await getProjects(this.$axios, query);

      if (projectsResponse.status === 204) {
        commit('error', this.$i18n.t('general.error.unknown'));
        commit('projects', []);
      }

      commit('pending', false);
      commit('projects', projectsResponse.data.docs);
      commit('pagination', projectsResponse.data.pagination);

      // return query for url mutations
      delete query.limit;
      return query;
    } catch (error) {
      commit('pending', false);
      commit('error', this.$i18n.t('general.error.retry'));
      commit('projects', []);
    }
  },
};
