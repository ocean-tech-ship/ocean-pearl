<template>
  <div
    v-if="!proposalsFound"
    class="flex flex-col items-center px-4 md:px-0 mt-12 md:mt-16"
  >
    <img :src="notFoundImg.src" :alt="notFoundImg.alt" />
    <div v-if="!searchUsed" class="text-center mt-8">
      <h3>
        {{ $t('dao-projects.filterResponse.noSearch.heading.main') }}
        <span class="text-primary">{{
          $t('dao-projects.filterResponse.noSearch.heading.secondary')
        }}</span>
      </h3>
      <p class="mt-1">
        {{ $t('dao-projects.filterResponse.noSearch.paragraph') }}
      </p>
      <app-link
        to="https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template"
      >
        <app-button-style
          class="text-center mt-4"
          :text="$t('dao-projects.filterResponse.noSearch.button')"
        />
      </app-link>
    </div>
    <div v-if="searchUsed" class="text-center mt-8">
      <h3>
        {{ $t('dao-projects.filterResponse.search.heading.main') }}
        <span class="text-primary">{{
          $t('dao-projects.filterResponse.search.heading.secondary')
        }}</span>
      </h3>
      <p class="mt-1">
        {{ $t('dao-projects.filterResponse.search.paragraph') }}
      </p>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/common/AppLink.vue';
import AppButtonStyle from '@/components/common/AppButtonStyle.vue';

export default {
  name: 'DaoProposalsResponse',
  components: { AppLink, AppButtonStyle },
  props: {
    proposalsFound: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    searchUsed: {
      type: Boolean,
      required: true,
      default: () => false,
    },
  },
  data() {
    return {
      notFoundImg: {
        src: require('@/assets/images/illustrations/fishing.svg'),
        alt: 'Not Found Image',
      },
    };
  },
};
</script>
