<template>
  <FormControl :label="$t('creator.project.final.label')">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div class="p-4 rounded border border-primary">
        <img
          class="w-24 h-24 bg-primary/10 rounded p-2 mb-4"
          src="@/assets/images/manage/projects/runner.svg"
          alt=""
        />

        <span class="text-primary">
          {{ $t('creator.project.final.subtitle') }}
        </span>
        <h4 class="text-primary">
          {{ $t('creator.project.final.title') }}
        </h4>

        <p class="small-text">
          {{ $t('creator.project.final.description') }}
        </p>
      </div>
      <div class="p-4 rounded bg-primary/10 space-y-4">
        <div class="flex items-center">
          <img
            class="pr-2"
            src="@/assets/images/pearl-logo.svg"
            :alt="$t('general.logo')"
          />
          <p class="text-primary 3xl:text-lg font-medium">
            {{ $t('creator.project.guidelines.title') }}
          </p>
        </div>

        <div
          v-for="guideline in $t('creator.project.guidelines.items')"
          :key="guideline"
          class="bg-base-200/60 text-base-content rounded px-4 py-2 flex items-center"
        >
          <app-icon :data="icons.checkCircle" class="text-primary mr-4" />
          <span>{{ guideline }}</span>
        </div>
      </div>
    </div>

    <alert-box type="info" icon class="my-8">
      {{ $t('creator.project.final.note') }}
    </alert-box>

    <hr class="text-primary" />

    <button
      type="submit"
      class="btn btn-primary my-8"
      :class="{ loading }"
      @click="$store.dispatch('creator/submit')"
    >
      {{ $t('general.submit-review') }}
    </button>
  </FormControl>
</template>

<script>
import info from '@iconify/icons-la/info';
import checkCircle from '@iconify/icons-la/check-circle';
import { mapState } from 'vuex';
import FormControl from '@/components/app/manage/creator/FormControl';
import AppIcon from '@/components/common/AppIcon';
import AlertBox from '@/components/common/AlertBox';

export default {
  name: 'FinalStep',

  components: { AlertBox, AppIcon, FormControl },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        info,
        checkCircle,
      },
    };
  },

  computed: {
    ...mapState('creator', {
      loading: 'loading',
    }),
  },
};
</script>
