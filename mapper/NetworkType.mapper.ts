import NetworkTypeEnum from '@/enums/NetworkType.enum';

export const NetworkTypeMap: { [key in NetworkTypeEnum]: string } = {
  [NetworkTypeEnum.Ethereum]: 'Ethereum',
  [NetworkTypeEnum.Polygon]: 'Polygon',
  [NetworkTypeEnum.BSC]: 'Binance Smart Chain',
};

export default NetworkTypeMap;
