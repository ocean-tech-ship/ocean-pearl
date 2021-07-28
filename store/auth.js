export const SESSION_COOKIE = 'session'

export const state = () => ({
  initialized: false,
  loggedIn: false,
  message: null,
})

export const mutations = {
  initialized(state, payload) {
    state.initialized = payload
  },

  loggedIn(state, payload) {
    state.loggedIn = payload
  },

  message(state, payload) {
    state.message = payload
  },
}

export const actions = {
  initialize({ commit, state }) {
    // TODO: idk how we should proceed with this, maybe uneeded
    if (!state.initialized) {
      // Refresh page functionality to reenter session
      // TODO: check for cookie
      console.log(this.$cookies.getAll())

      commit('initialized', true)
    }
  },

  async login({ dispatch, commit }) {
    commit('message', null) // Reset
    let address, signature

    try {
      address = await dispatch('wallet/connect', null, { root: true })
    } catch (error) {
      console.error('Could not connect wallet', error)
      commit('message', 'Could not connect wallet. Please try again.')
      return
    }

    const doc = `oceanpearl.io - login @ ${Date.now()}`

    try {
      signature = await dispatch('wallet/signData', doc, { root: true })
    } catch (error) {
      console.error('Could not sign login request', error)
      commit('message', 'Could not sign login request. Please try again.')
      return
    }

    // TODO: continue login process
    console.log('Response', address, signature)
    this.$cookies.set(SESSION_COOKIE, 'test-val')
    await this.$router.push('/manage')
    await dispatch('wallet/disconnect', null, { root: true })
  },
}
