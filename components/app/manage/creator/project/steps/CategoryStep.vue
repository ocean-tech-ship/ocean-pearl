<template>
  <FormControl label="Select the category of your project">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <button
        v-for="category in categories"
        :key="category.id"
        :class="{
          'border-primary border-2 hover:border-primary':
            project.category === category.id,
        }"
        class="btn btn-ghost bg-base-200 h-48 flex-col justify-around"
        @click="$emit('change', { category: category.id })"
      >
        <img :src="category.icon" :alt="category.title" class="w-20 h-20" />
        <span class="font-bold text-smbase">{{ category.title }}</span>
      </button>
    </div>
  </FormControl>
</template>

<script>
import ProjectCategoryEnum from '@/enums/ProjectCategory.enum';
import FormControl from '@/components/app/manage/creator/FormControl';
import { ProjectCategoryTypeMap } from '@/mapper/ProjectCategoryType.mapper';

export default {
  name: 'CategoryStep',

  components: { FormControl },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      categories: Object.values(ProjectCategoryEnum).map((id) => ({
        id,
        title: ProjectCategoryTypeMap[id],
        icon: require(`@/assets/images/icons/categories/${id}.svg`),
      })),
    };
  },
};
</script>
