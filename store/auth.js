import { login, logout } from '@/api'

export const SESSION_NAME = 'session-shadow';

export const state = () => ({
  loggedInAddress: null,
  message: null,
});

export const mutations = {
  loggedInAddress(state, payload) {
    state.loggedInAddress = payload
  },

  message(state, payload) {
    state.message = payload
  },
};

export const actions = {
  async login({ dispatch, commit }) {
    commit('message', null) // Reset
    let wallet, signature

    try {
      wallet = await dispatch('wallet/connect', null, { root: true })
    } catch (error) {
      console.error('Could not connect wallet', error)
      commit('message', this.$i18n.t('manage.auth.error.wallet'))
      return
    }

    const timestamp = new Date()
    const doc = `oceanpearl.io - login @ ${timestamp.toISOString()}`

    try {
      signature = await dispatch('wallet/signData', doc, { root: true })
    } catch (error) {
      console.error('Could not sign login request', error)
      commit('message', this.$i18n.t('manage.auth.error.sign'))
      return
    }

    const payload = {
      wallet,
      timestamp,
      signature,
    }

    try {
      const response = await login(this.$axios, payload);

      // Login was successful
      commit('loggedInAddress', response.data.wallet);
      await this.$router.push('/management')
      await dispatch('wallet/disconnect', null, { root: true })

    } catch (error) {
      if (error.response && error.response.status === 401) {
        commit('message', this.$i18n.t('manage.auth.error.invalid'))
        return
      }

      console.error('Error on backend communication', error)
      commit('message', this.$i18n.t('general.error.retry'))
    }
  },

  async logout({ commit }) {
    try {
      await logout(this.$axios)
    } catch (error) {
      console.error('Error on logging out', error)
    }

    // Logout was successful
    commit('message', this.$i18n.t('manage.auth.logout.completed'))
    await this.$router.push('/management/login')

    // Reset state
    commit('account/wallet', null, { root: true });
    commit('account/projects', null, { root: true });
  },

  timeout({ commit }) {
    commit('message', this.$i18n.t('manage.auth.timeout'));
    this.$cookies.remove(SESSION_NAME);
  }
}
