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
      commit('message', 'Could not connect wallet. Please try again.')
      return
    }

    const timestamp = Date.now()
    const doc = `oceanpearl.io - login @ ${timestamp}`

    try {
      signature = await dispatch('wallet/signData', doc, { root: true })
    } catch (error) {
      console.error('Could not sign login request', error)
      commit('message', 'Could not sign login request. Please try again.')
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
        commit('message', 'Authentication failure. Please try again.')
        return
      }

      console.error('Error on backend communication', error)
      commit('message', 'An error occurred. Please try again later.')
      return
    }

    // Login was successful
    await this.$router.push('/manage')
    await dispatch('wallet/disconnect', null, { root: true })
  },
}
