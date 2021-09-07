<template>
  <div class="relative">
    <!-- overlay -->
    <div class="absolute w-full flex justify-end">
      <button
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
        @click="$emit('delete')"
      >
        <span class="text-primary font-bold">X</span>
      </button>
    </div>

    <img
      class="w-full h-64 rounded object-cover"
      :src="src"
      :alt="$t('manage.project.pictures.title')"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectPicturesItem',

  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
