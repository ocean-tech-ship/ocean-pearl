<template>
  <section-container>
    <h2>
      {{ $t('licenses.title')[0] }}
      <span class="text-primary">{{ $t('licenses.title')[1] }}</span>
    </h2>

    <p>{{ $t('licenses.meta.description') }}</p>

    <div class="pt-4 pb-8">
      <licenses-card-list :licenses="docs" />
    </div>
  </section-container>
</template>

<script>
import Vue from 'vue';
import SectionContainer from '@/components/common/SectionContainer';
import createHead from '@/pages/licenses/index.head';
import LicensesCardList from '~/components/app/licenses/LicensesCardList';

export default Vue.extend({
  components: { LicensesCardList, SectionContainer },

  async asyncData({ $content }) {
    const docs = await $content('licenses').fetch();
    return { docs };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },
});
</script>
