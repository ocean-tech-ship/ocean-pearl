import { ProjectTier } from '@/models/Project.model';

export default function mapByNumOfGrants(grants: number, i18n: any): ProjectTier {
  if (grants >= 5) {
    return {
      // eslint-disable-next-line global-require
      src: require('@/assets/images/leaderboard/tier-4.svg'),
      alt: i18n.t('project.tier.veteran'),
    };
  }

  if (grants >= 2) {
    return {
      // eslint-disable-next-line global-require
      src: require('@/assets/images/leaderboard/tier-3.svg'),
      alt: i18n.t('project.tier.experienced'),
    };
  }

  if (grants >= 1) {
    return {
      // eslint-disable-next-line global-require
      src: require('@/assets/images/leaderboard/tier-2.svg'),
      alt: i18n.t('project.tier.existing'),
    };
  }

  return {
    // eslint-disable-next-line global-require
    src: require('@/assets/images/leaderboard/tier-1.svg'),
    alt: i18n.t('project.tier.new'),
  };
}
