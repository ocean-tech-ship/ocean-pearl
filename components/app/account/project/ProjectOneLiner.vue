<template>
  <div class="shadow rounded p-4">
    <label class="label">
      <span class="label-text text-primary">{{
        $t('manage.project.one-liner')
      }}</span>
      <span class="label-text-alt text-third">
        {{ `(${text.length} / ${PROJECT_ONE_LINER_MAX_LENGTH})` }}
      </span>
    </label>

    <input
      v-model="text"
      type="text"
      class="w-full input input-border border-primary"
      @change="$emit('change', text)"
    />
  </div>
</template>

<script>
import Constants from '@/mixins/Constants';

export default {
  name: 'ProjectOneLiner',

  mixins: [Constants],

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      text: this.$props.project.oneLiner ?? '',
    };
  },

  watch: {
    project(newVal) {
      this.text = newVal.oneLiner ?? '';
    },

    text(newVal) {
      if (newVal.length > this.PROJECT_ONE_LINER_MAX_LENGTH) {
        this.text = newVal.substring(0, this.PROJECT_ONE_LINER_MAX_LENGTH);
      }
    },
  },
};
</script>
