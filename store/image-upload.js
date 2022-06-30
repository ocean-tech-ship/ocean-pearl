import { uploadLogo, uploadImages } from '@/api';

export const state = () => ({
  loading: false,
});

export const mutations = {
  loading(state, loading) {
    state.loading = loading;
  },
};

export const actions = {
  async logo({ commit, dispatch }, file) {
    commit('alert/clear', null, { root: true });
    commit('loading', true);

    try {
      return await uploadLogo(this.$axios, file);
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
  async images({ commit, dispatch }, files) {
    commit('alert/clear', null, { root: true });
    commit('loading', true);

    try {
      return await uploadImages(this.$axios, files);
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
