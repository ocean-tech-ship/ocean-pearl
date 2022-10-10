import OriginTypeEnum from '@/enums/OriginType.enum';

export const OriginTypeMap: { [key in OriginTypeEnum]: string } = {
  [OriginTypeEnum.OceanDao]: 'OceanDAO',
  [OriginTypeEnum.OceanPearl]: 'OceanPearl',
};
