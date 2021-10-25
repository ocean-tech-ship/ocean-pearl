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

    <NuxtLink to="/dao-proposals">
      <div class="flex items-center mt-6 text-white">
        <p class="mr-2">
          {{ $t('landing.pearl_dao.link_text') }}
        </p>

        <app-icon :data="icons.arrowRight" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics.vue';
import RoundMetricsSkeletonCard from '@/components/app/dao-proposals/RoundMetricsSkeletonCard.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';
import arrowRight from '@iconify/icons-la/arrow-right';
import AppIcon from '~/components/common/AppIcon';

export default {
  name: 'LandingPearlDao',

  components: {
    AppIcon,
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

  data() {
    return {
      icons: {
        arrowRight,
      },
    };
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
