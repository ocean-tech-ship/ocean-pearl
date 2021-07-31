<template>
  <div>
    <span class="text-primary">
      {{ $t('manage.project.description') }}
    </span>

    <div v-if="!edit">
      <p class="mb-2 line-clamp-5">
        {{ project.description }}
      </p>

      <app-button secondary :text="$t('general.edit')" @click="edit = true" />
    </div>

    <div v-else>
      <textarea
        class="w-full shadow rounded text-base p-4 mb-2"
        rows="5"
        :value="project.description"
      />

      <app-button secondary :text="$t('general.undo')" @click="edit = false" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton'

export default {
  name: 'ProjectDescription',

  components: {
    AppButton,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      edit: false,
    }
  },
}
</script>

<style scoped></style>
