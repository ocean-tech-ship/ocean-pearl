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
      <app-link v-if="noSearchText.link" :to="noSearchText.link">
        <app-button-style
          class="text-center mt-4"
          :text="noSearchText.button"
        />
      </app-link>
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
      <app-link v-if="searchText.link" :to="searchText.link">
        <app-button-style class="text-center mt-4" :text="searchText.button" />
      </app-link>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue, { PropType } from 'vue';
import AppLink from './AppLink.vue';
import AppButtonStyle from './AppButtonStyle.vue';

interface TextSchema {
  headingMain: string;
  headingSecondary?: string;
  paragraph?: string;
  button?: string;
  link?: string;
}

export default Vue.extend({
  name: 'AppResponseWithSearch',
  components: { AppLink, AppButtonStyle },
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
