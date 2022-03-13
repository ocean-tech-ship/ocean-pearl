<template>
  <manage-scaffold>
    <template #navigation>
      <ul class="steps steps-vertical py-8">
        <li
          v-for="step in $t('creator.project.steps')"
          :key="step"
          class="step"
        >
          {{ step }}
        </li>
      </ul>
    </template>
    new project
  </manage-scaffold>
</template>

<script>
import Vue from 'vue';
import ManageScaffold from '@/components/app/manage/ManageScaffold';

export default Vue.extend({
  components: { ManageScaffold },
  layout: 'manage',
});
</script>
