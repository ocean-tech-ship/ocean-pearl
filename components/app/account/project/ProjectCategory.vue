<template>
  <div class="flex">
    <button-emit-with-dropdown
      class="text-primary rounded md:w-44"
      :button-name="$t('project.category')"
      :menu-items="categories"
      @selected="$emit('change', $event.value)"
    />
  </div>
</template>

<script>
import ButtonEmitWithDropdown from '@/components/common/ButtonEmitWithDropdown.vue';
import CategoryEnum from '@/components/enums/Category.enum'
import { CategoryMap } from '@/components/constants/CategoryMap.constant'

export default {
  name: 'ProjectCategory',

  components: { ButtonEmitWithDropdown },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  computed: {
    categories () {
      return Object.values(CategoryEnum)
        .filter(el => el !== CategoryEnum.All)
        .map(el => ({
          value: el,
          content: CategoryMap[el],
          selected: this.$props.project.category === el,
      }));
    }
  },
}
</script>

<style scoped>

</style>
