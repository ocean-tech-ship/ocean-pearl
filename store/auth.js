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
      console.error('Could not connect wallet', error);
      dispatch('alert/error', 'manage.auth.error.wallet', { root: true });
      return;
    }

    const timestamp = new Date();
    const doc = `oceanpearl.io - login @ ${timestamp.toISOString()}`;

    try {
      signature = await dispatch('wallet/signData', doc, { root: true });
    } catch (error) {
      console.error('Could not sign login request', error);
      dispatch('alert/error', 'manage.auth.error.sign', { root: true });
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
      await this.$router.push('/management');
      await dispatch('wallet/disconnect', null, { root: true });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch('alert/error', 'manage.auth.error.invalid', { root: true });
        return;
      }

      console.error('Error on backend communication', error);
      dispatch('alert/error', 'general.error.retry', { root: true });
    }
  },

  async logout({ commit, dispatch }) {
    try {
      await logout(this.$axios);
    } catch (error) {
      console.error('Error on logging out', error);
    }

    // Logout was successful
    dispatch(
      'alert/success',
      { content: 'manage.auth.logout.completed', autoFade: true },
      { root: true },
    );

    await this.$router.push('/');

    // Reset state
    commit('account/wallet', null, { root: true });
    commit('account/projects', null, { root: true });
  },

  timeout({ dispatch }) {
    dispatch('alert/warning', 'manage.auth.timeout', { root: true });
    this.$cookies.remove(SESSION_NAME);
  },
};
