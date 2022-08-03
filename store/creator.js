import ProjectCategoryEnum from '@/enums/ProjectCategory.enum';
import { createProject } from '@/api';

const getDefaultState = () => ({
  /* we only allow one project draft at the same time */
  /* BE: create-project.model.ts */
  project: {
    title: '',
    oneLiner: '',
    description: '',
    category: ProjectCategoryEnum.Other,
    mediaHandles: {},
    logo: undefined,
    images: [],
  },
  loading: false,
});

export const state = () => getDefaultState();

export const mutations = {
  // payload: { key: value, ... }
  updateProperty(state, payload) {
    // Merge rather than replace, so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state.project, payload);
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  reset(state) {
    // Merge rather than replace, so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
};

export const actions = {
  async submit({ state, commit, dispatch }) {
    commit('setLoading', true);

    try {
      await createProject(this.$axios, state.project);
      await this.$router.push('/manage/projects');
      dispatch(
        'alert/success',
        'Your project has been successfully submitted for review. You can view the current status in the management page.',
        { root: true },
      );
      commit('reset');
    } catch (ex) {
      // Validation errors
      if (ex.response?.data?.message) {
        const errors = [].concat(ex.response.data.message);
        errors.forEach((error) => {
          dispatch('alert/error', error, { root: true });
        });
        return;
      }

      // Unknown failure
      dispatch('alert/error', this.$i18n.t('general.error.retry'), {
        root: true,
      });
    } finally {
      commit('setLoading', false);
    }
  },
};
