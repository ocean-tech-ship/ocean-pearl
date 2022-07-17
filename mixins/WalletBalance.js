import Web3 from 'web3';
import NetworkTypeEnum from '@/enums/NetworkType.enum';

// Minimal required definition of erc20 interface to retrieve balance
const minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  // decimals
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
];

export default {
  methods: {
    async getOceanBalance(network, address) {
      let contractAddress;

      // Ocean Protocol ERC20 Smart Contracts
      switch (network) {
        case NetworkTypeEnum.Ethereum:
          contractAddress = '0x967da4048cd07ab37855c090aaf366e4ce1b9f48';
          break;
        case NetworkTypeEnum.Polygon:
          contractAddress = '0x282d8efCe846A88B159800bd4130ad77443Fa1A1';
          break;
        // case NetworkTypeEnum.BSC:
        //   contractAddress = '0xDCe07662CA8EbC241316a15B611c89711414Dd1a';
        //   break;
        default:
          throw new Error(`Unknown network type ${network}`);
      }

      return await this.getBalance(network, contractAddress, address);
    },

    getNetworkProvider(network) {
      let provider;

      switch (network) {
        case NetworkTypeEnum.Ethereum:
          provider = new Web3.providers.HttpProvider(
            'https://mainnet.infura.io/v3/79d68fbb3a7141d096c731910ae2bc34',
          );
          break;
        case NetworkTypeEnum.Polygon:
          provider = new Web3.providers.HttpProvider('https://polygon-rpc.com');
          break;
        default:
          throw new Error(`Unknown network type ${network}`);
      }

      return new Web3(provider);
    },

    async getBalance(network, erc20Contract, address) {
      const web3 = this.getNetworkProvider(network);
      const contract = new web3.eth.Contract(minABI, erc20Contract);

      const weiBalance = await contract.methods.balanceOf(address).call();
      return web3.utils.fromWei(weiBalance);
    },
  },
};
