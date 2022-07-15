import ProjectCategoryEnum from '@/enums/ProjectCategory.enum';

export const ProjectCategoryTypeMap: { [key in ProjectCategoryEnum]: string } =
  {
    [ProjectCategoryEnum.DeFi]: 'DeFi',
    [ProjectCategoryEnum.DAO]: 'DAO',
    [ProjectCategoryEnum.BuildAndIntegrate]: 'Build & Integrate',
    [ProjectCategoryEnum.UnleashData]: 'Unleash Data',
    [ProjectCategoryEnum.Outreach]: 'Outreach',
    [ProjectCategoryEnum.Other]: 'Other',
  };
