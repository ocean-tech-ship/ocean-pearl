import CategoryEnum from '../../enums/Category.enum';

/**
 * @deprecated should be replaced by ProjectCategoryMapper and ProposalCategoryMapper
 */
export const CategoryMap: { [key in CategoryEnum]: string } = {
  [CategoryEnum.All]: 'All',
  [CategoryEnum.BuildAndIntegrate]: 'Build & Integrate',
  [CategoryEnum.CoreSoftware]: 'Core Software',
  [CategoryEnum.DAO]: 'DAO',
  [CategoryEnum.NewEntrants]: 'New Entrants',
  [CategoryEnum.Other]: 'Other',
  [CategoryEnum.Outreach]: 'Outreach',
  [CategoryEnum.UnleashData]: 'Unleash Data',
};
