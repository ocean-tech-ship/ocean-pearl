import EarmarkTypeEnum from '@/enums/EarmarkType.enum';

/** @deprecated can be replaced by GrantPoolTypeMap **/
export const EarmarkTypeMap: { [key in EarmarkTypeEnum]: string } = {
  [EarmarkTypeEnum.Outreach]: 'Outreach',
  [EarmarkTypeEnum.NewOutreach]: 'New Outreach',
  [EarmarkTypeEnum.NewEntrants]: 'New Entrants',
  [EarmarkTypeEnum.CoreTech]: 'Core Tech',
  [EarmarkTypeEnum.NewGeneral]: 'New General',
  [EarmarkTypeEnum.SecondAndThirdGrant]: '2nd/3rd Grant',
};
