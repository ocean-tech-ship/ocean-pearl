import { ProjectTier } from '@/models/Project.model';

export default function mapByNumOfGrants(grants: number, i18n: any): ProjectTier {
  if (grants >= 5) {
    return {
      // eslint-disable-next-line global-require
      iconSrc: require('@/assets/images/leaderboard/tier-4.svg'),
      title: i18n.t('project.tier.veteran'),
      condition: i18n.tc('project.proposal.grants', 5, { n: '5+' })
    };
  }

  if (grants >= 2) {
    return {
      // eslint-disable-next-line global-require
      iconSrc: require('@/assets/images/leaderboard/tier-3.svg'),
      title: i18n.t('project.tier.experienced'),
      condition: i18n.tc('project.proposal.grants', 2, { n: '2+' })
    };
  }

  if (grants >= 1) {
    return {
      // eslint-disable-next-line global-require
      iconSrc: require('@/assets/images/leaderboard/tier-2.svg'),
      title: i18n.t('project.tier.existing'),
      condition: i18n.tc('project.proposal.grants', 1, { n: '1' })
    };
  }

  return {
    // eslint-disable-next-line global-require
    iconSrc: require('@/assets/images/leaderboard/tier-1.svg'),
    title: i18n.t('project.tier.new'),
    condition: i18n.tc('project.proposal.grants', 0, { n: '0' })
  };
}
