<template>
  <div class="bg-base-200 p-2 px-4 md:px-8 flex justify-between">
    <button
      type="button"
      class="btn btn-primary btn-outline"
      @click="$emit('navigate', -1)"
    >
      {{ $t('general.back') }}
    </button>

    <button
      type="button"
      class="btn btn-primary"
      :disabled="!next"
      @click="$emit('navigate', +1)"
    >
      {{ $t('general.continue') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CreatorMobileFooter',

  props: {
    next: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
