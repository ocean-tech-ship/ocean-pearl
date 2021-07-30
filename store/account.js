import { getAccount } from 'api'

export const state = () => ({
  info: null,
  error: null,
  projects: null,
})

export const mutations = {
  info(state, payload) {
    state.info = payload
  },

  error(state, payload) {
    state.error = payload
  },

  projects(state, payload) {
    state.projects = payload
  },
}

export const actions = {
  async loadAccount({ commit }) {
    // Reset
    commit('info', null)
    commit('error', null)

    try {
      const response = await getAccount(this.$axios)
      commit('projects', response.data)
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        if (status === 401) {
          // Authentication failure / timeout
          commit('auth/message', 'Authentication timeout. Please try again.', {
            root: true,
          })
          await this.$router.push('/manage/login')
          return
        }

        if (status === 404) {
          // No projects available for this account
          commit('projects', [])
          commit('info', 'There is no project for this account yet.')
          return
        }

        commit('error', 'An error occurred. Please try again later.')
        console.error('Error on backend communication', error)
      }
    }
  },
}
