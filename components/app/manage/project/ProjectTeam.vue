<template>
  <div class="p-4 rounded shadow bg-base-200">
    <div class="flex justify-between">
      <span class="label-text text-primary">
        {{ $t('project.team') }}
      </span>

      <!-- add new action -->
    </div>

    <div class="pt-4">
      <span class="italic">coming soon</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTeam',

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
