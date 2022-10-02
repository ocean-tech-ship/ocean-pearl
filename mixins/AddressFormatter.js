import Web3 from 'web3';

export default {
  methods: {
    isValidAddress(address) {
      return Web3.utils.isAddress(address);
    },
    formatAddress(address) {
      return Web3.utils.toChecksumAddress(address);
    },
  },
};
