import GrantPoolTypeEnum from '@/enums/GrantPoolType.enum';

export const GrantPoolTypeMap: { [key in GrantPoolTypeEnum]: string } = {
  [GrantPoolTypeEnum.General]: 'General',
  [GrantPoolTypeEnum.Outreach]: 'Outreach',
  [GrantPoolTypeEnum.NewOutreach]: 'New Outreach',
  [GrantPoolTypeEnum.NewEntrants]: 'New Entrants',
  [GrantPoolTypeEnum.CoreTech]: 'Core Tech',
  [GrantPoolTypeEnum.NewGeneral]: 'New General',
  [GrantPoolTypeEnum.SecondAndThirdGrant]: '2nd/3rd Grant',
};
