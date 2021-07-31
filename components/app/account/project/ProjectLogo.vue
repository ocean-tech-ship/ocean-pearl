<template>
  <div class="shadow rounded p-4">
    <span class="text-primary">
      {{ $t('manage.project.logo') }}
    </span>

    <div class="flex flex-wrap items-center">
      <div class="w-16 h-16 mr-4">
        <img
          v-if="!!project.logo"
          :src="project.logo"
          :alt="$t('general.logo')"
          class="w-16 h-16 inline-block rounded-full"
        />
      </div>

      <div class="flex">
        <div class="mx-2">
          <app-button :text="$t('general.upload')" />
        </div>

        <div class="mx-2">
          <app-button secondary :text="$t('general.delete')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton'

export default {
  name: 'ProjectLogo',

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
}
</script>

<style scoped></style>
