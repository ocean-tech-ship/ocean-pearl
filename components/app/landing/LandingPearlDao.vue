<template>
  <LandingSectionContainer class="my-32 py-12 gradient-background">
    <h2 class="text-white">
      {{
        $t('landing.pearl_dao.title') +
        ' ' +
        $t('landing.pearl_dao.titleHighlight')
      }}
    </h2>

    <p class="text-white">{{ $t('landing.pearl_dao.text') }}</p>

    <app-skeleton-card-list
      v-if="metrics === null"
      custom-class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      :quantity="6"
    >
      <round-metrics-skeleton-card />
    </app-skeleton-card-list>

    <round-metrics v-else class="mt-10" :metrics="metrics" />

    <app-link-icon-right to="/dao-proposals" class="text-white">
      {{ $t('landing.pearl_dao.link_text') }}
    </app-link-icon-right>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics.vue';
import AppLinkIconRight from '@/components/common/AppLinkIconRight.vue';
import RoundMetricsSkeletonCard from '@/components/app/dao-proposals/RoundMetricsSkeletonCard.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';

export default {
  name: 'LandingPearlDao',

  components: {
    AppLinkIconRight,
    LandingSectionContainer,
    RoundMetrics,
    RoundMetricsSkeletonCard,
    AppSkeletonCardList,
  },

  props: {
    metrics: {
      type: [Object, null],
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.gradient-background {
  background-image: url('../../../assets/images/landing/turtle-grid.svg'),
    linear-gradient(to bottom right, #7b3070 5%, #d45b8d);
  background-position: right top;
  background-repeat: no-repeat;
  animation: animatedBackground 8s linear infinite alternate;
}

@keyframes animatedBackground {
  from {
    background-position: 100% 0%;
  }
  to {
    background-position: 80% 0%;
  }
}

@media only screen and (max-width: 1100px) {
  .gradient-background {
    background-position: -800%;
  }
}
</style>
