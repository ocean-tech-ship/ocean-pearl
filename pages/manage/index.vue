<template>
  <div class="bg-gradient-primary py-12">
    <section-container class="text-primary-content">
      <h3>{{ $t('manage.landing.title') }}</h3>
      <p>{{ $t('manage.landing.subtitle') }}</p>

      <div class="py-12 grid xl:grid-cols-3 gap-8">
        <action-card
          v-for="card in cards"
          :key="card.key"
          :card="card"
          :loading="loading"
          :locked-text="card.lockedText"
        />
      </div>
    </section-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import plus from '@iconify/icons-la/plus';
import clipboardList from '@iconify/icons-la/clipboard-list';
import star from '@iconify/icons-la/star';
import SectionContainer from '@/components/common/SectionContainer';
import ActionCard from '@/components/app/manage/ActionCard';

export default Vue.extend({
  components: { ActionCard, SectionContainer },

  middleware: 'session',

  async fetch() {
    await this.$store.dispatch('account/softLoad');
  },

  computed: {
    ...mapState('account', {
      loading: 'loading',
      projects: 'projects',
    }),
    cards() {
      return [
        {
          key: 'create-project',
          icon: plus,
          img: require('assets/images/manage/create-project.svg'),
          target: '/manage/projects/new',
          lockedText: 'coming soon',
        },
        {
          key: 'manage-project',
          icon: clipboardList,
          img: require('assets/images/manage/manage-project.svg'),
          target: '/manage/projects',
          lockedText:
            this.projects?.length > 0
              ? null
              : this.$i18n.t('manage.landing.unlock'),
        },
        {
          key: 'create-proposal',
          external: true,
          icon: star,
          img: require('assets/images/manage/create-proposal.svg'),
          target: 'https://seed.oceandao.org',
        },
      ];
    },
  },
});
</script>
