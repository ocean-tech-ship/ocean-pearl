import ConnectedWallet from '@/mixins/ConnectedWallet';

export default {
  mixins: [ConnectedWallet],

  computed: {
    navbarPages() {
      // Always visible pages
      const pages = [
        {
          title: this.$t('navbar.navbarProjects'),
          to: '/projects',
        },
        {
          title: this.$t('navbar.navbarProposals'),
          to: '/dao-proposals',
        },
        {
          title: this.$t('navbar.navbarVoting'),
          to: '/dao-voting',
        },
      ];

      // Management - only if connected
      if (this.wallet) {
        pages.push({
          title: this.$t('navbar.navbarManage'),
          to: '/manage',
        });
      }

      return pages;
    },
  },
};
