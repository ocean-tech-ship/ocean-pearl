<template>
  <FormControl label="Last but not least">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div class="p-4 rounded border border-primary">
        <img
          class="bg-primary/10 rounded p-2 mb-4"
          src="@/assets/images/manage/projects/runner.svg"
          alt=""
        />

        <span class="text-primary">Finish it</span>
        <h4 class="text-primary">Almost there!</h4>

        <p class="small-text">
          Add some final touches and double check that all the provided
          information is correct. Our guidelines should help you with that.
        </p>
      </div>
      <div class="p-4 rounded bg-primary/10 space-y-4">
        <div class="flex">
          <img
            class="pr-2"
            src="@/assets/images/pearl-logo.svg"
            :alt="$t('general.logo')"
          />
          <p class="text-primary text-lg font-medium">
            Ocean Pearl Project Guidelines
          </p>
        </div>

        <div
          v-for="guideline in $t('creator.project.guidelines')"
          :key="guideline"
          class="bg-primary-content text-base-300 rounded px-4 py-2 flex items-center"
        >
          <app-icon :data="icons.checkCircle" class="text-primary mr-4" />
          <span>{{ guideline }}</span>
        </div>
      </div>
    </div>

    <alert-box type="info" icon class="my-8">
      After submission we will take a manual review of your project and make it
      publicity available if it does not violate our guidelines. This process
      can take up to 3 business days.
    </alert-box>

    <hr class="text-primary" />

    <button type="button" class="btn btn-primary my-8">
      submit for review
    </button>
  </FormControl>
</template>

<script>
import info from '@iconify/icons-la/info';
import checkCircle from '@iconify/icons-la/check-circle';
import FormControl from '@/components/app/manage/creator/FormControl';
import AppIcon from '@/components/common/AppIcon';
import AlertBox from '~/components/common/AlertBox';

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
};
</script>
