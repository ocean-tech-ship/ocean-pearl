import { getAccount, updateProject } from '@/api';

export const state = () => ({
  info: null,
  error: null,
  projects: null,
  wallet: null,
});

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

  wallet(state, payload) {
    state.wallet = payload
  },
};

export const actions = {
  async loadAccount({ commit, dispatch }) {
    // Reset
    commit('info', null)
    commit('error', null)

    try {
      const response = await getAccount(this.$axios)
      commit('wallet', response.data.wallet)
      commit('projects', response.data.projects)

    } catch (error) {
      if (error.response) {
        const { status } = error.response;

        if (status === 401) {
          // Authentication failure / timeout
          await dispatch('auth/timeout', null, { root: true });
          throw new Error('401 - Unauthorized');
        }

        if (status === 404) {
          // No projects available for this account
          // UI has special component for visualization
          commit('projects', [])
          return;
        }
      }

      commit('error', this.$i18n.t('general.error.retry'))
      console.error('Error on backend communication', error)
    }
  },

  async updateProject({ commit }, payload) {
    // Reset
    commit('info', null)
    commit('error', null)

    const formData = new FormData()

    for (const [key, value] of Object.entries(payload)) {
      if (Array.isArray(value)) {
        value.forEach((val) => formData.append(val !== Object(val) ? `${key}[]` : key, val))
      } else {
        formData.append(key, value)
      }
    }

    try {
      const response = await updateProject(
        this.$axios,
        payload.id,
        formData
      )

      commit('projects', response.data)
      commit('info', this.$i18n.t('manage.project.changed'))
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        if (status === 401) {
          // Authentication failure / timeout
          commit('auth/message', this.$i18n.t('manage.auth.timeout'), {
            root: true,
          })
          await this.$router.push('/management/login')
          return
        }
      }

      commit('error', this.$i18n.t('general.error.retry'))
      console.error('Error on project update', error)
    }
  },
};
