<template>
  <div class="flex flex-col items-center px-4 md:px-0">
    <img :src="notFoundImg.src" :alt="notFoundImg.alt" />
    <div v-if="!searchUsed" class="text-center mt-8">
      <h3>
        {{ noSearchText.headingMain }}
        <span v-if="noSearchText.headingSecondary" class="text-primary">{{
          noSearchText.headingSecondary
        }}</span>
      </h3>
      <p v-if="noSearchText.paragraph" class="mt-1">
        {{ noSearchText.paragraph }}
      </p>

      <app-button
        v-if="noSearchText.link"
        as="link"
        :to="noSearchText.link"
        class="btn-gradient-primary-variant mt-4 border-0"
        >{{ noSearchText.button }}</app-button
      >
    </div>
    <div v-if="searchUsed" class="text-center mt-8">
      <h3>
        {{ searchText.headingMain }}
        <span v-if="searchText.headingSecondary" class="text-primary">{{
          searchText.headingSecondary
        }}</span>
      </h3>
      <p v-if="searchText.paragraph" class="mt-1">
        {{ searchText.paragraph }}
      </p>
      <app-button
        v-if="searchText.link"
        as="link"
        :to="searchText.link"
        class="btn-gradient-primary-variant mt-4 border-0"
        >{{ searchText.button }}</app-button
      >
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue, { PropType } from 'vue';
import AppLink from './AppLink.vue';
import AppButton from '@/components/common/AppButton.vue';

interface TextSchema {
  headingMain: string;
  headingSecondary?: string;
  paragraph?: string;
  button?: string;
  link?: string;
}

export default Vue.extend({
  name: 'AppResponseWithSearch',
  components: { AppButton, AppLink },
  props: {
    noSearchText: {
      type: Object as PropType<TextSchema>,
      required: true,
    },
    searchText: {
      type: Object as PropType<TextSchema>,
      required: true,
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
        // eslint-disable-next-line global-require
        src: require('@/assets/images/illustrations/fishing.svg'),
        alt: 'Not Found Image',
      },
    };
  },
});
</script>
