export default {
  methods: {
    shrinkAddress(ethAddress) {
      const prefix = ethAddress.substr(0, 6)
      const suffix = ethAddress.substr(ethAddress.length - 4, 4)
      return `${prefix}...${suffix}`
    },
  },
}
