<template>
  <div>
    <span class="text-primary small-text">
      {{ $t('manage.project.images.title') }}
    </span>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-2">
      <div
        v-for="picture in project.pictures"
        :key="picture.id"
        class="relative"
      >
        <!-- overlay -->
        <div class="absolute w-full flex justify-end">
          <div
            class="
              rounded-full
              m-4
              h-12
              w-12
              flex
              items-center
              justify-center
              bg-secondary
            "
          >
            <span class="text-primary font-bold">X</span>
          </div>
        </div>

        <img
          class="w-full h-64 rounded object-cover"
          :src="picture.url"
          :alt="$t('manage.project.images.title')"
        />
      </div>

      <!-- upload card -->
      <div
        class="
          w-full
          h-64
          rounded
          bg-secondary
          border-2 border-dashed border-primary
          flex
          justify-center
          items-center
        "
      >
        <app-upload secondary :text="$t('manage.project.images.upload')" />
      </div>
    </div>
  </div>
</template>

<script>
import AppUpload from '@/components/common/AppUpload'

export default {
  name: 'ProjectImages',

  components: { AppUpload },

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
