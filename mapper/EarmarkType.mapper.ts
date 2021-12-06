import EarmarkTypeEnum from '@/enums/EarmarkType.enum';

export const EarmarkTypeMap: { [key in EarmarkTypeEnum]: string } = {
  [EarmarkTypeEnum.Outreach]: 'Outreach',
  [EarmarkTypeEnum.NewOutreach]: 'New Outreach',
  [EarmarkTypeEnum.NewEntrants]: 'New Entrants',
  [EarmarkTypeEnum.CoreTech]: 'Core Tech',
  [EarmarkTypeEnum.NewGeneral]: 'New General',
};
