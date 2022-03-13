<template>
  <div class="bg-gradient-primary py-12">
    <section-container class="text-primary-content">
      <h3>{{ $t('manage.landing.title') }}</h3>
      <p>{{ $t('manage.landing.subtitle') }}</p>

      <div class="py-12 grid xl:grid-cols-3 gap-8">
        <action-card v-for="card in cards" :key="card.key" :card="card" />
      </div>
    </section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import plus from '@iconify/icons-la/plus';
import clipboardList from '@iconify/icons-la/clipboard-list';
import star from '@iconify/icons-la/star';
import SectionContainer from '@/components/common/SectionContainer';
import ActionCard from '@/components/app/manage/ActionCard';

export default Vue.extend({
  components: { ActionCard, SectionContainer },

  data() {
    return {
      cards: [
        {
          key: 'create-project',
          icon: plus,
          img: require('assets/images/manage/create-project.svg'),
          target: '/manage/projects/new',
        },
        {
          key: 'manage-project',
          icon: clipboardList,
          img: require('assets/images/manage/manage-project.svg'),
          target: '/manage/projects',
        },
        {
          key: 'create-proposal',
          icon: star,
          img: require('assets/images/manage/create-proposal.svg'),
          // TODO: invent sth like action to select project to create the proposal with
          target: '/',
        },
      ],
    };
  },
});
</script>
