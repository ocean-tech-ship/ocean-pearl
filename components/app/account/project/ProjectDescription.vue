<template>
  <div>
    <span class="text-primary small-text">
      {{ $t('manage.project.description') }}
    </span>

    <div v-if="!edit">
      <p class="mb-2 line-clamp-5 small-text">
        {{ project.description }}
      </p>

      <app-button secondary :text="$t('general.edit')" @click="edit = true" />
    </div>

    <div v-else>
      <textarea
        v-model="description"
        class="w-full shadow rounded small-text p-4 mb-2"
        rows="5"
        @change="$emit('change', description)"
      />

      <app-button
        secondary
        :text="$t('general.undo')"
        @click="
          edit = false
          $emit('unset')
        "
      />
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
      description: this.$props.project.description,
    }
  },

  watch: {
    project() {
      // Reset if project gets switched
      this.description = this.$props.project.description
      this.edit = false
    },
  },
}
</script>

<style scoped></style>
