<template>
  <div class="bg-base-200 p-2 px-4 md:px-8 flex justify-between">
    <button
      type="button"
      class="btn btn-primary btn-outline"
      @click="$emit('back')"
    >
      {{ $t('general.back') }}
    </button>

    <button
      type="button"
      class="btn bg-gradient-primary-variant"
      @click="$emit('continue')"
    >
      {{ $t('general.continue') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CreatorMobileFooter',
};
</script>
