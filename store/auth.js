const SESSION_KEY = 'session'

export const state = () => ({
  initialized: false,
  loggedIn: false,
})

export const mutations = {
  initialized(state, payload) {
    state.initialized = payload
  },

  loggedIn(state, payload) {
    state.loggedIn = payload
  },
}

export const actions = {
  initialize({ commit, state }) {
    if (!state.initialized) {
      // Refresh page functionality to reenter session
      if (sessionStorage.getItem(SESSION_KEY) !== null) {
        commit('loggedIn', true)
      }

      commit('initialized', true)
    }
  },
}
