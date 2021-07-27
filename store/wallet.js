import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

/* low level objects - managed outside store */
let web3Modal
let walletProvider

export const state = () => ({
  initialized: false,
  connected: false,
  account: null,
})

export const mutations = {
  initialized(state, payload) {
    state.initialized = payload
  },

  connected(state, payload) {
    state.connected = payload
  },

  account(state, payload) {
    state.account = payload
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
          infuraId: process.env.NUXT_ENV_INFURA_ID,
        },
      },
    }

    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    })

    console.log('initialized')
    commit('initialized', true)
  },

  async connect({ commit, dispatch }) {
    dispatch('initialize')
    console.log('Opening wallet chooser', web3Modal)

    try {
      walletProvider = await web3Modal.connect()
    } catch (e) {
      console.log('Could not connect wallet', e)
      return
    }

    // TODO: Account change is not supported. We need to re-login first
    walletProvider.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // No account is connected
        dispatch('disconnect')
      } else {
        // Update account
        commit('account', accounts[0])
      }
    })

    console.log('Wallet connected', walletProvider)
    commit('connected', true)
    dispatch('fetchAccount')

    await this.$router.push('/manage')
  },

  async disconnect({ commit }) {
    console.log('Disconnect wallet', walletProvider)

    if (walletProvider && walletProvider.close) {
      await walletProvider.close()
      await web3Modal.clearCachedProvider()
      walletProvider = null
    }

    // Erase sensitive data
    commit('account', null)

    commit('connected', false)
    await this.$router.push('/manage/connect')
  },

  async fetchAccount({ commit }) {
    if (!walletProvider) {
      throw new Error('Could not fetch account without wallet provider')
    }

    const web3 = new Web3(walletProvider)
    console.log('Web3 instance', web3)

    // Always use first account provided. Most providers only support one account
    const account = (await web3.eth.getAccounts())[0]
    commit('account', account)
    console.log('Fetched account', account)
  },

  /**
   * Make a signature request for the connected wallet
   * @param state Vuex state
   * @param payload Data so sign
   * @returns {Promise<string>}
   * @throws Error wallet disconnected or user declines to sign
   */
  async signData({ state }, payload) {
    if (!walletProvider || !state.account) {
      throw new Error('Could not sign data without wallet provider')
    }

    const web3 = new Web3(walletProvider)
    return await web3.eth.personal.sign(payload, state.account)
  },
}
