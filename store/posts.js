import { createPost } from '@/api';

/* Store for posting project updates */

export const state = () => ({
  submitting: false,
});

export const mutations = {
  submitting(state, submitting) {
    state.submitting = submitting;
  },
};

export const actions = {
  async submit({ commit, dispatch }, payload) {
    commit('alert/clear', null, { root: true });
    commit('submitting', true);

    try {
      await createPost(this.$axios, payload);
      await dispatch('account/load', null, { root: true }); // Fetch account to visualize new posts
      dispatch('alert/success', this.$i18n.t('manage.updates.submit'), {
        root: true,
      });
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
      commit('submitting', false);
    }
  },
};
