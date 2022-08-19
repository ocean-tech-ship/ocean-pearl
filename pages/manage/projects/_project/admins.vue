<template>
  <div>
    <h4>
      {{ $t('manage.admins.title')[0] }}
      <span class="text-primary">
        {{ $t('manage.admins.title')[1] }}
      </span>
    </h4>

    <span>
      {{ $t('manage.admins.subtitle') }}
    </span>

    <project-admins
      :project="project"
      @change="$emit('change', { accessAddresses: $event })"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import ProjectAdmins from '@/components/app/manage/project/ProjectAdmins';

export default Vue.extend({
  components: { ProjectAdmins },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
});
</script>
