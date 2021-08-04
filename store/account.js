import { getAccount, updateProject } from '@/api'

export const state = () => ({
  info: null,
  error: null,
  projects: null,
  wallet: null,
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

  wallet(state, payload) {
    state.wallet = payload
  },
}

export const actions = {
  async loadAccount({ commit }) {
    // Reset
    commit('info', null)
    commit('error', null)

    // MOCKUP DATA FOR TESTING PURPOSES
    /*
    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    await wait(1800)
    commit('wallet', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
    commit('projects', [
      {
        id: '1',
        title: 'Example Project',
        wallet: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        category: 'buildAndIntegrate',
        pictures: [
          {
            id: '1',
            url: 'https://dataunion.app/wp-content/uploads/2020/11/skateboard.jpg',
          },
          {
            id: '2',
            url: 'https://dataunion.app/wp-content/uploads/2020/11/winsome-girl-with-straight-hair-standing-on-bridge-with-camera.jpg',
          },
        ],
        logo: 'https://alpha.dataunion.app/DataUnion.svg',
      },
      {
        id: '2',
        title: 'Another really super cool project with long title',
        wallet: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8',
        pictures: [],
      },
    ])

    if (console) {
      return
    }
    */
    // end test mockup

    try {
      const response = await getAccount(this.$axios)
      commit('wallet', response.data.wallet)
      commit('projects', response.data.projects)
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        if (status === 401) {
          // Authentication failure / timeout
          commit('auth/message', this.$t('manage.auth.timeout'), {
            root: true,
          })
          await this.$router.push('/manage/login')
          return
        }

        if (status === 404) {
          // No projects available for this account
          // UI has special component for visualization
          commit('projects', [])
          return
        }
      }

      commit('error', this.$t('general.error.retry'))
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
        value.forEach((val) => formData.append(key, val))
      } else {
        formData.append(key, String(value))
      }
    }

    try {
      const response = await updateProject(
        this.$axios,
        payload.project,
        formData
      )

      commit('projects', response.data)
      commit('info', this.$t('manage.project.changed'))
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        if (status === 401) {
          // Authentication failure / timeout
          commit('auth/message', this.$t('manage.auth.timeout'), {
            root: true,
          })
          await this.$router.push('/manage/login')
          return
        }
      }

      commit('error', this.$t('general.error.retry'))
      console.error('Error on project update', error)
    }
  },
}
