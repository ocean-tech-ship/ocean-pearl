<template>
  <div class="p-4 rounded shadow bg-base-200">
    <app-select-dropdown
      :label="$t('project.category')"
      :items="categories"
      :value="project.category"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import CategoryEnum from '@/enums/Category.enum';
import AppSelectDropdown from '@/components/common/AppSelectDropdown';

export default {
  name: 'ProjectCategory',
  components: { AppSelectDropdown },

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
