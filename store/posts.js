import { createPost } from '@/api';

/* Store for fetching and posting project updates */

export const state = () => ({
  fetching: false,
  submitting: false,
  posts: [],
});

export const mutations = {
  fetching(state, fetching) {
    state.fetching = fetching;
  },
  submitting(state, submitting) {
    state.submitting = submitting;
  },
  posts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async load(state, projectId) {
    // TODO: load posts backend endpoint
    console.log('fetch posts for project', projectId);
  },
  async submit({ commit, dispatch }, payload) {
    commit('alert/clear', null, { root: true });
    commit('submitting', true);

    try {
      await createPost(this.$axios, payload);
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
