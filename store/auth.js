import { login, logout } from '@/api';

export const SESSION_NAME = 'session-shadow';

export const state = () => ({
  loggedInAddress: null,
});

export const mutations = {
  loggedInAddress(state, payload) {
    state.loggedInAddress = payload;
  },
};

export const actions = {
  async login({ dispatch, commit }) {
    commit('alert/clear', null, { root: true }); // Reset
    let wallet, signature;

    try {
      wallet = await dispatch('wallet/connect', null, { root: true });
    } catch (error) {
      // User aborted wallet provider - no additional action needed
      return;
    }

    // Wait one second before next action to prevent wallet apps from freezing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const timestamp = new Date();
    const doc = `oceanpearl.io - login @ ${timestamp.toISOString()}`;

    try {
      signature = await dispatch('wallet/signData', doc, { root: true });
    } catch (error) {
      dispatch(
        'alert/error',
        {
          content: this.$i18n.t('manage.auth.error.sign'),
          autoFade: true,
        },
        {
          root: true,
        },
      );
      return;
    }

    const payload = {
      wallet,
      timestamp,
      signature,
    };

    try {
      const response = await login(this.$axios, payload);

      // Login was successful
      commit('loggedInAddress', response.data.wallet);
      await this.$router.push('/manage');
      await dispatch('wallet/disconnect', null, { root: true });

      // Wait before displaying alert to fix glitching
      await new Promise((resolve) => setTimeout(resolve, 500));

      await dispatch(
        'alert/success',
        {
          content: this.$i18n.t('manage.auth.login.success'),
          autoFade: true,
        },
        { root: true },
      );
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch('alert/error', 'manage.auth.error.invalid', { root: true });
        return;
      }

      dispatch('alert/error', this.$i18n.t('general.error.retry'), {
        root: true,
      });
    }
  },

  async logout({ commit, dispatch }) {
    try {
      await logout(this.$axios);
    } catch (error) {}

    // Logout was successful
    dispatch(
      'alert/success',
      { content: this.$i18n.t('manage.auth.logout.completed'), autoFade: true },
      { root: true },
    );

    await this.$router.push('/');

    // Reset state
    commit('account/wallet', null, { root: true });
    commit('account/projects', null, { root: true });
  },

  async timeout({ commit, dispatch }) {
    dispatch(
      'alert/warning',
      {
        content: this.$i18n.t('manage.auth.timeout'),
        autoFade: true,
      },
      {
        root: true,
      },
    );

    this.$cookies.remove(SESSION_NAME);
    await this.$router.push('/');

    // Reset state
    commit('account/wallet', null, { root: true });
    commit('account/projects', null, { root: true });
  },
};
