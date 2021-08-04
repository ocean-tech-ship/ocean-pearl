import { login, logout } from '@/api'

export const SESSION_COOKIE = 'session'

export const state = () => ({
  message: null,
})

export const mutations = {
  message(state, payload) {
    state.message = payload
  },
}

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

    const timestamp = Date.now()
    const doc = `oceanpearl.io - login @ ${timestamp}`

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
      await login(this.$axios, payload)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        commit('message', this.$i18n.t('manage.auth.error.invalid'))
        return
      }

      console.error('Error on backend communication', error)
      commit('message', this.$i18n.t('general.error.retry'))
      return
    }

    // Login was successful
    await this.$router.push('/manage')
    await dispatch('wallet/disconnect', null, { root: true })
  },

  async logout({ commit }) {
    try {
      await logout(this.$axios)
    } catch (error) {
      console.error('Error on logging out', error)
    }

    // Logout was successful
    commit('message', this.$i18n.t('manage.auth.logout.completed'))
    await this.$router.push('/manage/login')
  },
}
