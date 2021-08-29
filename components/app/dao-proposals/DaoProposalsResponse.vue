<template>
  <div
    v-if="!proposalsFound"
    class="flex flex-col items-center max-w-sm px-4 md:px-0 mt-12 md:mt-16"
  >
    <img :src="notFoundImg.src" :alt="notFoundImg.alt" />
    <div v-if="!searchUsed" class="text-center mt-8">
      <h3 v-html="$t('dao-projects.filterResponse.noSearch.heading')" />
      <p>
        {{ $t('dao-projects.filterResponse.noSearch.paragraph') }}
      </p>
    </div>
    <div v-if="searchUsed" class="text-center mt-8">
      <h3 class="" v-html="$t('dao-projects.filterResponse.search.heading')" />
      <p>
        {{ $t('dao-projects.filterResponse.search.paragraph') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaoProposalsResponse',
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
