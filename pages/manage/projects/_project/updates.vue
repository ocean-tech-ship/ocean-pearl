<template>
  <div>
    <h4>
      {{ $t('manage.updates.title')[0] }}
      <span class="text-primary">
        {{ $t('manage.updates.title')[1] }}
      </span>
    </h4>

    <span>
      {{ $t('manage.updates.subtitle') }}
    </span>

    <project-updates-input />

    <h4>
      Update
      <span class="text-primary"> history </span>
    </h4>
  </div>
</template>

<script>
import Vue from 'vue';
import ProjectUpdatesInput from '@/components/app/manage/project/ProjectUpdatesInput';

export default Vue.extend({
  components: { ProjectUpdatesInput },
});
</script>
