<template>
  <button
    type="button"
    class="
      select-none
      rounded
      font-medium
      py-2
      px-6
      shadow
      items-center
      justify-center
    "
    :class="[
      secondary
        ? 'bg-white text-primary border-2 border-primary'
        : 'call-to-action text-secondary',
    ]"
    @click="$refs.upload.click()"
  >
    <span>{{ text }}</span>

    <input
      ref="upload"
      type="file"
      :accept="accept"
      class="hidden"
      @change="$emit('change', $event)"
    />
  </button>
</template>

<script>
export default {
  name: 'AppUpload',

  props: {
    text: {
      type: String,
      default: '',
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    accept: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.call-to-action {
  background: linear-gradient(to right, #bb2c75 1%, #ff98cd);
}
</style>
