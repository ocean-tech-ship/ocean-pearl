<template>
  <div class="p-4 rounded shadow bg-base-200">
    <app-select
      :label="$t('project.category')"
      :items="categories"
      :value="project.category"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
import AppSelect from '@/components/common/AppSelect';
import CategoryEnum from '@/enums/Category.enum';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';

export default {
  name: 'ProjectCategory',
  components: { AppSelect },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    categories() {
      return Object.values(CategoryEnum)
        .filter((el) => el !== CategoryEnum.All)
        .map((el) => ({
          text: CategoryMap[el],
          value: el,
        }));
    },
  },
};
</script>
