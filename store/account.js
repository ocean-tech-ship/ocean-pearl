import { getAccount } from '@/api'

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

    // test mockup
    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    await wait(1800)
    commit('projects', [
      {
        id: '1',
        title: 'Example Project',
        admins: [
          '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          '0x00000000219ab540356cbb839cbe05303d7705fa',
          '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8',
        ],
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        category: 'buildAndIntegrate',
        pictures: [
          {
            id: '1',
            url: 'https://dataunion.app/wp-content/uploads/2020/11/skateboard.jpg'
          },
          {
            id: '2',
            url: 'https://dataunion.app/wp-content/uploads/2020/11/winsome-girl-with-straight-hair-standing-on-bridge-with-camera.jpg'
          },
        ],
        logo: 'https://alpha.dataunion.app/DataUnion.svg',
      },
      {
        id: '2',
        title: 'Another really super cool project with long title',
        pictures: [],
      },
    ])

    if (console) {
      return
    }
    // end test mockup

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
