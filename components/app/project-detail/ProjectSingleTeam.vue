<template>
  <div v-if="!!project.team">
    <p class="text-primary small-text">
      {{ $t('project.team') }}
    </p>

    <project-single-team-member
      v-for="(member, index) in project.team"
      :key="index"
      :member="member"
    />
  </div>
</template>

<script>
import ProjectSingleTeamMember from '@/components/app/project-detail/ProjectSingleTeamMember';

export default {
  name: 'ProjectSingleTeam',

  components: {
    ProjectSingleTeamMember,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>
