import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

/* low level objects - managed outside store */
let web3Modal
let walletProvider

export const state = () => ({
  initialized: false,
  connected: false,
  address: null,
})

export const mutations = {
  initialized(state, payload) {
    state.initialized = payload
  },

  connected(state, payload) {
    state.connected = payload
  },

  address(state, payload) {
    state.address = payload
  },
}

export const actions = {
  initialize({ commit, state }) {
    if (state.initialized) {
      return
    }

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: this.$config.infuraId,
        },
      },
    }

    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    })

    commit('initialized', true)
  },

  async connect({ commit, dispatch, state }) {
    dispatch('initialize')

    walletProvider = await web3Modal.connect()
    commit('connected', true)

    await dispatch('fetchAddress')
    return state.address
  },

  async disconnect({ commit }) {
    if (walletProvider && walletProvider.close) {
      await walletProvider.close()
      await web3Modal.clearCachedProvider()
      walletProvider = null
    }

    // Erase sensitive data
    commit('address', null)
    commit('connected', false)
  },

  async fetchAddress({ commit, state }) {
    if (!walletProvider || !state.connected) {
      throw new Error('Could not fetch account without wallet provider')
    }

    const web3 = new Web3(walletProvider)

    // Always use first account provided. Most providers only support one account
    const address = (await web3.eth.getAccounts())[0]
    commit('address', address)
  },

  async signData({ state }, payload) {
    if (!walletProvider || !state.address) {
      throw new Error('Could not sign data without wallet provider')
    }

    const web3 = new Web3(walletProvider)
    return await web3.eth.personal.sign(payload, state.address)
  },
}
