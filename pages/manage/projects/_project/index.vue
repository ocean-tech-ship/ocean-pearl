<template>
  <div class="space-y-6">
    <h4>
      {{ $t('manage.general.title')[0] }}
      <span class="text-primary">
        {{ $t('manage.general.title')[1] }}
      </span>
    </h4>

    <span>
      {{ $t('manage.general.subtitle') }}
    </span>

    <div class="space-y-6 md:space-y-0 md:flex justify-between items-start">
      <project-category
        class="flex-grow md:flex-initial"
        :project="project"
        @change="updateProperty('category', $event)"
      />

      <project-logo
        label
        class="flex-grow md:flex-initial"
        :project="project"
        @change="updateProperty('logo', $event)"
      />
    </div>

    <div class="p-4 shadow rounded bg-base-200">
      <project-one-liner
        :project="project"
        @change="updateProperty('oneLiner', $event)"
      />
      <project-description
        :project="project"
        @change="updateProperty('description', $event)"
      />
    </div>

    <project-socials
      :project="project"
      @change="updateProperty('mediaHandles', $event)"
    />

    <project-images
      :project="project"
      @change="updateProperty('images', $event)"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import ProjectCategory from '@/components/app/manage/project/ProjectCategory';
import ProjectLogo from '@/components/app/manage/project/ProjectLogo';
import ProjectOneLiner from '@/components/app/manage/project/ProjectOneLiner';
import ProjectDescription from '@/components/app/manage/project/ProjectDescription';
import ProjectSocials from '@/components/app/manage/project/ProjectSocials';
import ProjectImages from '@/components/app/manage/project/ProjectImages';

export default Vue.extend({
  components: {
    ProjectImages,
    ProjectSocials,
    ProjectDescription,
    ProjectOneLiner,
    ProjectLogo,
    ProjectCategory,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  methods: {
    updateProperty(property, value) {
      this.$emit('change', {
        property,
        value,
      });
    },
  },
});
</script>
